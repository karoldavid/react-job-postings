import fetch from 'isomorphic-fetch'
import { FETCH_JOBS, FETCH_JOBS_SUCCESS, SELECT_JOB } from "./types";

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

export const selectJob = job => {
	return {
		type: SELECT_JOB,
		payload: job
	};
};