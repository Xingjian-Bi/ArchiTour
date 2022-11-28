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
	const tripCollection = "itinerary";

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

	//search architectures
	//needs to be modified
	myDB.getArchitectures = async (value) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(archiCollection);
			const query1 = { city: value };
			const query2 = { title: value };
			// const res1 = await db.find(query1).toArray();
			const res = await db
				.find({
					$or: [query1, query2],
				})
				.toArray();
			console.log("list of all architectures**", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	//get list of all architectures
	myDB.getAllArchitectures = async () => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(archiCollection);
			let query = {};
			const res = await db.find(query).toArray();
			// console.log('list of all architectures', res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.musicComment = async (archiID, username, comment) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(archiCollection);
			const res = await db.updateOne(
				{ _id: new ObjectID(archiID) },
				{
					$push: {
						comments: { username: username, comment: comment },
					},
				}
			);
			return res;
		} catch (error) {
			console.log(error);
		} finally {
			client.close();
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

	myDB.getItinerary = async () => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(tripCollection);
			let query = {};
			const res = await db.find(query).sort({ createTime: 1 }).toArray();
			console.log("get of all Itineraries from db", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.addItinerary = async (username) => {
		let client;
		try {
			var createTime = new Date();
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(tripCollection);
			const res = await db.insertOne({
				username: username,
				createTime: createTime,
			});
			console.log("added one Itinerary", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.deleteItinerary = async (id) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(tripCollection);
			const res = await db.deleteOne({ _id: ObjectID(id) });
			console.log("delete 1 itinerary", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.addStop = async (
		itinerayID,
		imageUrl,
		title,
		designer,
		address,
		phone,
		openTime,
		closeTime
	) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(tripCollection);
			const res = await db.updateOne(
				{ _id: new ObjectID(itinerayID) },
				{
					$push: {
						stops: {
							imageUrl: imageUrl,
							title: title,
							designer: designer,
							address: address,
							phone: phone,
							openTime: openTime,
							closeTime: closeTime,
						},
					},
				}
			);
			console.log("addStop: add 1 stop to itinerary", res);
			return res;
		} catch (e) {
			console.log(e);
		} finally {
			await client.close();
		}
	};

	myDB.deleteStop = async (id, title) => {
		let client;
		try {
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(tripCollection);

			const res = await db.update(
				{ _id: new ObjectID(id) },
				{
					$pull: {
						stops: {
							title: title,
						},
					},
				}
			);
			console.log("*******delete 1 stop from itinerary", res);
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
