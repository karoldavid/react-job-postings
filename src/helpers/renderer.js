import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

export default (req, store) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<Routes />
			</StaticRouter>
		</Provider>
	);

	return `
		<html>
		<head> <title>React Job Posts</title></head>
		<body>
			<div id="root">${content}</div>
			<script src="bundle.js"></script>
			</div>
		</body>
	</html>
	`;
};
