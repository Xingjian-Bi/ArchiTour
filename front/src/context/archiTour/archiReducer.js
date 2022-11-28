import {
	SHOW_BUILDINGS,
	SEARCH_BUILDINGS,
	GET_BUILDING,
	GET_USER,
	GET_COMMENT,
	ADD_COMMENT,
} from "../types";

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
		case GET_USER:
			console.log("test reducer", action.payload);
			return {
				...state,
				user: action.payload,
			};
		// case GET_COMMENT:
		// 	return {
		// 		...state,
		// 		comment: action.payload,
		// 	};
		// case ADD_COMMENT:
		// 	return {
		// 		...state,
		// 		building: action.payload,
		// 	};
		default:
			return state;
	}
}
