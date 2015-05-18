import Ember from 'ember';
import Offer from 'bookshop/models/offer';

export default Ember.Component.extend({
	
	totalPrice:0,
	discount:0,

	finalPrice: function(){

		return this.get('totalPrice') - this.get('discount');

	}.property('totalPrice', 'discount'),

	didInsertElement:function(){

		this.updateCart();
	
	},

	onArticlesChange:function(){

		this.updateCart();

	}.observes('cart.articles.@each'),

	updateCart:function(){

		var totalPrice = this.get('cart.articles').mapBy('price').reduce(function(result, item){
			return result + item;
		}, 0);
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

			this.setProperties({'totalPrice':totalPrice, 'discount':discount});
		}.bind(this));

	}

});
