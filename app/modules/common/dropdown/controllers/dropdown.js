function DropDownDirectiveCtrl($scope, $filter) {
  'use strict';

  $scope.driverDirective = {
    text: "",

    car: {},

    serializeProps: function(item) {
      let props = $scope.properties;

      if(!props) throw Error("invalid property name type, expecting  string or array");
      else if(!props.splice && props.toString() == props) return item[props]
      else if(props.splice && props.length) return props.map(prop => item[prop]).filter(p => p).join("/")

    },

    toggle: function() {
      $scope.listVisible = !$scope.listVisible;
    },

    select: function(item) {
      $scope.placeholderVisible = false
      $scope.listVisible = false
      $scope.selected = item
      $scope.renderedList = $filter('removeSelected')($scope.list, item);
    },

    searchDrivers: function ()  {
      $scope.renderedList = this.text ? $filter('startsWith')($scope.renderedList, this.text) : $filter('removeSelected')($scope.list, $scope.selected)
    },

    isHovered: function(itemId) {
      return $scope.hoveredItemId == itemId;
    },

    hover: function(item) {
      $scope.hoveredItemId = item.id
      this.car = this.getCar(item)
    },

    unset: function () {
      this.hover({});
    },

    getCar: function (driver) {
      return $scope.cars.reduce((acc, c) => {
        if(c.id == driver.license) acc = c;
        return acc;
      }, {});
    }
  };
}
