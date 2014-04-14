//Articles service used for articles REST endpoint
angular.module('mean.vehicles').factory("Vehicles", ['$resource', function ($resource) {
  return $resource('vehicles/:vehicleId', {
    vehicleId: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  });
}]);
