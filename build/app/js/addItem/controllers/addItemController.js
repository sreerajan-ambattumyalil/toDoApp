'use strict';

define(['app'], function (app) {
  return app.controller('AddItemController', ['$scope',
  function AddItemController($scope, $location, todoStorage, filterFilter) {

    // var ipc = window.nodeRequire('ipc');

    var resetTitle = function(){
      $scope.title = "";
    };

    $scope.addItem = function(){
      var newItem = {
        id : $scope.items.length + 1,
        title : $scope.title,
        status : false
      };
      console.log(JSON.stringify($scope.items));
      $scope.items.push(newItem);
      resetTitle();
    };
  }]);
});
