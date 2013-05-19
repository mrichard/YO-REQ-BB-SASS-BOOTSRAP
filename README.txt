Workflow:
	https://github.com/yeoman/yeoman/wiki/Getting-Started
	https://github.com/yeoman/generator-backbone
	https://github.com/SlexAxton/require-handlebars-plugin
	https://github.com/asciidisco/Backbone.Marionette.Handlebars

	install: 
		npm install -g yo grunt-cli bower	// install cli tools
		npm install -g generator-mocha		// install mocha gen
		npm install -g generator-backbone	// install backbone gen
		npm install -g generator-backbone-amd	//install backbone amd gen

	new app:
		yo backbone --template-framework=handlebars	//gen the app

	marionette deps:
		bower install lodash --save
		bower install marionette --save
		bower install backbone.wreqr --save
		bower install backbone.babysitter --save
		

	starting point of app:
		index.html is HTML5 boilerplate
		uses require JS
		require.js -> brings in init.js (config)  -> bring in main.js (start app)

		diagram:
			index.html
				styles/main.css (from main.scss)

				require.js -> init.js -> main.js

	grunt:
		grunt --> builds the app into dist (default target)
		grunt test --> runs tests
		grunt server --> runs server with live reload
	

	bower:
		bower search 
		bower list
		bower install
		
	npm:
		npm search yeoman-generator


Backend:
	node
	express

Front End:
	sass
	bootstrap sass / js
	modernizr
	backbone
	underscore
	jquery
	


