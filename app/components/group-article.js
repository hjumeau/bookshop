import Ember from 'ember';

export default Ember.Component.extend({

	tagName:'li',

	desiredNbr: Ember.computed.reads('groupArticle.count'),

	totalPrice: function(){
		return this.get('groupArticle.article.price') * this.get('groupArticle.count');
	}.property('groupArticle.count'),

	onDesiredNbrChange: function(){

		debugger;
		if (!this.get('desiredNbr')) {
			return;
		}

		var groupArticle = this.get('groupArticle'),
			remains = this.get('desiredNbr') - groupArticle.count;
		
		if (remains > 0) {
			this.sendAction('addArticles', groupArticle, remains);
		} else {
			this.sendAction('deleteArticles', groupArticle.article, Math.abs(remains));
		}
	
	}.observes('desiredNbr'),

	actions:{
		deleteAll: function(){
			this.sendAction('deleteAll', this.get('groupArticle'));
		}
	}

});
