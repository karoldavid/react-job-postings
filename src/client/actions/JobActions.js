import { FETCH_JOBS } from "./types";

export const fetchJobs = () => {
	return dispatch => {
		fetch("data/jobs.json")
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: FETCH_JOBS,
					payload: data
				});
			})
			.catch(err => console.log(err));
	};
};
