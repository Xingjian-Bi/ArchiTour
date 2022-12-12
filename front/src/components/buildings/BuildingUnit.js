import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style/BuildingUnit.css";

function BuildingUnit({ building: { title, imageUrl, city } }) {
	// console.log(title);
	return (
		<section>
			<div className="buildingUnit">
				{/* this will call routes in App.js and create a route to BuildingDetail */}
				<Link to={`/building/${title}`}>
					<img className="img" src={imageUrl} alt={title} />
				</Link>
				<div className="subheader">
					<h3 className="title">{title}</h3>
					<h3 className="city">{city}</h3>
				</div>
			</div>
		</section>
	);
}
BuildingUnit.propTypes = {
	building: PropTypes.object.isRequired,
};
export default BuildingUnit;
