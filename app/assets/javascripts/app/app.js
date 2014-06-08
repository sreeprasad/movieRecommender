// app/assets/javascripts/app/app.js
'use strict';

angular.module('popcornApp',['ngRoute','popcornApp.controllers','popcornApp.services'])

.config(function ($routeProvider,$locationProvider){
	$routeProvider
	.when('/movie/:movie_id',{
		templateUrl:'/templates/movie.html',
		controller:'MovieController'

	}).when('/',{
		controller :'MoviesController',
		templateUrl:'/templates/movies.html'
	})
	.otherwise({
		redirectTo :'/'
	});
	$locationProvider.html5Mode(true);
});


