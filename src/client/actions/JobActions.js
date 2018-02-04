import { FETCH_JOBS, FETCH_JOBS_SUCCESS } from "./types";

export const fetchJobs = () => {
	return dispatch => {
		dispatch({
			type: FETCH_JOBS
		});
		fetch("data/jobs.json")
			.then(response => response.json())
			.then(data => {
				dispatch({
					type: FETCH_JOBS_SUCCESS,
					payload: data
				});
			})
			.catch(err => console.log(err));
	};
};
