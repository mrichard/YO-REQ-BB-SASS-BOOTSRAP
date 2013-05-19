SIT app:

Workflow:
	https://github.com/yeoman/yeoman/wiki/Getting-Started
	https://github.com/yeoman/generator-backbone

	install: 
		npm install -g yo grunt-cli bower	// install cli tools
		npm install -g generator-mocha		// install mocha gen
		npm install -g generator-backbone	// install backbone gen

	new app:
		yo backbone --template-framework=handlebars	//gen the app
		

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
	




USER STORIES:
As a user I would like to be able to log on
As a user I would like to submit new proposals POST /proposals/new
As a user I would like to view all proposals in order of most popular GET /proposals/
As a user I would like to filter proposals by ones I submitted 
As a user I would like to be able to edit a proposal POST /proposals/123
As a user I would like to delete proposals I no longer like
CRUD on proposals
Create on account
As a user I would like to be able to vote for proposals
As a user I would like to see real time new proposals
As a users I would like to see real time votes for new proposals
Proposal
Title
Create date
Description
Created by 
Votes


