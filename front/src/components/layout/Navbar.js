import React, { useContext } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import "./style/Navbar.css";
import logo from "./logo.jpg";

import ArchiContext from "../../context/archiTour/archiContext";

function Navbar({ icon, title }) {
	const archiContext = useContext(ArchiContext);
	const { user } = archiContext;
	return (
		<nav className="navbar bg-primary">
			<h1>
				<img
					src={icon}
					alt="logo"
					style={{
						width: "40px",
						marginRight: "10px",
						display: "block",
					}}
				/>
				{title}
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>

				{/*				{user === "" || user === undefined ? (
					<li>
						<br />
					</li>
				) : (
					<li>
						<Link to="/myTrips">MyTrip</Link>
					</li>
				)}*/}
				<li>
					<Link to="/myTrips">MyTrip</Link>
				</li>

				{user === "" || user === undefined ? (
					<li>
						<Link to="/login">Login</Link>
					</li>
				) : (
					<li>Welcome {user}</li>
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
			</ul>
		</nav>
	);
}

Navbar.defaultProps = {
	title: "ArchiTour",
	icon: logo,
};

Navbar.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Navbar;
