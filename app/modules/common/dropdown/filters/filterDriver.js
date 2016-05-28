(function() {
  'use strict';

  function startsWith() {
    return function(drivers, text) {
      return drivers.filter(driver => {
        let condition = false;
        let rxp = new RegExp(`^${text}`, 'i');

        if(driver.license) condition = rxp.test(driver.license)
        if(driver.name) condition = condition || rxp.test(driver.name);

        return condition;
      })
    }
  }

  function removeSelected() {
    return function(drivers, selected) {
      return drivers.filter(driver => (selected && driver.id != selected.id));
    }
  }

  angular.module('dropDown.filters')
    .filter('startsWith', startsWith)
    .filter('removeSelected', removeSelected)
})();
