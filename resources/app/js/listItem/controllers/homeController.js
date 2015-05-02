'use strict';

define(['app'], function (app) {
  return app.controller('HomeController', ['$scope',
  function HomeController($scope, $location, todoStorage, filterFilter) {

    var ipc = window.nodeRequire('ipc');
    var items = angular.fromJson(ipc.sendSync('getItems'));
    // // console.log(JSON.stringify($scope.items));
    // $scope.items = [{"$$hashKey":"object:5","id":1,"status":true,"title":"sree"},{"id":2,"status":true,"title":"ammu"},{"id":3,"status":false,"title":"ammukutty"},{"id":4,"status":false,"title":"ammu and srees kid"},{"id":5,"status":false,"title":"ammu is awesome"},{"id":6,"status":true,"title":"i love you ammu"},{"id":7,"status":false,"title":"squash the commits"}];
    $scope.items = items;

    $scope.completeItem = function(id){
      console.log("Cpmpelting item")
      Lazy($scope.items).each(function(item){
        if(item.id === id){
          item.status = !item.status;
        }
      });
    };

    $scope.removeItem = function(id){
      var allOtherItems = Lazy($scope.items).filter(function(item){return item.id !== id}).toArray();
      $scope.items = allOtherItems;
    }

    $scope.$watch('items', function(newItems){
      console.log('items changed');
      ipc.send('saveItems', newItems);
    }, true);
  }]);
});
