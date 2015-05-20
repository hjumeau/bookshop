import Ember from 'ember';

export default Ember.Route.extend({

	actions:{
		
		updateCartArticles:function(args){

			debugger;
			var articles = this.get('cart.articles');
			
			Array.prototype.splice.apply(articles, args);
			articles.enumerableContentDidChange();
		}
	},
});
	