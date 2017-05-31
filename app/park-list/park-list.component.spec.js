'use strict';

describe('parkList', function() {

  // Load the module that contains the `parkList` component before each test
  beforeEach(module('parkList'));

  // Test the controller
  describe('ParkListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('parks/parks.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('parkList');
    }));

    it('should create a `parks` property with 2 parks fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.parks).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.parks).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
