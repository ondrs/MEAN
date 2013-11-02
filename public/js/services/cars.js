//Articles service used for articles REST endpoint
angular.module('mean.cars').factory("Cars", ['$resource', function($resource) {
    return $resource('cars/:carId', {
        carId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);