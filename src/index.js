import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));
app.use(express.static('static'))

app.get("*", (req, res) => {
	const store = createStore();
	res.send(renderer(req, store));
});

app.listen(3333, () => {
	console.log("Listening on port 3333");
});
