/*global require*/
'use strict';

require.config({
  paths: {
    angular: '../bower_components/angular/angular'
  },
  shim: {
    angular: {
      exports: 'angular'
    }
  }
});

require(['angular', 'app', 'listItem//controllers/itemsController', 'listItem//directives/item'], function (angular) {
  angular.bootstrap(document, ['app']);
});
