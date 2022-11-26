import React, { useEffect, useReducer } from "react";
import ArchiContext from "./archiContext";
import ArchiReducer from "./archiReducer";
import { SHOW_BUILDINGS, SEARCH_BUILDINGS, GET_BUILDING } from "../types";

const ArchiState = (props) => {
	const initialState = {
		buildings: [],
		building: {},
	};

	const [state, dispatch] = useReducer(ArchiReducer, initialState);

	// Show Buildings
	const showBuildings = async () => {
		const rawData = await fetch("/allarchitectures");
		const res = await rawData.json();
		dispatch({
			type: SHOW_BUILDINGS,
			payload: res,
		});
	};

	useEffect(() => {
		showBuildings();
	}, []);

	// Search Buildings
	const searchBuildings = async (text) => {
		console.log(text);
		const rawData = await fetch(`/architectures/${text}`);
		const res = await rawData.json();
		dispatch({
			type: SEARCH_BUILDINGS,
			payload: res,
		});
	};

	// Get Building
	const getBuilding = async (title) => {
		console.log("fuction getting called", title);
		// Needs to get the specific building
		const rawData = await fetch(`/architectures/${title}`);
		const res = await rawData.json();
		dispatch({
			type: GET_BUILDING,
			payload: res[0], //因为res是个list但是只有一个value?
		});
	};

	return (
		<ArchiContext.Provider
			value={{
				buildings: state.buildings,
				building: state.building,
				showBuildings,
				searchBuildings,
				getBuilding,
			}}
		>
			{props.children}
		</ArchiContext.Provider>
	);
};

export default ArchiState;
