import Ember from 'ember';
import GroupArticles from 'bookshop/models/group-articles';

export default Ember.Component.extend({

	groupedArticles:[],

	didInsertElement:function(){
		var articles = this.get('cart.articles'), 
			count;

		var groupedArticles = articles.reduce(function(result, item, index){

			if (Ember.isEmpty(result) || result.get('lastObject').isbn !== item.isbn){
				count = 1;
				result.pushObject(
					GroupArticles.create({
						article: item,
						count: count,
						startIndex: index
					})
				);
			} else {
				count++;
			}
			return result;
		}, []);	

		this.set('groupedArticles', groupedArticles);
	}
});
