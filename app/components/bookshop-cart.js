'use strict';

import Ember from 'ember';

export default Ember.Component.extend({

	offer: Ember.inject.service(),

	discount:0,

	didInitAttrs(){

		this.updateDiscount();
	},

	onTotalPriceChange:function(){

		this.updateDiscount();

	}.observes('cart.totalPrice'),
	
	finalPrice: function(){

		return this.get('cart.totalPrice') - this.get('discount');

	}.property('discount', 'cart.totalPrice'),

	updateDiscount(){

		var totalPrice = this.get('cart.totalPrice');

        var offerService = this.get('offer');

		offerService.find(this.get('cart.articles').mapBy('isbn')).then((offers) => {

			var discounts = offers.map((offer) => {

				if(offer.get('type') === offerService.PERCENTAGE){
					return (totalPrice * offer.get('value')) / 100;
				}
				if(offer.get('type') === offerService.SLICE){
					return Math.floor(totalPrice / offer.get('sliceValue')) * offer.get('value');
				}
				if(offer.get('type') === offerService.MINUS){
					return offer.get('value');
				}
			});

			var discount = Math.max.apply(null, discounts);

			this.set('discount',discount);

		});
	}

});
