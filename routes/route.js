const express = require("express");
const router = express.Router();
const myDB = require("../db/myDB.js");
// const passport = require("passport");

require("dotenv").config();

router.post("/signin", async (req, res) => {
	try {
		const userRes = await myDB.authenticate(
			req.body.username,
			req.body.password
		);
		console.log("userRes", userRes);
		if (userRes) {
			req.session.user = req.body.username;
			console.log("req.session.user: ", req.session.user);
			res.status(200).json({ info: "ok" });
		} else {
			console.log("Incorrect password");
			res.status(403).json({ info: "Incorrect password" });
		}
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

router.get("/getUsername", (req, res) => {
	res.send({ user: req.session.user });
});

router.get("/getUser/:value", async (req, res) => {
	try {
		const userRes = await myDB.findUserName(req.params.value);
		console.log(req.params.value);
		console.log("1111111get user data from db ", userRes);
		res.send(userRes);
	} catch (e) {
		res.status(400).send({ err: "error-route" });
	}
});

// router.get("/logout", (req, res) => {
// 	req.logout();
// 	res.redirect("/signin");
// });

// route for registering a new user
router.post("/registerUser", async (req, res) => {
	try {
		const findUserRes = await myDB.findUserName(req.body.username);
		// console.log("Get username from login", findUserRes);

		// If findUserRes array is empty then we call registerUser function
		if (findUserRes !== null) {
			res.status(406).json({ error: "User already exists" });
		} else {
			const registerUserRes = await myDB.registerUser(
				req.body.username,
				req.body.password
			);
			console.log("Created user in db", registerUserRes);
			// res.redirect("/login");
			res.status(200).json({ info: "ok" });
			// Send findUserRes to frontend and it will update accordingly
			// res.send({ users: findUserRes });
		}
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

//route for get all architectures
router.get("/architectures/:value", async (req, res) => {
	try {
		const archiRes = await myDB.getArchitectures(req.params.value);
		console.log(req.params.value);
		console.log("get architectures data from db ", archiRes);
		res.send(archiRes);
	} catch (e) {
		res.status(400).send({ err: "error-route" });
	}
});

router.get("/allarchitectures", async (req, res) => {
	try {
		const archiRes = await myDB.getAllArchitectures();
		// console.log('get all architectures data from db ', archiRes);
		res.send(archiRes);
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

//route for add comment
router.post("/archiComment", async (req, res) => {
	console.log("test router", req.body.archiID, req.body.user, req.body.comment);
	try {
		const commentRes = await myDB.archiComment(
			req.body.archiID,
			req.body.user,
			req.body.comment
		);
		console.log("Comment added", commentRes);
		res.status(200).json({ info: "ok" });
	} catch (error) {
		res.status(400).send({ err: error });
	}
});

router.get("/allItinerary", async (req, res) => {
	try {
		const itineraryRes = await myDB.getItinerary();
		console.log("added an itinerary from db ", itineraryRes);
		res.send(itineraryRes);
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

router.post("/addItinerary", async (req, res) => {
	try {
		const addRes = await myDB.addItinerary(req.body.username);
		console.log("added an itinerary from db ", addRes);
		res.send({ status: "ok" });
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

router.post("/deleteItinerary", async (req, res) => {
	try {
		const delRes = await myDB.deleteItinerary(req.body.id);
		console.log("deleted 1 itineray from db ", delRes);
		res.send({ status: "ok" });
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

router.post("/addStop", async (req, res) => {
	try {
		const addRes = await myDB.addStop(
			req.body.itinerayID,
			req.body.imageUrl,
			req.body.title,
			req.body.designer,
			req.body.address,
			req.body.phone,
			req.body.openTime,
			req.body.closeTime
		);
		console.log("add stop in itineray from db ", addRes);
		res.status(200).json({ info: "ok" });
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

router.post("/deleteStop", async (req, res) => {
	try {
		const delRes = await myDB.deleteStop(req.body.id, req.body.title);
		console.log("deleted stop in itineray from db ", delRes);
		res.send({ status: "ok" });
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

module.exports = router;
