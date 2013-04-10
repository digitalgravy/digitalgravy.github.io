/*
	
	GitHubRepros 
		A tiny function for getting the repros of a user using jQuery's Ajax function.
	Author: Stuart Elmore / Digitalgravy Ltd.
	License: MIT

*/

(function ($) {
	window.GitHubRepos = function(user){
		this.user = user || 'github';
		this.get = function(cb){
			$.ajax({
				url:'https://api.github.com/users/'+this.user+'/repos',
				dataType: 'jsonp', 
				success: function(data){
					cb.call(this, data.data, null);
				}, 
				error: function(err){
					cb.call(this, null, err);
				}
			});
		};
	};
})(jQuery);