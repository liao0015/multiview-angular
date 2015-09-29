
var nameApp = angular.module("nameApp", ["ui.router", "ui.bootstrap", "ngStorage"]);

nameApp.config(function($stateProvider, $urlRouterProvider){
	
	//for any unmatched url, send to /route1
	$urlRouterProvider.otherwise("/route1");
	
	$stateProvider
		//tab one
		.state("route1", {
				url: "/route1",
				templateUrl: "route1.html"
			})
		.state("route1.list", {
				url:"/list",
				templateUrl: "route1.list.html",
				controller: function($scope, $localStorage){
					
					//sync $scope with $localStorage
					if($localStorage.let){
						$scope.items = $localStorage.let;
					}else{
						$scope.items = ["A", "B", "C"];
					}
					
					//add items into the list
					$scope.addName = function(){
						$scope.items.push($scope.enteredName);
						$localStorage.let = $scope.items;
						$scope.enteredName = "";
					};
					//remove items from the list
					$scope.removeName = function(name){
						var i = $scope.items.indexOf(name);
						$scope.items.splice(i, 1);
						$localStorage.let = $scope.items;
					};
				}
			})
		//tab two
		.state("route2", {
				url:"/route2",
				templateUrl:"route2.html"
			})
		.state("route2.list", {
				url:"/list",
				templateUrl:"route2.list.html",
				controller: function($scope, $localStorage){
					
					//sync $scope with $localStorage
					if($localStorage.fruit){
						$scope.things = $localStorage.fruit;
					}else{
						$scope.things = ["Apple", "Banana", "Orange"];
					}
					
					//add items into the list
					$scope.addName = function(){
						$scope.things.push($scope.enteredName);
						$localStorage.fruit = $scope.things;
						$scope.enteredName = "";
					};
					//remove items from the list
					$scope.removeName = function(name){
						var i = $scope.things.indexOf(name);
						$scope.things.splice(i, 1);
						$localStorage.fruit = $scope.things;
					};
				}
			})
		//tab three
		.state("route3", {
			url:"/route3",
			templateUrl:"route3.html"
			})
		.state("route3.list", {
			url:"/list",
			templateUrl:"route3.list.html",
			controller: function($scope, $localStorage){
				
					//sync $scope with $localStorage
					if($localStorage.names){
						$scope.names = $localStorage.names;
					}else{
						$scope.names = ["Bob", "Mary", "Jason"];
					}
					
					//add items into the list
					$scope.addName = function(){
						$scope.names.push($scope.enteredName);
						$localStorage.names = $scope.names;
						$scope.enteredName = "";
					};
					
					//remove items from the list
					$scope.removeName = function(name){
						var i = $scope.names.indexOf(name);
						$scope.names.splice(i, 1);
						$localStorage.names = $scope.names;
					};
				}
			});
			
});

