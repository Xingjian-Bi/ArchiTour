import React from "react";
import PropTypes from "prop-types";

import SearchBuilding from "./SearchBuilding";
import Stop from "./Stop";
import ItineraryList from "./ItineraryList";
import "./style/Trip.css";

function Trip() {
	return (
		<div>
		<SearchBuilding />
		<div className="trip">
			<div className="left">
			<h3>My Trip</h3>
			<ItineraryList />
			</div>
			<div className="gap"></div>
			<div className="right">
			<Stop />
			<Stop />
			<Stop />
			</div>
		</div>
		</div>
	);
}

Trip.propTypes = {};

export default Trip;
