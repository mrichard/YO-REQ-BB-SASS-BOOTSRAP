require([
    'backbone',
    'backbone.marionette',
    'hbs!tmpl/init',

    /* requires that are just needed before app runs */
    'bootstrap',
    'marionette.handlebars'
],

function ( Backbone, Marionette, init_template ) {
	'use strict';

	document.body.innerHTML = init_template({ success: "CONGRATS!", title:"YeOmAn!!" });
    Backbone.history.start();
});