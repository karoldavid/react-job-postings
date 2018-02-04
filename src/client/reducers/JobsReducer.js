import { FETCH_JOBS, FETCH_JOBS_SUCCESS, SELECT_JOB } from "../actions/types";

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
			console.log(action.payload)
			return {
				...state,
				selected: action.payload
			};
		default:
			return state;
	}
}
