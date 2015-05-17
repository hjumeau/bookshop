import Ember from 'ember';

export default Ember.Component.extend({

	desiredNbr: Ember.computed.reads('groupArticle.count'),

	onDesiredNbrChange: function(){
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
