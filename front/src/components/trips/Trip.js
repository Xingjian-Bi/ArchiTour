import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import SearchBuilding from "./SearchBuilding";
import Stop from "./Stop";
import ItineraryList from "./ItineraryList";
import AddItinerary from "./AddItinerary";
import "./style/Trip.css";

import ArchiContext from "../../context/archiTour/archiContext";

function Trip() {
	const archiContext = useContext(ArchiContext);
	const { getItinerary, itineraries } = archiContext;

	useEffect(() => {
		 getItinerary();
	}, []);

	function reloadData () {
		getItinerary();
	}


	console.log("itineraries from ItineraryList: ", itineraries);

	return (
		<div>
		<SearchBuilding />
		<div className="trip">
			<div className="left">
			<h3>My Trip</h3>
			<br />
			<ItineraryList itineraries={itineraries}/>
			<AddItinerary reloadData={reloadData} />
			</div>
			<div className="gap"></div>
			<div className="right">
			<br />
			<br />
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
