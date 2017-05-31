'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('parkList').
  component('parkList', {
    templateUrl: 'park-list/park-list.template.html',
    controller: ['Park',
      function ParkListController(Park) {
        this.parks = Park.query();
        this.orderProp = 'age';
      }
    ]
  });
