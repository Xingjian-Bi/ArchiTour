import React, { useContext } from "react";
import PropTypes from "prop-types";

import "./style/Itinerary.css";
import ArchiContext from "../../context/archiTour/archiContext";


function AddItinerary({ reloadData }) {
	const archiContext = useContext(ArchiContext);
	const { addItinerary, user } = archiContext;

	const addTrip = async () => {
		addItinerary(user);
		await reloadData();
		console.log("reload Data");
	}


	return (
		<div>
		<button className="button" onClick={addTrip}>Add Day</button>
		</div>
	);
}

AddItinerary.propTypes = {
	reloadData: PropTypes.func.isRequired,
};

export default AddItinerary;