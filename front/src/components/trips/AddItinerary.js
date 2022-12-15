import React, { useContext } from "react";
import PropTypes from "prop-types";

import "./style/Itinerary.css";
import ArchiContext from "../../context/archiTour/archiContext";


/* 
Firstly, I’d maybe try to fix for the usability of the Navigation Bar 
by discrimination the welcome text from the functional button. 
Secondly, in the page of my trip, it is very confusing and could be 
easily get lost at the glance of use the functionality. To add a 
clear instruction on the function logic for more user friendly 
like how to add would be a good idea. 
*/


function AddItinerary({ reloadData }) {
	const archiContext = useContext(ArchiContext);
	const { addItinerary, user } = archiContext;

	const addTrip = async () => {
		addItinerary(user);
		await reloadData();
		console.log("reload Data");
	};

	return (
		<div>
			<button className="button" onClick={addTrip}>
				Add Day
			</button>
		</div>
	);
}

AddItinerary.propTypes = {
	reloadData: PropTypes.func.isRequired,
};

export default AddItinerary;
