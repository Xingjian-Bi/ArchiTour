import React from "react";
import { Link } from "react-router-dom";

function BuildingUnit({ building: { title, imageUrl, city } }) {
	console.log(title);
	return (
		<div className='buildingUnit'>
			{/* this will call routes in App.js and create a route to BuildingDetail */}
			<Link to={`/building/${title}`}>
				more
				{/* <img className='img' src={imageUrl} alt='{title}' /> */}
			</Link>

			<div className='subheader'>
				<h3 className='title'>{title}</h3>
				<h3 className='city'>{city}</h3>
			</div>
		</div>
	);
}

export default BuildingUnit;
