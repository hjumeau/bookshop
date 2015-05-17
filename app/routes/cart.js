import Ember from 'ember';

export default Ember.Route.extend({

	actions:{
		deleteAll:function(groupArticles){

			var args = [groupArticles.startIndex, groupArticles.count];
			
			this.updateCartArticles(args);
		},
		deleteArticles:function(groupArticles, nbr){
			
			var args = [groupArticles.startIndex, nbr];
			
			this.updateCartArticles(args);
		},
		addArticles:function(groupArticles, nbr){
			
			var args = [groupArticles.startIndex, 0];

			for (var i = nbr - 1; i >= 0; i--) {
				args.push(groupArticles.article);
			}
			
			this.updateCartArticles(args);
		}
	},

	updateCartArticles:function(args){

		var articles = this.get('cart.articles');
		
		Array.prototype.splice.apply(articles, args);
		articles.enumerableContentDidChange();
	}

});
	