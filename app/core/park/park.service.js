'use strict';

angular.
  module('core.park').
  factory('Park', ['$resource',
    function($resource) {
      return $resource('parks/:parkId.json', {}, {
        query: {
          method: 'GET',
          params: {parkId: 'parks'},
          isArray: true
        }
      });
    }
  ]);
