const express = require('express');
const router = express.Router();
const myDB = require('../db/myDB.js');
// const passport = require("passport");
<<<<<<< HEAD

require('dotenv').config();

router.post('/signin', async (req, res) => {
  try {
    const userRes = await myDB.authenticate(
      req.body.username,
      req.body.password
    );
    console.log('userRes', userRes);
    if (userRes) {
      req.session.user = req.body.username;
      console.log('req.session.user: ', req.session.user);
      res.status(200).json({ info: 'ok' });
    } else {
      console.log('Incorrect password');
      res.status(403).json({ info: 'Incorrect password' });
    }
  } catch (e) {
    res.status(400).send({ err: e });
  }
});

// router.get("/logout", (req, res) => {
// 	req.logout();
// 	res.redirect("/signin");
// });

// route for registering a new user
router.post('/registerUser', async (req, res) => {
  try {
    const findUserRes = await myDB.findUserName(req.body.username);
    // console.log("Get username from login", findUserRes);

    // If findUserRes array is empty then we call registerUser function
    if (findUserRes !== null) {
      res.status(406).json({ error: 'User already exists' });
    } else {
      const registerUserRes = await myDB.registerUser(
        req.body.username,
        req.body.password
      );
      console.log('Created user in db', registerUserRes);
      // res.redirect("/login");
      res.status(200).json({ info: 'ok' });
      // Send findUserRes to frontend and it will update accordingly
      // res.send({ users: findUserRes });
    }
  } catch (e) {
    res.status(400).send({ err: e });
  }
});

//route for get all architectures
router.get('/architectures/:findBy/:value', async (req, res) => {
  try {
    const archiRes = await myDB.getArchitectures(
      req.params.findBy,
      req.params.value
    );
    console.log('get architectures data from db ', archiRes);
    res.send({ archiRes });
  } catch (e) {
    res.status(400).send({ err: 'error-route' });
  }
});

router.get('/allarchitectures', async (req, res) => {
  try {
    const archiRes = await myDB.getAllArchitectures();
    console.log('get all architectures data from db ', archiRes);
    res.send({ archiRes });
  } catch (e) {
    res.status(400).send({ err: e });
  }
});

router.post('/myItinerary', async (req, res) => {
  try {
    const itineraryRes = await myDB.addItinerary(req.body);
    console.log('added an itinerary from db ', itineraryRes);
    res.send({ status: 'ok' });
  } catch (e) {
    res.status(400).send({ err: e });
  }
});

router.post('/addStop', async (req, res) => {
  try {
    const addRes = await myDB.addStop(req.body.itinerayID, req.body.archiID);
    console.log('add stop in itineray from db ', addRes);
    res.send({ status: 'ok' });
  } catch (e) {
    res.status(400).send({ err: e });
  }
});

router.post('/deleteStop', async (req, res) => {
  try {
    const delRes = await myDB.deleteStop(req.body.archiID);
    console.log('deleted stop in itineray from db ', delRes);
    res.send({ status: 'ok' });
  } catch (e) {
    res.status(400).send({ err: e });
  }
=======

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
router.get("/architectures/:findBy/:value", async (req, res) => {
	try {
		const archiRes = await myDB.getArchitectures(
			req.params.findBy,
			req.params.value
		);
		console.log("get architectures data from db ", archiRes);
		res.send( archiRes );
	} catch (e) {
		res.status(400).send({ err: "error-route" });
	}
});

router.get("/allarchitectures", async (req, res) => {
	try {
		const archiRes = await myDB.getAllArchitectures();
		console.log("get all architectures data from db ", archiRes);
		res.send( archiRes );
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

router.post("/myItinerary", async (req, res) => {
	try {
		const itineraryRes = await myDB.addItinerary(req.body);
		console.log("added an itinerary from db ", itineraryRes);
		res.send({ status: "ok" });
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

router.post("/addStop", async (req, res) => {
	try {
		const addRes = await myDB.addStop(
			req.body.itinerayID,
			req.body.archiID
		);
		console.log("add stop in itineray from db ", addRes);
		res.send({ status: "ok" });
	} catch (e) {
		res.status(400).send({ err: e });
	}
});

router.post("/deleteStop", async (req, res) => {
	try {
		const delRes = await myDB.deleteStop(req.body.archiID);
		console.log("deleted stop in itineray from db ", delRes);
		res.send({ status: "ok" });
	} catch (e) {
		res.status(400).send({ err: e });
	}

>>>>>>> 337e551977efc5e5a2ae547f4e0e5f7a806009a6
});

module.exports = router;
