import { FETCH_JOBS, FETCH_JOBS_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
	posts: [],
	loading: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_JOBS:
			return {
				...state, loading: true
			}
		case FETCH_JOBS_SUCCESS:
			return { ...state, posts: action.payload, loading: false };
		default:
			return state;
	}
}
