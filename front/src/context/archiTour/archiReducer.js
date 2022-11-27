import { SHOW_BUILDINGS, SEARCH_BUILDINGS, GET_BUILDING, GET_ITINERARY } from "../types";

// export default (state, action) => {
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
		case GET_ITINERARY:
			return {
				...state,
				itineraries: action.payload,
			};
		default:
			return state;
	}
}
