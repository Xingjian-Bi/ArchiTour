import React from "react";
import { Link } from "react-router-dom";
// import logo from "./logo192.png";

function Navbar({ icon, title }) {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				{/* <img
					src={logo}
					alt='logo'
					style={{ width: "20px", margin: "auto", display: "block" }}
				/> */}
				{title}
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				{
					<li>
						<Link to='/login'>Login</Link>
					</li>
				}
			</ul>
		</nav>
	);
}

Navbar.defaultProps = {
	title: "ArchiTour",
};

export default Navbar;
