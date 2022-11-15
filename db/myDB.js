const { MongoClient, ObjectID } = require("mongodb");
const url = process.env.MONGO_URL;
const DB_name = "archi-tour-db";

function myDB() {
	const myDB = {};
	const usersCollection = "users";

	myDB.findUserName = async (username) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name);
			const user = await db
				.collection(usersCollection)
				.findOne({ username: username });
			console.log("find user name", user);
			return user;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.registerUser = async (username, password) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(usersCollection);
			const res = await db.insertOne({
				username: username,
				password: password,
			});
			console.log("register user", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	//get list of all architectures
	myDB.getArchitectures = async (findBy, value) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection("architectures");
			let query = {};
			if (findBy == ":name") {
				query = { name: value };
			} else if (findBy == ":city") {
				query = { city: value };
			} else {
				query = {};
			}
			const res = await db.find(query).toArray();
			console.log("list of all architectures", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.getArchiByID = async (id) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection("architectures");
			const res = await db.findOne({ _id: new ObjectID(id) }).toArray();
			console.log("get architecture by id", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.addItinerary = async (itineray) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection("itinerary");
			const res = await db.insertOne(itineray);
			console.log("get architecture by id", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.addItinerary = async (itineray) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection("itinerary");
			const res = await db.insertOne(itineray);
			console.log("adds itinerary", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.addStop = async (itinerayID, archiID) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection("itinerary");
			const res = await db.updateOne(
				{ _id: new ObjectID(itinerayID) },
				{
					$push: {
						stops: { archiID : archiID },
					},
				}
			);
			console.log("add architecture to itinerary", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.deleteStop = async (archiID) => {
	  let client;
	  try {
		    client = new MongoClient(url);
		    await client.connect();
		    const db = client.db(DB_name).collection("itinerary");
		    const res = await db.deleteOne({ _id: ObjectID(archiID) });
		    console.log("delete architecture from itinerary", res);
		    return res;
	  } catch (e) {
	    	console.log(e);
	  } finally {
	    	await client.close();
	  }
	};

	return myDB;
}

module.exports = myDB();
