import React, { useContext, useEffect } from "react";
import SearchBuilding from "./SearchBuilding";
import Stop from "./Stop";
import Itinerary from "./Itinerary";
import AddItinerary from "./AddItinerary";
import ArchiContext from "../../context/archiTour/archiContext";
import "./style/Trip.css";

function Trip() {
	const archiContext = useContext(ArchiContext);
	const {
		user,
		getItinerary,
		itineraries,
		itineraryIndex,
		setItinerary,
		itinerary,
		itineraryID,
		setItineraryID,
	} = archiContext;

	useEffect(
		() => {
			reloadData();

			return () => {
				console.log("Cleaining up the effect");
			};
		},
		[] // eslint-disable-line react-hooks/exhaustive-deps
	);

	useEffect(() => {
		console.log("called Used Effect itineraryIndex");
		getItinerary(user);
	}, [itineraryIndex]); // eslint-disable-line react-hooks/exhaustive-deps

	//load stop data for each day
	useEffect(() => {
		console.log("called Used Effect itineraries");
		if (itineraries[itineraryIndex] !== undefined) {
			setItinerary(itineraries[itineraryIndex].stops);
			setItineraryID(itineraries[itineraryIndex]._id);
		}
	}, [itineraries]); // eslint-disable-line react-hooks/exhaustive-deps

	const reloadData = async () => {
		await getItinerary(user);
		console.log("called reloadData");
		if (itineraries[itineraryIndex] !== undefined) {
			setItinerary(itineraries[itineraryIndex].stops);
			setItineraryID(itineraries[itineraryIndex]._id);
		}
		await getItinerary(user);
	};

	return (
		<main>
			{user === "" || user === undefined ? (
				<div className="alert"> Please login to create itinerary </div>
			) : (
				<div>
					<SearchBuilding
						itineraryID={itineraryID}
						reloadData={reloadData}
					/>
					<div className="trip">
						<div className="left">
							<h3>My Trip</h3>
							<h4>Day {itineraryIndex + 1}</h4>
							<br />
							{itineraries === undefined ||
							itineraries.length === 0 ? (
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
						<div className="gap"></div>
						<div className="right">
							<br />
							<br />
							{itinerary === undefined ||
							itinerary.length === 0 ? (
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
			)}
		</main>
	);
}

Trip.propTypes = {};
export default Trip;
