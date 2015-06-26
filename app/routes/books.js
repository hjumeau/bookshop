import Ember from 'ember'; 

export default Ember.Route.extend({	

	model:function(){
		return this.store.findAll('book');
	},

	actions: {
		goToCart: function(){
			this.transitionTo('cart');
		}
	}

});
