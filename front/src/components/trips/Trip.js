import React, { useContext, useEffect } from "react";
// import PropTypes from "prop-types";

import SearchBuilding from "./SearchBuilding";
import Stop from "./Stop";
import Itinerary from "./Itinerary";
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
		setItineraryID,
	} = archiContext;

	// useEffect(() => {
	// 	getItinerary();
	// 	if (itineraries[itineraryIndex] !== undefined) {
	// 		setItinerary(itineraries[itineraryIndex].stops);
	// 		setItineraryID(itineraries[itineraryIndex]._id);
	// 	}
	// }, []);

	useEffect(
		() => {
			reloadData();

			return () => {
				console.log("Cleaining up the effect");
			};
		},
		[] // call it only once
	);

	useEffect(() => {
		console.log("called Used Effect itineraryIndex");
		getItinerary();
	}, [itineraryIndex]);

	//load stop data for each day
	useEffect(() => {
		console.log("called Used Effect itineraries");
		// getItinerary();
		if (itineraries[itineraryIndex] !== undefined) {
			setItinerary(itineraries[itineraryIndex].stops);
			setItineraryID(itineraries[itineraryIndex]._id);
		}
	}, [itineraries]);

	const reloadData = async () => {
		await getItinerary();
		console.log("called reloadData");
		if (itineraries[itineraryIndex] !== undefined) {
			setItinerary(itineraries[itineraryIndex].stops);
			setItineraryID(itineraries[itineraryIndex]._id);
			console.log("inside reloadData");
		}
		await getItinerary();
	};

	return (
		<div>
			<SearchBuilding itineraryID={itineraryID} reloadData={reloadData} />
			<div className='trip'>
				<div className='left'>
					<h3>My Trip</h3>
					<h4>Day {itineraryIndex + 1}</h4>
					<br />
					{/*<ItineraryList itineraries={itineraries} />*/}
					{itineraries === undefined || itineraries.length === 0 ? (
						<div>No itineraries </div>
					) : (
						<div>
							{itineraries.map((itinerary, i) => (
								<Itinerary
									key={itinerary._id}
									day={i + 1}
									reloadData={reloadData}
									itineraryID={itinerary._id}
								/>
							))}
						</div>
					)}
					<AddItinerary reloadData={reloadData} />
				</div>
				<div className='gap'></div>
				<div className='right'>
					<br />
					<br />
					{itinerary === undefined || itinerary.length === 0 ? (
						<div>No Data</div>
					) : (
						<div>
							{itinerary.map((stop, i) => (
								<Stop
									key={i}
									stop={stop}
									reloadData={reloadData}
									itineraryID={itineraryID}
								/>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

Trip.propTypes = {};

export default Trip;
