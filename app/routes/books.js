import Ember from 'ember'; 

export default Ember.Route.extend({

	book: Ember.inject.service(),

	model:function(){
		return this.get('book').findAll();
	},

	actions: {
		goToCart: function(){
			this.transitionTo('cart');
		}
	}

});
