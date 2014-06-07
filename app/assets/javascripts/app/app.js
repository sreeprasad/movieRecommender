// app/assets/javascripts/app/app.js
'use strict';

angular.module('popcornApp',['ngRoute','popcornApp.controllers'])

.config(function ($routeProvider,$locationProvider){
	$routeProvider
	.when('/',{
		controller :'MoviesController',
		templateUrl:'/templates/movies.html'
	})
	.otherwise({
		redirectTo :'/'
	});
	$locationProvider.html5Mode(true);
})

.controller('MovieController', function($scope){
	console.log("Movie controller --");
});
