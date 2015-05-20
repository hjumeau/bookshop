import Ember from 'ember';
import GroupArticles from 'bookshop/models/group-articles';

export default Ember.Component.extend({

	groupedArticles:[],

	didInsertElement:function(){

		this.updateGroupedArticles();	
	},

	actions:{
		
		deleteAll:function(groupArticles){

			var args = [groupArticles.startIndex, groupArticles.count];
			
			this.sendAction('updateCartArticles', args);
		},
		deleteArticles:function(groupArticles, nbr){
			
			var args = [groupArticles.startIndex, nbr];
			
			this.sendAction('updateCartArticles', args);
		},
		addArticles:function(groupArticles, nbr){
			
			var args = [groupArticles.startIndex, 0];

			for (var i = nbr - 1; i >= 0; i--) {
				args.push(groupArticles.article);
			}
			
			this.sendAction('updateCartArticles', args);
		}

	},

	onNbrArticlesChange: function(){

		this.updateGroupedArticles();
		
	}.observes('cart.nbrArticles'),

	updateGroupedArticles: function(){
		
		var articles = this.get('cart.articles');

		var groupedArticles = articles.reduce(function(result, item){

			var lastGroupArticle = result.get('lastObject');

			if (Ember.isNone(lastGroupArticle) || lastGroupArticle.article.isbn !== item.isbn){
				result.pushObject(
					GroupArticles.create({
						article: item,
						count: 1,
						startIndex: this.getNextStartIndex(lastGroupArticle)
					})
				);
			} else {
				lastGroupArticle.count += 1;
			}

			return result;

		}.bind(this), []);	

		this.set('groupedArticles', groupedArticles);
	}, 

	getNextStartIndex: function(groupArticles){
		return groupArticles ? groupArticles.startIndex + groupArticles.count : 0;
	}
});
