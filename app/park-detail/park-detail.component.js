'use strict';

// Register `parkDetail` component, along with its associated controller and template
angular.
  module('parkDetail').
  component('parkDetail', {
    templateUrl: 'park-detail/park-detail.template.html',
    controller: ['$routeParams', 'Park',
      function ParkDetailController($routeParams, Park) {
        var self = this;
        self.park = Park.get({parkId: $routeParams.parkId}, function(Park) {
          self.setImage(park.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
