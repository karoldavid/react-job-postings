import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class JobsListPage extends Component {
	componentDidMount() {
		this.props.fetchJobs();
	}

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

export default withRouter(connect(mapStateToProps, actions)(JobsListPage));
