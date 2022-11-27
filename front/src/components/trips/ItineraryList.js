import React from "react";
import PropTypes from "prop-types";
import Itinerary from "./Itinerary";

const ItineraryList = ({ itineraries }) => {

	return (
		<div>
			<div>
				{itineraries.map((itinerary, i) => (
					<Itinerary key={itinerary._id} day={i+1} />
				))}
			</div>
		</div>
	);
};

ItineraryList.propTypes = {
	itineraries: PropTypes.array.isRequired,
};

export default ItineraryList;
