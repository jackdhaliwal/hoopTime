'use strict';

angular.
  module('parkcatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/parks', {
          template: '<park-list></park-list>'
        }).
        when('/parks/:parkId', {
          template: '<park-detail></park-detail>'
        }).
        otherwise('/parks');
    
    }

  ]);
