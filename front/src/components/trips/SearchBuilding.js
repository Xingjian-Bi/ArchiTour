import React, { useState, useContext } from "react";
import ArchiContext from "../../context/archiTour/archiContext";
import PropTypes from "prop-types";

function SearchBuilding({ itineraryID, reloadData }) {
	const archiContext = useContext(ArchiContext);
	const [text, setText] = useState("");
	const { addStop } = archiContext;

	const onChange = (e) => {
		setText(e.target.value);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log("text", text);
		const rawData = await fetch(`/architectures/${text}`);
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

		setText("");
		await reloadData();
	};

	return (
		<div className="searchDiv">
			<form className="form" onSubmit={onSubmit}>
				<input
					type="text"
					name="buildingName"
					placeholder="add building to your itinerary"
					value={text}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="Add"
					className="btn btn-dark btn-block"
				/>
			</form>
		</div>
	);
}

SearchBuilding.propTypes = {
	itineraryID: PropTypes.string.isRequired,
	reloadData: PropTypes.func.isRequired,
};

export default SearchBuilding;
