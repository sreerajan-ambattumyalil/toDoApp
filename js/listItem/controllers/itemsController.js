'use strict';

define(['app'], function (app) {
  return app.controller('ItemsController', ['$scope',
  function ItemsController($scope, $location, todoStorage, filterFilter) {

    $scope.items = [{
      id : 1,
      title : "Squash and create separate commits for each component",
      status : false
    },{
      id : 2,
      title : "Update the documentation in confluence",
      status : true
    }];

  }]);
});
