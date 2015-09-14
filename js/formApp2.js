var crudApp = angular.module('crudApp', ['ngRoute']);
alert('hi');
 crudApp.config(function($routeProvider) {
$routeProvider
// route for the home page
.when('/', {
templateUrl : 'home.html',
controller : 'mainController'
})
// route for the about page
.when('/about', {
alert('hi');
templateUrl : 'about.html',
controller : 'aboutController'
})
// route for the contact page
.when('/listing', {

templateUrl : 'listing.html',
controller : 'studentController'
});
});


// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
// create a message to display in our view
$scope.message = 'Everyone come and see how good I look!';
});
scotchApp.controller('aboutController', function($scope) {
$scope.message = 'Look! I am an about page.';
});


crudApp.controller("cntrl", function($scope, $http,filterFilter)
{
 $scope.countryNames = [
        {
            "id": 0,
            "displayName": "India"
        },
        {
            "id": 1,
            "displayName": "U.S.A."
        },
        {
            "id": 2,
            "displayName": "Canada"
        }
    ];
    $scope.selectedCountryNames = $scope.countryNames[0];

    $scope.statesNames = [
        {
            "id": 0,
            "displayName": "MP",
            "parentId": 0
        },
        {
            "id": 1,
            "displayName": "UP",
            "parentId": 0
        },
        {
            "id": 2,
            "displayName": "Delhi/NCR",
            "parentId": 0
        },
        {
            "id": 3,
            "displayName": "USA State 1",
            "parentId": 1
        },
        {
            "id": 4,
            "displayName": "USA State 2",
            "parentId": 1
        },
        {
            "id": 5,
            "displayName": "Canada State 1",
            "parentId": 2
        }
    ];
    $scope.filteredArray = [];
    $scope.$watch("parentId", function (newValue) {
        $scope.filteredArray = filterFilter($scope.statesNames, newValue);
        $scope.selectedStatesNames = $scope.filteredArray[0];
    },true);
    

    $scope.cityNames = [
        {
            "id": 0,
            "displayName": "Gwalior",
            "parentId": 0
        },
        {
            "id": 1,
            "displayName": "Bhopal",
            "parentId": 0
        },
        {
            "id": 2,
            "displayName": "Indore",
            "parentId": 0
        },
        {
            "id": 3,
            "displayName": "USA State 1 City 1",
            "parentId": 3
        },
        {
            "id": 4,
            "displayName": "USA State 1 City 2",
            "parentId": 3
        },
        {
            "id": 5,
            "displayName": "Canada State 1 City 1",
            "parentId": 5
        }
    ];
    $scope.selectedCityNames = $scope.cityNames[0];

	
	crudApp.directive('ngCompare', function () {
    return {
        require: 'ngModel',
        link: function (scope, currentEl, attrs, ctrl) {
            var comparefield = document.getElementsByName(attrs.ngCompare)[0]; //getting first element
            compareEl = angular.element(comparefield);

            //current field key up
            currentEl.on('keyup', function () {
			
                if (compareEl.val() !== "") {
                    var isMatch = currentEl.val() === compareEl.val();
                    ctrl.$setValidity('compare', isMatch);
                    scope.$digest();
                }
            });

            //Element to compare field key up
            compareEl.on('keyup', function () {
                if (currentEl.val() !== "") {
                    var isMatch = currentEl.val() === compareEl.val();
                    ctrl.$setValidity('compare', isMatch);
                    scope.$digest();
                }
            });
        }
    };
});

 $scope.url = 'submit.php';

        $scope.formsubmit = function(isValid) {
    
            if (isValid) {
                $http.post($scope.url, {"name": $scope.user.name, 
										"userName":$scope.user.username,
										"password":$scope.user.password,
										"cpassword":$scope.user.cpassword,
										"email": $scope.user.email, 
										"contactno":$scope.user.contactno,
										"country":$scope.selectedCountryNames,
										"state":$scope.selectedStatesNames,
										"city":$scope.selectedCityNames,
										"message": $scope.message}).
                        success(function(data, status) {
						
                            console.log(data);
                            $scope.status = status;
                            $scope.data = data;
                            $scope.result = data; 
                        })
						alert("Data successfully inserted");
            }else{
               SweetAlert.swal("Here's a message");
                 swal("Alert!");
            }

        }
});
crudApp.controller('studentController' ,function($scope,$http) {

$scope.url = 'getListing.php';
   $http.get($scope.url).success( function(response) {
                           $scope.list = response;
                        });
						
						
	
	 $scope.url = 'deleteUser.php';
	$scope.prod_delete = function(index) {  
	
     var x = confirm("Are you sure to delete the selected product");
     if(x){
      $http.post($scope.url,
            {
                'prod_index'     : index
            }
        )      
        .success(function (data, status, headers, config) {               
             $scope.get_product();
             alert("Product has been deleted Successfully");
        })

        .error(function(data, status, headers, config){
           
        });
      }else{

      }
    }
   $scope.prod_edit = function(index) {  
        
	

    
      $http.post('editFromQuery.php', 
            {
                'prod_index'     : index
            }
        )      
        .success(function (data, status, headers, config) {  
alert(data);
		  alert(angular.fromJson(data)+'hi');

var obj=$.parseJSON(data);
		  alert( obj.name  );
            //alert(data[0]["prod_name"]);
           
            $scope.id          =   data[0]["id"];
            $scope.name        =   data[0]["name"];
            $scope.username        =   data[0]["username"];
            $scope.password       =   data[0]["password"];
            $scope.cpassword    =   data[0]["cpassword"];
			 $scope.email    =   data[0]["email"];
			  $scope.contactno    =   data[0]["contactno"];
			   $scope.country    =   data[0]["country"];
			    $scope.state    =   data[0]["state"];
				 $scope.city    =   data[0]["city"];


        })

        .error(function(data, status, headers, config){
           
        });
    }

    /** function to update product details after edit from list of products referencing php **/

    $scope.update_product = function() {

        $http.post('db.php?action=update_product', 
                    {
                        'id'            : $scope.prod_id,
                        'prod_name'     : $scope.prod_name, 
                        'prod_desc'     : $scope.prod_desc, 
                        'prod_price'    : $scope.prod_price,
                        'prod_quantity' : $scope.prod_quantity
                    }
                  )
                .success(function (data, status, headers, config) {                 
                  $scope.get_product();
                   alert("Product has been Updated Successfully");
                })
                .error(function(data, status, headers, config){
                   
                });
    }

});
