/*global require*/
'use strict';

window.require.config({
  paths: {
    angular: '../bower_components/angular/angular',
    jquery: '../bower_components/jquery/dist/jquery',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    lazy: '../bower_components/lazy.js/lazy',
  },
  shim: {
    angular: {
      exports: 'angular'
    }
  }
});

window.require(['angular', 'jquery', 'lazy', 'app', 'listItem/controllers/homeController', 'addItem//controllers/addItemController'], function (angular) {
  angular.bootstrap(document, ['app']);
});
