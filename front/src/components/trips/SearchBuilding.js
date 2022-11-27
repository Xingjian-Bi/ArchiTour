import React, { useState, useContext } from "react";
import ArchiContext from "../../context/archiTour/archiContext";
import "./style/SearchBuilding.css";

function SearchBuilding() {
	const archiContext = useContext(ArchiContext);
	const [text, setText] = useState("");
	const { addStop } = archiContext;

	const onChange = (e) => {
		setText(e.target.value);
	};


	const onSubmit = async(e) => {
		e.preventDefault();
		console.log("text", text);
		const rawData = await fetch(`/architectures/${text}`);
		const res = await rawData.json();
		if (res.length === 0){
			return console.log("no data");
		}
		console.log("on submit", res[0].imageUrl);
		console.log(res[0].title);
		// const { building } = archiContext;
		addStop("6382f17f539eb8bab2914616",
				res[0].imageUrl,
				res[0].title,
				res[0].designer,
				res[0].address,
				res[0].phone,
				res[0].openTime,
				res[0].closeTime);
		// console.log("onSubmit building", building);
		// const {imageUrl, city} = building;
		// console.log("imageUrl", imageUrl);
		// console.log("city", city);

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
