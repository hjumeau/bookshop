import Ember from 'ember';

export default Ember.Component.extend({

	isAlreadyInCart: function(){
		return !!this.get('cart.articles').findBy('isbn', this.get('book.isbn'));
	}.property('cart.articles.@each'),

	actions:{
		addToCart: function(book){
			this.get('cart.articles').unshiftObject(book);
		}
	}

});
