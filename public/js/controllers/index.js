angular.module('mean.system').controller('IndexController', function ($scope, $http, Global, $routeParams, Vehicles) {
  $scope.global = Global;

  var userId = $routeParams.userId || 1;

  Vehicles.query(function (vehicles) {

    for (var i in vehicles) {

      if (vehicles[i].marks !== undefined) {

        for (var y in vehicles[i].marks) {

          if (vehicles[i].marks[y].userId == userId) {
            vehicles.splice(i, 1);
            break;
          }
        }
      }

    }

    $scope.vehicles = vehicles;
  });


  $scope.changeMark = function (car, mark) {

    car.marks = {
      userId: userId,
      mark: mark
    };

    car.$update(function () {

      for (var i in $scope.vehicles) {

        if (car._id == $scope.vehicles[i]._id)
          $scope.vehicles.splice(i, 1);
      }

    });

  };


  $scope.marks = {
    0: '-',
    0.5: '...',
    1: '+'
  };


});
