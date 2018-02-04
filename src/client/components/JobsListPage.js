import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as actions from "../actions";
import { Paper, List, ListItem, Divider } from "material-ui";

class JobsListPage extends Component {
	componentWillMount() {
		this.props.fetchJobs();
	}

	renderItems = posts => {
		return posts.map(post => {
			const { jobkey, jobtitle } = post;
			return (
				<div key={jobkey}>
					<Link to={{ pathname: `/job/${jobkey}` }}>
						<ListItem onClick={() => this.props.selectJob(post)}>
							{`${jobtitle} `}
						</ListItem>
					</Link>

					<Divider />
				</div>
			);
		});
	};

	render() {
		const { loading, posts } = this.props;
		return (
			<div>
				{loading ? (
					<p>loading...</p>
				) : (
					<Paper>
						<List>{this.renderItems(posts)}</List>
					</Paper>
				)}
			</div>
		);
	}
}

const mapStateToProps = ({ jobs: { posts, loading } }) => {
	return {
		loading,
		posts
	};
};
export default withRouter(connect(mapStateToProps, actions)(JobsListPage));
