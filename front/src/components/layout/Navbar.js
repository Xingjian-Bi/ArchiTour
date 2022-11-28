import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style/Navbar.css";
import logo from "./logo.jpg";

function Navbar({ icon, title }) {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<img
					src={icon}
					alt='logo'
					style={{ width: "40px", marginRight: "10px", display: "block" }}
				/>
				{title}
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/myTrips'>MyTrip</Link>
				</li>
				<li>
					<Link to='/login'>Login</Link>
				</li>
			</ul>
		</nav>
	);
}

Navbar.defaultProps = {
	title: "ArchiTour",
	icon: logo,
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Navbar;
