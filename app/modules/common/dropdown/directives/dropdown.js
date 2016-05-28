(function() {
  'use strict';

  function DropDown() {
    return {
      restrict: 'E',
      templateUrl: 'app/modules/common/dropdown/directives/dropdown.html',
      scope: {
        placeholder: '@',
        list: '=',
        cars: '=',
        selected: '=',
        properties: '='
      },
      link: function(scope, ele, attrs) {
        scope.listVisible = false;
        scope.placeholderVisible = true;
        scope.hoveredItemId = "";
        scope.renderedList = angular.copy(scope.list);
      },

      controller: ['$scope', '$filter', 'DriverFactory', DropDownDirectiveCtrl]
    }
  }

  angular.module('dropDown.directives')
    .directive('appDropdown', DropDown);
})();
