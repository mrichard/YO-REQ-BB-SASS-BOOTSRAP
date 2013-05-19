/*global require*/
'use strict';

require.config({

    baseUrl: "/scripts",

    deps: ['main'],


    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        marionette: '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr', 
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
        bootstrap: 'vendor/bootstrap'
    }
});