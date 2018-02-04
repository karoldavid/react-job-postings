import React, { Component } from "react";
import { connect } from "react-redux";
import {
	Card,
	CardHeader,
	CardMedia,
	CardText,
	CardTitle,
	FlatButton
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
							style={{  }}
						/>
					</CardMedia>

					<CardText>
						{`Description: ${snippet
							.replace(/<b>/g, "")
							.replace(/<\/b>/g, "")}`}
					</CardText>
					<CardText>{`Location: ${formattedLocation}`}</CardText>
					<CardText>
						To find out more, click{" "}
						<a href={url} target="_blank">
							here
						</a>.
					</CardText>
				</Card>
			</div>
		);
	}
}

const cardStyle = {
	width: "50vw",
	transitionDuration: "0.3s",
	color: "blue"
};

const mapStateToProps = ({ jobs: { selected } }) => {
	console.log(selected);
	return {
		post: selected
	};
};

export default connect(mapStateToProps, actions)(JobDetailPage);
