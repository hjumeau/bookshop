import Ember from 'ember';

export default Ember.Route.extend({

	actions:{
		
		updateCartArticles:function(args){

			var articles = this.get('cart.articles');
			
			Array.prototype.replace.apply(articles, args);
			articles.enumerableContentDidChange();
		}
	
	},
});
	