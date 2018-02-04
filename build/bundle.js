/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _JobActions = __webpack_require__(14);

Object.keys(_JobActions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _JobActions[key];
    }
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_JOBS = exports.FETCH_JOBS = "FETCH_JOBS";
var FETCH_JOBS_SUCCESS = exports.FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
var SELECT_JOB = exports.SELECT_JOB = "SELECT_JOB";
var DESELECT_JOB = exports.DESELECT_JOB = "DESELECT_JOB";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(10);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(17);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static("public"));
app.use(_express2.default.static('static'));

app.get("*", function (req, res) {
	var store = (0, _createStore2.default)();
	res.send((0, _renderer2.default)(req, store));
});

app.listen(3333, function () {
	console.log("Listening on port 3333");
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _Routes = __webpack_require__(12);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.path, context: {} },
			_react2.default.createElement(_Routes2.default, null)
		)
	));

	return "\n\t\t<html>\n\t\t<head> <title>React Job Posts</title></head>\n\t\t<body>\n\t\t\t<div id=\"root\">" + content + "</div>\n\t\t\t<script src=\"bundle.js\"></script>\n\t\t\t</div>\n\t\t</body>\n\t</html>\n\t";
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _JobsListPage = __webpack_require__(13);

var _JobsListPage2 = _interopRequireDefault(_JobsListPage);

var _JobDetailPage = __webpack_require__(16);

var _JobDetailPage2 = _interopRequireDefault(_JobDetailPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(
		"div",
		null,
		_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: _JobsListPage2.default }),
		_react2.default.createElement(_reactRouterDom.Route, { path: "/job/:jobkey", component: _JobDetailPage2.default })
	);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _actions = __webpack_require__(3);

var actions = _interopRequireWildcard(_actions);

var _materialUi = __webpack_require__(5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JobsListPage = function (_Component) {
	_inherits(JobsListPage, _Component);

	function JobsListPage() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, JobsListPage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = JobsListPage.__proto__ || Object.getPrototypeOf(JobsListPage)).call.apply(_ref, [this].concat(args))), _this), _this.renderItems = function (posts) {
			return posts.map(function (post) {
				var jobkey = post.jobkey,
				    jobtitle = post.jobtitle;

				return _react2.default.createElement(
					"div",
					{ key: jobkey },
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: { pathname: "/job/" + jobkey } },
						_react2.default.createElement(
							_materialUi.ListItem,
							{ onClick: function onClick() {
									return _this.props.selectJob(post);
								} },
							jobtitle + " "
						)
					),
					_react2.default.createElement(_materialUi.Divider, null)
				);
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(JobsListPage, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.props.fetchJobs();
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    loading = _props.loading,
			    posts = _props.posts;

			return _react2.default.createElement(
				"div",
				null,
				loading ? _react2.default.createElement(
					"p",
					null,
					"loading..."
				) : _react2.default.createElement(
					_materialUi.Paper,
					null,
					_react2.default.createElement(
						_materialUi.List,
						null,
						this.renderItems(posts)
					)
				)
			);
		}
	}]);

	return JobsListPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
	var _ref2$jobs = _ref2.jobs,
	    posts = _ref2$jobs.posts,
	    loading = _ref2$jobs.loading;

	return {
		loading: loading,
		posts: posts
	};
};
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, actions)(JobsListPage));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deselectJob = exports.selectJob = exports.fetchJobs = undefined;

var _isomorphicFetch = __webpack_require__(15);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _types = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchJobs = exports.fetchJobs = function fetchJobs() {
	return function (dispatch) {
		dispatch({
			type: _types.FETCH_JOBS
		});
		(0, _isomorphicFetch2.default)("http://localhost:3333/data/jobs.json").then(function (response) {
			return response.json();
		}).then(function (data) {
			dispatch({
				type: _types.FETCH_JOBS_SUCCESS,
				payload: data
			});
		}).catch(function (err) {
			return console.log(err);
		});
	};
};

var selectJob = exports.selectJob = function selectJob(job) {
	return {
		type: _types.SELECT_JOB,
		payload: job
	};
};

var deselectJob = exports.deselectJob = function deselectJob() {
	return {
		type: _types.DESELECT_JOB
	};
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

var _materialUi = __webpack_require__(5);

var _actions = __webpack_require__(3);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JobDetailPage = function (_Component) {
	_inherits(JobDetailPage, _Component);

	function JobDetailPage() {
		_classCallCheck(this, JobDetailPage);

		return _possibleConstructorReturn(this, (JobDetailPage.__proto__ || Object.getPrototypeOf(JobDetailPage)).apply(this, arguments));
	}

	_createClass(JobDetailPage, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props$post = this.props.post,
			    company = _props$post.company,
			    formattedLocation = _props$post.formattedLocation,
			    formattedRelativeTime = _props$post.formattedRelativeTime,
			    jobtitle = _props$post.jobtitle,
			    snippet = _props$post.snippet,
			    url = _props$post.url;

			return _react2.default.createElement(
				"div",
				{ style: { marginLeft: "auto", marginRight: "auto" } },
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: "/" },
					_react2.default.createElement(_materialUi.FlatButton, {
						label: "<< Back to Jobs List Page",
						primary: true,
						onClick: function onClick() {
							return _this2.props.deselectJob();
						}
					})
				),
				_react2.default.createElement(
					_materialUi.Card,
					{ style: cardStyle },
					_react2.default.createElement(_materialUi.CardHeader, {
						title: "Job Detail Page",
						subtitle: "Published " + formattedRelativeTime
					}),
					_react2.default.createElement(
						_materialUi.CardMedia,
						{
							overlay: _react2.default.createElement(_materialUi.CardTitle, { title: jobtitle + " (" + company + ")" })
						},
						_react2.default.createElement("img", {
							src: "https://lorempixel.com/800/400/technics",
							style: { height: 400 }
						})
					),
					_react2.default.createElement(
						_materialUi.CardText,
						null,
						"Description: " + snippet.replace(/<b>/g, "").replace(/<\/b>/g, "")
					),
					_react2.default.createElement(
						_materialUi.CardText,
						null,
						"Location: " + formattedLocation
					),
					_react2.default.createElement(_materialUi.RaisedButton, {
						style: { float: "right" },
						onClick: function onClick() {
							return window.open(url);
						},
						primary: true,
						label: "Apply Now"
					})
				)
			);
		}
	}]);

	return JobDetailPage;
}(_react.Component);

var cardStyle = {
	width: "50vw",
	transitionDuration: "0.3s"
};

var mapStateToProps = function mapStateToProps(_ref) {
	var selected = _ref.jobs.selected;

	return {
		post: selected
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(JobDetailPage);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(18);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(19);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
	return store;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(6);

var _JobsReducer = __webpack_require__(20);

var _JobsReducer2 = _interopRequireDefault(_JobsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	jobs: _JobsReducer2.default
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	var action = arguments[1];

	switch (action.type) {
		case _types.FETCH_JOBS:
			return _extends({}, state, {
				loading: true
			});
		case _types.FETCH_JOBS_SUCCESS:
			return _extends({}, state, { posts: action.payload, loading: false });
		case _types.SELECT_JOB:
			return _extends({}, state, {
				selected: action.payload
			});
		case _types.DESELECT_JOB:
			return _extends({}, state, {
				selected: null
			});
		default:
			return state;
	}
};

var _types = __webpack_require__(4);

var INITIAL_STATE = {
	posts: [],
	loading: true, // should be initially false, temporary workaround
	selected: null
};

/***/ })
/******/ ]);