const express = require("express");
const router = express.Router();
const myDB = require("../db/myDB.js");

// route for registering a new user
router.post("/registerUser", async function (req, res) {
	try {
		const findUserRes = await myDB.findUserName(req.body.userName);
		console.log("Get username from login", findUserRes);

		// If findUserRes array is empty then we call registerUser function
		if (!findUserRes.length) {
 	 		const registerUserRes = await myDB.registerUser(req.body.userName, req.body.password);
  			console.log("Created user in db", registerUserRes);
		}
		// Send findUserRes to frontend and it will update accordingly
		res.send({ users: findUserRes });
	} catch (error) {
		res.status(400).send({ err: error });
	}
});


module.exports = router;