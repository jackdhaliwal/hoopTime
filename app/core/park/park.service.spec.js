'use strict';

describe('Park', function() {
  var $httpBackend;
  var Park;
  var parksData = [
    {name: 'Park X'},
    {name: 'Park Y'},
    {name: 'Park Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Park` service before each test
  beforeEach(module('core.park'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Park_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('parks/parks.json').respond(parksData);

    Park = _Park_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the parks data from `/parks/parks.json`', function() {
    var parks = Park.query();

    expect(parks).toEqual([]);

    $httpBackend.flush();
    expect(parks).toEqual(parksData);
  });

});
