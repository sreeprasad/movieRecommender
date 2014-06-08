'use strict'

angular.module('popcornApp.resources',['rails'])
.factory('Movie',function(railsResourceFactory, $q){

	var resource =  railsResourceFactory({

		url		:'/movies',
		name	:'movie'
	});

	resource.findOrCreateByYoutubeId = function(youtubeId,otherAttributes){
		var d =$q.defer();
		return  resource.query({youtube_id:youtubeId})
						.then(function(movies){
							if(movies.length>0){
								// we have the movie
								d.resolve(movies[0])
							}else{
								// add other attributes
								var createAttributes = _.extend(otherAttributes,{youtube_id:youtubeId});

								// insert new movie
								var movie = new resource(createAttributes);
								movie.save().then(function(){
									d.resolve(movie);
								});
							}
						});
				return d.promise;
	};
	return resource;
})
.factory('Favorite',function(railsResourceFactory){
	
	var resource = railsResourceFactory({
		url :'/favorites',
		name :'favorite'

	});

	resource.createForUserAndMovie= function(user,movie){
		var favorite = new resource({
			user_id	:user.id,
			movie_id:movie.id
		});

		return favorite.save();
	};

	resource.removeFavorite = function(user,movie){
		var favorite = resource.query({
			user_id:user.id,
			movie_id:movie.id
		});

		return favorite.then(function(results){
			if(results.length>0){
				favorite = results[0];
				favorite.delete();
			}
		});
	};

	return resource;


});