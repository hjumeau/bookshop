'use strict';

import Ember from 'ember';

export default Ember.Controller.extend({

	actions:{
		
		updateCartArticles(args){

			var articles = this.get('cart.articles');
			
			Array.prototype.replace.apply(articles, args);
			articles.enumerableContentDidChange();
		}
	}
});
