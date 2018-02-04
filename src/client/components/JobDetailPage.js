import React, { Component } from "react";
import { connect } from "react-redux";

class JobDetailPage extends Component {
	render() {
		const { jobtitle } = this.props.selected;
		return <div>{jobtitle}</div>;
	}
}

const mapStateToProps = ({ jobs: { selected } }) => {
	console.log(selected);
	return {
		selected
	};
};

export default connect(mapStateToProps)(JobDetailPage);
