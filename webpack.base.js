module.exports = {
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					plugins: ["transform-class-properties"],
					presets: [
						"react",
						"stage-0",
						["env", { targets: { browsers: ["last 2 versions"] } }]
					]
				}
			}
		]
	}
};