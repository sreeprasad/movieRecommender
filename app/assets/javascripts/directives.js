'use strict'

angular.module('popcornApp.directives',[])
.directive('userPanel',function(){

	return{
		restrict: 'A',
		templateUrl : '/templates/user_panel.html',
		controller :function($scope,UserService){
			
			$scope.$on('user:set',function(evt,currentUser){
				$scope.currentUser=currentUser;
			});

			UserService.currentUser().then(function(user){
				$scope.currentUser=user;
			});

			$scope.logout = function(){
				UserService.logout().then(function(user){
					$scope.currentUser=null;
				});

			};
		}
	};
})