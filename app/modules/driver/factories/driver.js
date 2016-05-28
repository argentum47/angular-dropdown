(function() {
  'use strict';


  function generateImage(text, size) {
    size = size || 50;
    return `http://placehold.it/${size}?text=${text}`
  }

  function DriverFactory() {
    let store = {
      drivers: [
        {
          id: 1,
          name: 'A',
          license: 'A12341',
          image: generateImage('A')
        },
        {
          id: 2,
          name: 'A1',
          license: 'A12342',
          image: generateImage('A1')
        },
        {
          id: 3,
          name: 'A3',
          license: 'A12343',
          image: generateImage('A3')
        },
        {
          id: 6,
          name: 'B',
          license: 'B12341',
          image: generateImage('B')
        },
        {
          id: 7,
          name: 'B1',
          license: 'B12345',
          image: generateImage('B1')
        }
      ]
    };

    store.selectedValues = [];
    let cars = store.drivers.map(driver => {
      let name = ['Ferrari', 'BMW', 'Murcielago', 'Lamborghini'][Math.floor(Math.random() * 10) % 3]
      return { id: driver.license, name: name, image: generateImage(name.slice(0, 1)) }
    });

    store.cars = cars;
    store.drivers.push({
      id: 8,
      name: 'B5',
      image: generateImage('B5')
    },
    {
      id: 9,
      name: 'B10',
      image: generateImage('B10')
    },
    {
      id: 4,
      license: 'A12344',
      image: generateImage('A4')
    },
    {
      id: 5,
      license: 'A12347',
      image: generateImage('A5')
    });

    return {
      insert: function (key, value) {
        if(!store[key]) store[key] = {};
        store[key] = value;
      },

      all: function () {
        return store;
      },

      get: function (key) {
        return store[key];
      },

      update: function (key, value) {
        let values = store[key];
        this.insert(key, values.concat(value));
        return store[key];
      }
    }
  }

  angular.module('driverApp.factories')
    .factory('DriverFactory', DriverFactory);
})();
