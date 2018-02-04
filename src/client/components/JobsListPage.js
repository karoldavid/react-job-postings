import React from "react";
import { connect } from "react-redux";

const JobsListPage = () => {
	return (
		<div>
			<div>Find your job here!</div>
		</div>
	);
};

const mapStateToProps = ({ jobs }) => {
	console.log(jobs);
	return {
		jobs
	};
};

//export default connect(mapStateToProps)(Home);
export default JobsListPage;
