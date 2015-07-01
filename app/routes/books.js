'use strict';

import Ember from 'ember';

export default Ember.Route.extend({	

	model(){
		return this.store.findAll('book');
	},

	actions: {
		goToCart(){
			this.transitionTo('cart');
		}
	}

});
