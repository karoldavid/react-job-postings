import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class JobsListPage extends Component {
	render() {
		return (
			<div>
				<div>Find your job here!</div>
			</div>
		);
	}
}

const mapStateToProps = ({ jobs }) => {
	console.log(jobs);
	return {
		jobs
	};
};

export default withRouter(connect(mapStateToProps)(JobsListPage));
