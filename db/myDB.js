const { MongoClient } = require("mongodb");
const url = process.env.MONGO_URL;
const DB_name = "archi-tour-db";

function myDB() {
	const myDB = {};
	const usersCollection = "users";

	myDB.findUserName = async (username) => {
		let client;
		try{
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name);
			const user = await db.collection(usersCollection).findOne({username: username}); 
			console.log("find user name", user);
			return user;		
		}catch(e){
			console.log(e);
		}finally{
			await client.close();
		}
	};


	myDB.registerUser = async (username, password) => {
		let client;
		try{
			client = new MongoClient(url);
			await client.connect();
			const db = client.db(DB_name).collection(usersCollection);
			const res = await db.insertOne({username: username, password: password}); 
			console.log("register user", res);
			return res;		
		}catch(e){
			console.log(e);
		}finally{
			await client.close();
		}
	};


	return myDB;
}

module.exports = myDB();