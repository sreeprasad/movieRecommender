'use strict'

angular.module('popcornApp.controllers')
.controller('MoviesController',function($scope,MoviesService){

	console.log("inside moviessss controller ");
	$scope.user = { 
					name:"Sreeprasad"
				  };

	 MoviesService.movies().then(function(movies){
		$scope.movies=movies;
	});			  

      $scope.addFavorite = function(movie){
      	movie.isFavorite=true;
      }

      $scope.removeFavorite = function(movie){
      	movie.isFavorite=false;
      }


	console.log("hello mate");
});