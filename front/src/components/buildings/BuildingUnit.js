import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BuildingUnit({ building: { title, imageUrl, city } }) {
	// console.log(title);
	return (
		<div className='buildingUnit'>
			{/* this will call routes in App.js and create a route to BuildingDetail */}
			<Link to={`/building/${title}`}>
				<img className='img' src={imageUrl} alt='{title}' />
			</Link>
			<div className='subheader'>
				<h5 className='title'>{title}</h5>
				<h5 className='city'>{city}</h5>
			</div>
		</div>
	);
}
BuildingUnit.propTypes = {
	building: PropTypes.object.isRequired,
};
export default BuildingUnit;
