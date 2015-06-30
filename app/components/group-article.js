import Ember from 'ember';

export default Ember.Component.extend({

	tagName:'li',

	desiredNbr: Ember.computed.reads('groupArticle.count'),

	totalPrice: function(){
		return this.get('groupArticle.article.price') * this.get('groupArticle.count');
	}.property('groupArticle.count'),

	onDesiredNbrChange: function(){

		if (!this.get('desiredNbr')) {
			return;
		}

		var groupArticle = this.get('groupArticle'),
			remains = this.get('desiredNbr') - groupArticle.count,
			args = [];
		
		if (remains > 0) {

			args = [groupArticle.startIndex, 0, []];

			for (var i = remains - 1; i >= 0; i--) {
				args[2].push(groupArticle.article);
			}
			
			this.attrs.addArticles(args);

		} else if (remains < 0) {

			args = [groupArticle.startIndex, Math.abs(remains)];
			
			this.attrs.deleteArticles(args);
		}
	
	}.observes('desiredNbr'),

	actions:{
		deleteAll: function(){

			var groupArticle = this.get('groupArticle'),
				args = [groupArticle.startIndex, groupArticle.count];
			
			this.attrs.deleteAll(args);
		}
	}

});
