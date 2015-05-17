import Ember from 'ember'; 
import Book from 'bookshop/models/book'; 

export default Ember.Route.extend({

	model:function(){
		return Book.findAll();
	},

	actions: {
		goToCart: function(){
			this.transitionTo('cart');
		}
	}

});
