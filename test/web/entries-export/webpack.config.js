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
			"app-entries-export-1": "./src/application1.ts",
			"app-entries-export-2": "./src/application2.ts"
		},
		pages: [
			{
				filename: "index1.html",
				chunks: ["app-entries-export-1"]
			},
			{
				filename: "index.html",
				chunks: ["app-entries-export-2"]
			}
		]
	});
};
