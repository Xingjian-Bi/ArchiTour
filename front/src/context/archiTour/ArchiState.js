import React, { useEffect, useReducer } from "react";
import ArchiContext from "./archiContext";
import ArchiReducer from "./archiReducer";

import {
	SHOW_BUILDINGS,
	SEARCH_BUILDINGS,
	GET_BUILDING,
	GET_USER,
	GET_ITINERARY,
	SET_ITINERARY,
	SET_ITINERARYINDEX,
	SET_ITINERARYID,
} from "../types";

const ArchiState = (props) => {
	const initialState = {
		buildings: [],
		building: {},
		user: "",
		itineraries: [],
		itinerary: [],
		itineraryIndex: 0,
		itineraryID: "",
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
		const rawData = await fetch(`/architectures/${text}`);
		const res = await rawData.json();
		dispatch({
			type: SEARCH_BUILDINGS,
			payload: res,
		});
	};

	// Get Building
	const getBuilding = async (title) => {
		// Needs to get the specific building
		const rawData = await fetch(`/architectures/${title}`);
		const res = await rawData.json();
		console.log("test building res", res[0]);
		dispatch({
			type: GET_BUILDING,
			payload: res[0], //res是个list但是只有一个value
		});
	};

	// Get User
	const getUser = async () => {
		// console.log("fuction getting called", username);
		// Needs to get the user
		const rawData = await fetch("/getUsername");
		const res = await rawData.json();
		dispatch({
			type: GET_USER,
			payload: res.user,
		});
	};

	// Add Comment
	const addComment = async (archiid, userid, comment) => {
		console.log("addComment fuction getting called", archiid);
		const responseRaw = await fetch("/archiComment", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				archiID: archiid,
				user: userid,
				comment: comment,
			}),
		});
		console.log(responseRaw);
	};

	const addItinerary = async (username) => {
		const responseRaw = fetch("/addItinerary", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
			}),
		});
		console.log("responseRaw", responseRaw);
	};

	const getItinerary = async (username) => {
		const rawData = await fetch(`/allItinerary/${username}`);
		const res = await rawData.json();
		console.log("getItinerary res", res);
		dispatch({
			type: GET_ITINERARY,
			payload: res,
		});
	};

	const deleteItinerary = async (id) => {
		const responseRaw = fetch("/deleteItinerary", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: id,
			}),
		});
		console.log("Delete Itinerary responseRaw", responseRaw);
	};

	const setItineraryIndex = async (index) => {
		const res = index;
		dispatch({
			type: SET_ITINERARYINDEX,
			payload: res,
		});
	};

	const setItineraryID = async (id) => {
		const res = id;
		dispatch({
			type: SET_ITINERARYID,
			payload: res,
		});
	};

	const setItinerary = async (obj) => {
		const res = obj;
		dispatch({
			type: SET_ITINERARY,
			payload: res,
		});
	};

	const addStop = async (
		itinerayID,
		imageUrl,
		title,
		designer,
		address,
		phone,
		openTime,
		closeTime
	) => {
		const responseRaw = fetch("/addStop", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				itinerayID: itinerayID,
				imageUrl: imageUrl,
				title: title,
				designer: designer,
				address: address,
				phone: phone,
				openTime: openTime,
				closeTime: closeTime,
			}),
		});
		console.log("responseRaw", responseRaw);
	};

	const deleteStop = async (id, title) => {
		const responseRaw = fetch("/deleteStop", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: id,
				title: title,
			}),
		});
		console.log("Delete Stop responseRaw", responseRaw);
	};

	return (
		<ArchiContext.Provider
			value={{
				buildings: state.buildings,
				building: state.building,
				user: state.user,
				itineraries: state.itineraries,
				itinerary: state.itinerary,
				itineraryIndex: state.itineraryIndex,
				itineraryID: state.itineraryID,
				showBuildings,
				searchBuildings,
				getBuilding,
				getUser,
				addComment,
				addItinerary,
				getItinerary,
				setItinerary,
				deleteItinerary,
				addStop,
				deleteStop,
				setItineraryIndex,
				setItineraryID,
			}}
		>
			{props.children}
		</ArchiContext.Provider>
	);
};

export default ArchiState;
