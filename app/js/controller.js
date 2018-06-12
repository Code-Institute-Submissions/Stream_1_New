angular.module('myApp.Controllers',[])

.controller('HomeCtrl', function($scope) {
  $scope.title = "Welcome To The Monkees";
})

.controller('MusicCtrl', function($scope) {
 $scope.loading = false;
 $scope.title = 'Our Music'
})


.controller('AboutCtrl', function($scope, uiGmapGoogleMapApi) {
 $scope.title = 'About Us'	
})

.controller('scheduleCtrl', function($scope) {
 $scope.loading = false;
 $scope.title = 'Book a show with us!'	
})


.controller('Stream1Ctrl', ['$scope', 'firebase', function($scope, $firebase) {
	var ref = new Firebase('https://project1-a5f4c.firebaseio.com/'); 

	$scope.stream1 = $firebaseArray(ref);
}]);