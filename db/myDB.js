const { MongoClient, ObjectID } = require("mongodb");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();
const url = process.env.MONGO_URL;
const DB_name = "archi-tour-db";

function myDB() {
	const myDB = {};
	const usersCollection = "users";
	const archiCollection = "architectures";

	myDB.findUserName = async (username) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(usersCollection);
			const user = await db.findOne({ username: username });
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
			const encriptPassword = bcrypt.hashSync(password, 10);
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(usersCollection);
			const res = await db.insertOne({
				username: username,
				password: encriptPassword,
			});
			console.log("register user", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.authenticate = async (username, password) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(usersCollection);
			const user = await db.findOne({ username: username });
			console.log("find user from db", user);
			return user !== null && bcrypt.compareSync(password, user.password);
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
			const db = client.db(DB_name).collection(archiCollection);
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

	myDB.getAllArchitectures = async () => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(archiCollection);
			let query = {};
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
			const db = client.db(DB_name).collection(archiCollection);
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
