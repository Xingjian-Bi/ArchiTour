const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const router = require("./routes/route.js");

const port = process.env.PORT || 8000;
const app = express();

app.use(
	session({
		secret: "myapparchitrip",
		resave: false,
		saveUninitialized: true,
		cookie: { maxAge: 120000 },
	})
);

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		// to support URL-encoded bodies
		extended: true,
	})
);

app.use(router);

// Search html file under "public" folder
app.use(express.static(path.join(__dirname, "front/build")));

//How do we start listening to the server
app.listen(port, () => console.log(`server started on port ${port}`));
