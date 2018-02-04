import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Home = () => {
	return (
		<div>
			<div>Home Component!!!</div>
			<button onClick={() => console.log("Hi there!")}>Press Me</button>
		</div>
	);
};

const mapStateToProps = ({ jobs }) => {
	console.log(jobs)
	return {
		jobs
	}
}

export default withRouter(connect(mapStateToProps)(Home));
