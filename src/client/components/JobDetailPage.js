import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	Card,
	CardHeader,
	CardMedia,
	CardText,
	CardTitle,
	FlatButton,
	RaisedButton
} from "material-ui";
import * as actions from "../actions";

class JobDetailPage extends Component {
	render() {
		const {
			company,
			formattedLocation,
			formattedRelativeTime,
			jobtitle,
			snippet,
			url
		} = this.props.post;
		return (
			<div style={{ marginLeft: "auto", marginRight: "auto" }}>
				<Link to="/">
					<FlatButton
						label="<< Back to Jobs List Page"
						primary
						onClick={() => this.props.deselectJob()}
					/>
				</Link>
				<Card style={cardStyle}>
					<CardHeader
						title="Job Detail Page"
						subtitle={`Published ${formattedRelativeTime}`}
					/>
					<CardMedia
						overlay={
							<CardTitle title={`${jobtitle} (${company})`} />
						}
					>
						<img
							src={"https://lorempixel.com/800/400/technics"}
							style={{ height: 400 }}
						/>
					</CardMedia>

					<CardText>
						{`Description: ${snippet
							.replace(/<b>/g, "")
							.replace(/<\/b>/g, "")}`}
					</CardText>
					<CardText>{`Location: ${formattedLocation}`}</CardText>
					<RaisedButton
						style={{ float: "right" }}
						onClick={() => window.open(url)}
						primary
						label="Apply Now"
					/>
				</Card>
			</div>
		);
	}
}

const cardStyle = {
	width: "50vw",
	transitionDuration: "0.3s"
};

const mapStateToProps = ({ jobs: { selected } }) => {
	return {
		post: selected
	};
};

export default connect(mapStateToProps, actions)(JobDetailPage);
