import React, { useState, useContext } from "react";
import ArchiContext from "../../context/archiTour/archiContext";

function Search() {
	const archiContext = useContext(ArchiContext);
	const { buildings, totalbuildings, showBuildings } = archiContext;
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
	const clear = (e) => {
		showBuildings();
		// setText("");
	};
	return (
		<section>
			<div
				style={{
					height: "20px",
				}}
			></div>
			<form className='form' onSubmit={onSubmit}>
				<input
					type='text'
					name='text'
					placeholder='Search Buildings or Cities'
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{buildings.length < totalbuildings && (
				<button className='btn btn-light btn-block' onClick={clear}>
					Clear Results
				</button>
			)}
			<div
				style={{
					height: "30px",
				}}
			></div>
		</section>
	);
}

Search.propTypes = {};

export default Search;
