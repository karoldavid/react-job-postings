import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

class JobsListPage extends Component {
	componentDidMount() {
		this.props.fetchJobs();
	}

	render() {
		const { loading, jobs } = this.props;
		return (
			<div>
				<div>Find your job here!</div>
				{loading ? console.log("loading") : console.log("loaded")}
			</div>
		);
	}
}

const mapStateToProps = ({ jobs, loading }) => {
	return {
		jobs,
		loading
	};
};

export default withRouter(connect(mapStateToProps, actions)(JobsListPage));
