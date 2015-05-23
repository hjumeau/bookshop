import Ember from 'ember';
import Offer from 'bookshop/models/offer';

export default Ember.Component.extend({

	discount:0,

	didInsertElement: function(){

		this.updateDiscount();
	},

	onTotalPriceChange:function(){

		this.updateDiscount();

	}.observes('cart.totalPrice'),
	
	finalPrice: function(){

		return this.get('cart.totalPrice') - this.get('discount');

	}.property('discount', 'cart.totalPrice'),

	updateDiscount: function(){

		var totalPrice = this.get('cart.totalPrice');

		Offer.find(this.get('cart.articles').mapBy('isbn')).then(function(offers){

			var discounts = offers.map(function(offer){

				if(offer.get('type') === Offer.PERCENTAGE){
					return (totalPrice * offer.get('value')) / 100;
				}
				if(offer.get('type') === Offer.SLICE){
					return Math.floor(totalPrice / offer.get('sliceValue')) * offer.get('value');
				}
				if(offer.get('type') === Offer.MINUS){
					return offer.get('value');
				}
			});

			var discount = Math.max.apply(null, discounts);

			this.set('discount',discount);

		}.bind(this));
	}

});
