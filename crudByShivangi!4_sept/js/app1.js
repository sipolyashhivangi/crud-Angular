	var app = angular.module('RoutingApp', ['ngRoute']);
	app.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/login.html',
				controller : 'loginpageController'
			})
			.when('/second', {
				templateUrl: 'second.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
app.controller("loginpageController",function($scope,$http){

	$scope.username="";
	$scope.password="";
	$scope.submitloginForm= function()
	{
		if($scope.username =="admin" && $scope.password=="admin")
		{	
			
			var url = 'mindex.html';
			
			var responseData = $http.post(url,{ 'username': $scope.username,'password':$scope.password });
			
			location.href = 'mindex.html';
				
			
			responseData.error(function(data, status, headers, config) {
			alert("AJAX failed!");
			
		});
			
		}else
		{
			alert('Supplied Credentials are invalid.');
		}
	};
});
