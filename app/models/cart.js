'use strict';

import Ember from 'ember';

var Carts = Ember.Object.extend({

	articles:[],

	nbrArticles: Ember.computed.alias('articles.length'),

	totalPrice: function(){

		return this.get('articles').mapBy('price').reduce((result, item) => {
			return result + item;
		}, 0);

	}.property('articles.@each')
  
});

export default Carts;