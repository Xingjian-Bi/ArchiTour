import React, { useContext } from "react";
import PropTypes from "prop-types";

// import Stop from "./Stop";
import "./style/Itinerary.css";
import ArchiContext from "../../context/archiTour/archiContext";

function Itinerary({ day, reloadData, itineraryID }) {
	const archiContext = useContext(ArchiContext);
	const { deleteItinerary, setItineraryIndex } = archiContext;

	const clickDays = async () => {
		setItineraryIndex(day-1);
	}

	const deleteOneItinerary = async () => {
		await deleteItinerary(itineraryID);
		console.log("itineraryID", itineraryID);
		await reloadData();
		console.log(" delete itinerary reload Data");
	}

	return (
		<div>
		<button className="button" onClick={clickDays}>Day {day}</button>
		<button className="delbutton" onClick={deleteOneItinerary}> delete </button>
		</div>
	);

}

Itinerary.propTypes = {
	day: PropTypes.number.isRequired,
	itineraryID: PropTypes.string.isRequired,
	reloadData: PropTypes.func.isRequired,
};

export default Itinerary;