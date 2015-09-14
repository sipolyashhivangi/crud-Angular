	var app = angular.module('RoutingApp', ['ngRoute','LocalStorageModule']);
	app.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'templates/login.html',
				controller : 'loginpageController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
app.controller("loginpageController",function($scope,$http,localStorageService){
	  if(localStorageService.isSupported) {
        var storageType = localStorageService.getStorageType(); //e.g localStorage
        //alert(storageType)
    }
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
