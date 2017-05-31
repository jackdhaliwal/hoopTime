'use strict';

describe('parkDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(module('parkDetail'));

  // Test the controller
  describe('ParkDetailController', function() {
    var $httpBackend, ctrl;
    var xyzParkData = {
      name: 'park xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('parks/xyz.json').respond(xyzParkData);

      $routeParams.phoneId = 'xyz';

      ctrl = $componentController('parkDetail');
    }));

    it('should fetch the park details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.park).toEqual({});

      $httpBackend.flush();
      expect(ctrl.park).toEqual(xyzParkData);
    });

  });

});
