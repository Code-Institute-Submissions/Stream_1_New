'use strict';

angular.module('myApp', ['ngRoute', 'uiGmapgoogle-maps', 'myApp.Controllers'])

.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //key: 'your api key',
      //libraries: 'weather,geometry,visualization',
      v: '3.20'
    });
  })

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  		.when('/home', {
    		templateUrl: 'templates/home.html',
    		controller: 'HomeCtrl'
  		})
  		.when('/music', {
    		templateUrl: 'templates/music.html',
    		controller: 'MusicCtrl'
  		})
  		.when('/video', {
    		templateUrl: 'templates/video.html',
    		controller: 'VideoCtrl'
  		})
  		.when('/about', {
    		templateUrl: 'templates/about.html',
    		controller: 'AboutCtrl'
  		})
      .when('/events', {
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
      })


  		.otherwise({redirectTo: '/home'}); 
}]);

//.controller('Stream1Ctrl', ['$scope', 'firebaseArray', function($scope, $firebaseArray) {
//.controller('Stream1Ctrl', ['$scope', function($scope) {

