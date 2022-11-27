import React, { useContext } from "react";
import PropTypes from "prop-types";

// import Stop from "./Stop";
import "./style/Itinerary.css";
import ArchiContext from "../../context/archiTour/archiContext";

function Itinerary({ day }) {

	const archiContext = useContext(ArchiContext);
	const { setItineraryIndex } = archiContext;
	const clickDays = async () => {
		setItineraryIndex(day-1);
	}

	return (
		<div>
		<button className="button" onClick={clickDays}>Day {day}</button>
		</div>
	);

}

Itinerary.propTypes = {
	day: PropTypes.number.isRequired,
};

export default Itinerary;