(function() {
  'use strict';

  function PopOver() {
    return {
      templateUrl: 'app/modules/common/dropdown/components/driver_detail.html',
      bindings: {
        driver: '<',
         car: '<',
         serialize: '&'
      },
      require: '^appDropdown'
    }
  }

  angular.module('dropDown.components')
    .component('appPopover', PopOver())
})();
