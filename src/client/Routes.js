import React from "react";
import { Route } from "react-router-dom";
import JobsListPage from "./components/JobsListPage";
import JobDetailPage from "./components/JobDetailPage";

export default () => {
	return (
		<div>
			<Route exact path="/" component={JobsListPage} />
			<Route path="/jobs" component={JobDetailPage} />
		</div>
	);
};
