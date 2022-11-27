import React from "react";
import PropTypes from "prop-types";

// import Stop from "./Stop";
import "./style/Itinerary.css";

function Itinerary({ day }) {
	return (
		<div>
		<button className="button">Day {day}</button>
		</div>
	);
}

Itinerary.propTypes = {
	day: PropTypes.string.isRequired,
};

export default Itinerary;