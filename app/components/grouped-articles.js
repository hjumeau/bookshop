import Ember from 'ember';
import GroupArticles from 'bookshop/models/group-articles';

export default Ember.Component.extend({

	groupedArticles:[],

	didInsertElement:function(){

		this.updateGroupedArticles();	
	},

	actions:{
		
		deleteAll: function(groupArticles){
			this.sendAction('deleteAll', groupArticles);
		},
		deleteArticles: function(groupArticles, nbr){
			this.sendAction('deleteArticles', groupArticles, nbr);
		},
		addArticles: function(groupArticles, nbr){
			this.sendAction('addArticles', groupArticles, nbr);
		}

	},

	onNbArticlesChange: function(){

		this.updateGroupedArticles();
		
	}.observes('cart.nbArticles'),

	updateGroupedArticles: function(){
		
		var articles = this.get('cart.articles');

		var groupedArticles = articles.reduce(function(result, item){

			var lastGroupArticle = result.get('lastObject');

			if (Ember.isNone(lastGroupArticle) || lastGroupArticle.article.isbn !== item.isbn){
				result.pushObject(
					GroupArticles.create({
						article: item,
						count: 1,
						startIndex: lastGroupArticle ? lastGroupArticle.startIndex + 1 : 0
					})
				);
			} else {
				lastGroupArticle.count += 1;
			}

			return result;

		}, []);	

		this.set('groupedArticles', groupedArticles);
	}
});
