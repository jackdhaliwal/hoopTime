angular.module('parkcatApp', []);

angular
  .module('parkcatApp')
  .controller('MapController', MapController);

  function MapController($scope){

    $scope.initMap = function() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: new google.maps.LatLng(32.483, 16.084)
        });
    }

}