/* eslint-env node */
"use strict";
const getConfig = require("@wildpeaks/webpack-config-web");

module.exports = function() {
	return getConfig({
		mode: "development",
		polyfills: [],
		webworkerPolyfills: [],
		sourcemaps: false,
		entry: {
			"app-export-named-import-star": "./src/application.ts"
		},
		pages: [
			{
				filename: "index.html",
				chunks: ["app-export-named-import-star"]
			}
		]
	});
};
