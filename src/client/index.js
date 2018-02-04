import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { AppBar, MuiThemeProvider } from "material-ui";

ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider>
				<Routes />
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>,
	document.querySelector("#root")
);
