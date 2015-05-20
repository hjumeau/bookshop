import Ember from 'ember';
import Offer from 'bookshop/models/offer';

export default Ember.Component.extend({

	discount:0,

	onTotalPriceChange:function(){

		var totalPrice = this.get('cart.totalPrice');
		Offer.find(this.get('cart.articles').mapBy('isbn')).then(function(offers){

			var discount = offers.reduce(function(result, item){

				if(item.get('type') === Offer.PERCENTAGE){
					result += (totalPrice * item.get('value')) / 100;
				}
				if(item.get('type') === Offer.SLICE){
					result += Math.floor(totalPrice / item.get('sliceValue')) * item.get('value');
				}
				if(item.get('type') === Offer.MINUS){
					result += item.get('value');
				}

				return result;
			}, 0);

			this.set('discount',discount);

		}.bind(this));

	}.observes('cart.totalPrice').on('init'),
	
	finalPrice: function(){

		return this.get('cart.totalPrice') - this.get('discount');

	}.property('discount')

});
