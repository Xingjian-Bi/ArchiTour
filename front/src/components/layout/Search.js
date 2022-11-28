import React, { useState, useContext } from "react";
import ArchiContext from "../../context/archiTour/archiContext";

function Search() {
	const archiContext = useContext(ArchiContext);
	const [text, setText] = useState("");

	const onChange = (e) => {
		setText(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		// console.log(text);
		archiContext.searchBuildings(text);
		setText("");
	};

	return (
		<div>
			<form className="form" onSubmit={onSubmit}>
				<input
					type="text"
					name="text"
					placeholder="Search Buildings or Cities"
					value={text}
					onChange={onChange}
				/>
				<input
					type="submit"
					value="Search"
					className="btn btn-dark btn-block"
				/>
			</form>
		</div>
	);
}

Search.propTypes = {};

export default Search;
