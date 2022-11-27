import React, { useState, useContext } from "react";
import ArchiContext from "../../context/archiTour/archiContext";
import "./style/SearchBuilding.css";

function SearchBuilding() {
	// const archiContext = useContext(ArchiContext);
	const [text, setText] = useState("");

	const onChange = (e) => {
		setText(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(text);
		// archiContext.searchBuildings(text);
		setText("");
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

SearchBuilding.propTypes = {};

export default SearchBuilding;
