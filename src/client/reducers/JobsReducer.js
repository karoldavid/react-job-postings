import { FETCH_JOBS, FETCH_JOBS_SUCCESS, SELECT_JOB, DESELECT_JOB } from "../actions/types";

const INITIAL_STATE = {
	posts: [],
	loading: true, // should be false, temporary workaround
	selected: null
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_JOBS:
			return {
				...state,
				loading: true
			};
		case FETCH_JOBS_SUCCESS:
			return { ...state, posts: action.payload, loading: false };
		case SELECT_JOB:
			return {
				...state,
				selected: action.payload
			};
		case DESELECT_JOB:
			return {
				...state,
				selected: null
			};
		default:
			return state;
	}
}
