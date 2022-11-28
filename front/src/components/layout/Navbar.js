import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ArchiContext from "../../context/archiTour/archiContext";
// import logo from "./logo192.png";

function Navbar({ icon, title }) {
	const archiContext = useContext(ArchiContext);
	const { user } = archiContext;
	return (
		<nav className="navbar bg-primary">
			<h1>
				{title}
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{user === "" || user === undefined ? (
					<li>
						<br />
					</li>
				) : (
					<li>
						<Link to="/myTrips">MyTrip</Link>
					</li>
				)}

				{user === "" || user === undefined ? (
				<li>
					<Link to="/login">Login</Link>
				</li>
				) : (
					<li>
						Welcome {user}
					</li>
				)}

				{user === "" || user === undefined ? (
				<li>
					<br />
				</li>
				) : (
				<li>
					<Link to="/login">Different account</Link>
				</li>
				)}



{/*				<li>
					<Link to="/login">Login</Link>
				</li>*/}
			</ul>
		</nav>
	);
}

Navbar.defaultProps = {
	title: "ArchiTour",
};

export default Navbar;
