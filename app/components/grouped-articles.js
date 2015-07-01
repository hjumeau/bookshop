'use strict';

import Ember from 'ember';
import GroupArticles from 'bookshop/models/group-articles';

export default Ember.Component.extend({

	groupedArticles:[],

	didInitAttrs(){

		this.updateGroupedArticles();	
	
	},

	onNbrArticlesChange: function(){

		this.updateGroupedArticles();
		
	}.observes('articles.@each'),

	updateGroupedArticles() {
		
		var articles = this.get('articles');

		var groupedArticles = articles.reduce((result, item) => {

			var lastGroupArticle = result.get('lastObject');

			if (Ember.isNone(lastGroupArticle) || lastGroupArticle.article.get('isbn') !== item.get('isbn')){
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

		}, []);

		this.set('groupedArticles', groupedArticles);
	}, 

	getNextStartIndex(groupArticles) {
		
		return groupArticles ? groupArticles.startIndex + groupArticles.count : 0;
	
	}
});
