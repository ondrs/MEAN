angular.module('mean.system').controller('IndexController', function ($scope, $http, Global, $routeParams, Cars) {
  $scope.global = Global;

  var userId = $routeParams.userId || 1;

  Cars.query(function(cars) {

    for(var i in cars) {

      if(cars[i].marks !== undefined) {

        for(var y in cars[i].marks) {

          if(cars[i].marks[y].userId == userId) {
            cars.splice(i, 1);
            break;
          }
        }
      }

    }

    $scope.cars = cars;
  });





  $scope.changeMark = function(car, mark) {

    car.marks = {
      userId: userId,
      mark: mark
    };

    car.$update(function() {

      for(var i in $scope.cars) {

        if(car._id == $scope.cars[i]._id)
          $scope.cars.splice(i , 1);
      }

    });

  };


  $scope.marks = [];
  for(var i = 1; i <= 5; ++i)
    $scope.marks.push(i);


});