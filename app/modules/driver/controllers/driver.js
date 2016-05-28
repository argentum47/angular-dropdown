(function() {
  'use strict';

  function DriversController($scope, DriverFactory) {
    $scope.model = {
      drivers: DriverFactory.get('drivers'),
      cars: DriverFactory.get('cars'),
      driver: {},
      properties: ['name', 'license']
    }

    $scope.$watch("model.driver", function (newValue) {
      if(newValue.id)
        DriverFactory.update('selectedValues', newValue);
        $scope.selectedValues = DriverFactory.get('selectedValues');
    })

    $scope.selectedValues = DriverFactory.update('selectedValues', []);
  }

  angular.module('driverApp.controllers')
    .controller('DriversController', ['$scope', 'DriverFactory', DriversController]);

})();
