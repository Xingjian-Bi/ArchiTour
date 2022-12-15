import {
	SHOW_BUILDINGS,
	SEARCH_BUILDINGS,
	GET_BUILDING,
	GET_USER,
	GET_ITINERARY,
	SET_ITINERARY,
	SET_ITINERARYID,
	SET_ITINERARYINDEX,
} from "../types";


/*
Your project is well designed!  
Looks neat and functional as designed! 
*/




export default function foo(state, action) {
	switch (action.type) {
		case SHOW_BUILDINGS:
			return {
				...state,
				buildings: action.payload,
			};
		case SEARCH_BUILDINGS:
			return {
				...state,
				buildings: action.payload,
			};
		case GET_BUILDING:
			return {
				...state,
				building: action.payload,
			};
		case GET_USER:
			return {
				...state,
				user: action.payload,
			};
		case GET_ITINERARY:
			return {
				...state,
				itineraries: action.payload,
			};
		case SET_ITINERARY:
			return {
				...state,
				itinerary: action.payload,
			};
		case SET_ITINERARYID:
			return {
				...state,
				itineraryID: action.payload,
			};
		case SET_ITINERARYINDEX:
			return {
				...state,
				itineraryIndex: action.payload,
			};

		default:
			return state;
	}
}
