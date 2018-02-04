import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Paper, List, ListItem, Divider } from "material-ui";

class JobsListPage extends Component {
	componentDidMount() {
		this.props.fetchJobs();
	}

	render() {
		const { loading, jobs } = this.props;
		return (
			<p>hello</p>
		);
	}
}

const mapStateToProps = ({ jobs, loading }) => {
	console.log(jobs)
	return {
		jobs,
		loading
	};
};
export default connect(mapStateToProps, actions)(JobsListPage);
