import React, { useContext, useEffect } from "react";
// import PropTypes from "prop-types";

import SearchBuilding from "./SearchBuilding";
import Stop from "./Stop";
import StopList from "./StopList";
import ItineraryList from "./ItineraryList";
import AddItinerary from "./AddItinerary";
import "./style/Trip.css";

import ArchiContext from "../../context/archiTour/archiContext";

function Trip() {
	const archiContext = useContext(ArchiContext);
	const {
		getItinerary,
		itineraries,
		itineraryIndex,
		setItinerary,
		itinerary,
		itineraryID,
		setItineraryID
	} = archiContext;

	useEffect(() => {
		getItinerary();
		// console.log("itineraryIndex:", itineraryIndex);
		// console.log("itinerary:", itinerary);
	}, [itineraryIndex]);

	useEffect(() => {
		if (itineraries[itineraryIndex] !== undefined) {
			setItinerary(itineraries[itineraryIndex].stops);
			console.log("stops", itinerary);
			setItineraryID(itineraries[itineraryIndex]._id);
			console.log("itineraryID", itineraryID);
		}

		// console.log("itineraryIndex:", itineraryIndex);
		// console.log("itinerary:", itinerary);
	}, [itineraries]);

	const reloadData = async () => {
		await getItinerary();
	};

	// console.log("itineraryIndex", itineraryIndex);

	// var stops = {}
	// console.log("hi",itineraries[itineraryIndex]);
	// if (itineraries[itineraryIndex] !== undefined){
	// 	setItinerary(itineraries[itineraryIndex].stops);
	// 	console.log("stops", itinerary);

	// }

	// {_id: '6382f17f539eb8bab2914616', username: 'harry', createTime: '2022-11-27T05:11:27.518Z', stops: Array(2)}
	// var stops = itineraries[0];
	// console.log("print stops: ", stops)

	return (
		<div>
			<SearchBuilding itineraryID={itineraryID} reloadData={reloadData}/>
			<div className="trip">
				<div className="left">
					<h3>My Trip</h3>
					<h3>Day {itineraryIndex + 1}</h3>
					<br />
					<ItineraryList itineraries={itineraries} />
					<AddItinerary reloadData={reloadData} />
				</div>
				<div className="gap"></div>
				<div className="right">
					<br />
					<br />
{/*itineraries[itineraryIndex]*/}
					{ itinerary === undefined ?  <div>No Data</div> : <StopList stops={itinerary} /> }
					
					{/*			<Stop />
			<Stop />
			<Stop />*/}
				</div>
			</div>
		</div>
	);
}

Trip.propTypes = {};

export default Trip;
