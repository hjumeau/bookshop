'use strict';

import Ember from 'ember';

export default Ember.Component.extend({

	classNames:['book-card'],

	isAlreadyInCart: function(){
		return !!this.get('cart.articles').findBy('isbn', this.get('book.isbn'));
	}.property('cart.articles.@each'),

	actions:{
		addToCart(book){
			this.get('cart.articles').unshiftObject(book);
		}
	}

});
