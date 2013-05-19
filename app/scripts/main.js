require([
    'backbone',
    'marionette',
    'text!tmpl/init.hbs',
    'bootstrap',
], function ( Backbone, Marionette, init_template ) {
	'use strict';
    Backbone.history.start();
});