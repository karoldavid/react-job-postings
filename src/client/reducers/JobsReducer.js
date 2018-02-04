import { FETCH_JOBS } from "../actions/types";

const INITIAL_STATE = {
	posts: [],
	loading: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_JOBS:
			console.log(action.type);
			return state;
		default:
			return state;
	}
}
