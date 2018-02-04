import { FETCH_JOBS } from "../actions/types";

const INITIAL_STATE = {
	posts: [],
	loading: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_JOBS:
			return { ...state, posts: action.payload };
		default:
			return state;
	}
}
