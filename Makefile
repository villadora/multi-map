test: jshint
	@./node_modules/.bin/mocha -R spec

jshint:
	@./node_modules/.bin/jshint gulpfile.js lib/*.js test/*.js

.PHONY: jshint test
