'use strict';

angular.module('myApp', ['ngRoute', 'uiGmapgoogle-maps', 'myApp.Controllers'])

//Old Map handler - doesn't work after pushing to github pages
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      //key: 'your api key',
      //libraries: 'weather,geometry,visualization',
      v: '3.20'
    });
  })


//These route providers will handle redirects and navigation
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

      //default redirect to home page
  		.otherwise({redirectTo: '/home'}); 
}]);
