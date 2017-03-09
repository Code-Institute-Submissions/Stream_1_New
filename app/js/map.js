'use strict';

angular.module('angularGoogleMapsExample.map', ['ngRoute', 'ngGeolocation', 'angularGoogleMapsExample.yelp'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/map', {
      templateUrl: 'map/map.html',
      controller: 'MapCtrl'
    });
  }])

  .controller('MapCtrl', ['$scope', 'uiGmapGoogleMapApi',
    function($scope, uiGmapGoogleMapApi) {

      var initializeMap = function(position) {
          position = {
            coords: {
              latitude: 43.6722780,
              longitude: -79.3745125
            }
          };
        

        $scope.map = {
          center: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          zoom: 16
        };
      }

        uiGmapGoogleMapApi.then(function(maps) {
    initializeMap();
});
      }]);