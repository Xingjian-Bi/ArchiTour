import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./style/AddArchitecture.css";
import ArchiContext from "../../context/archiTour/archiContext";

function AddArchitecture({ day, itineraryID, buildingName }) {
	const archiContext = useContext(ArchiContext);
	const { addStop } = archiContext;

	const clickDays = async (e) => {
		e.preventDefault();
		const rawData = await fetch(`/architectures/${buildingName}`);
		const res = await rawData.json();
		if (res.length === 0) {
			alert("no result");
			return console.log("no data");
		}
		console.log("on submit", res[0].imageUrl);
		console.log(res[0].title);
		addStop(
			itineraryID,
			res[0].imageUrl,
			res[0].title,
			res[0].designer,
			res[0].address,
			res[0].phone,
			res[0].openTime,
			res[0].closeTime
		);
		alert("architecture added to itinerary");
	};

	return (
		<div className="days">
			<button className="button" onClick={clickDays}>
				Day {day}
			</button>
		</div>
	);
}

AddArchitecture.propTypes = {
	day: PropTypes.number.isRequired,
	itineraryID: PropTypes.string.isRequired,
	buildingName: PropTypes.string.isRequired,
};

export default AddArchitecture;
