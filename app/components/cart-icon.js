import Ember from 'ember';

export default Ember.Component.extend({

	classNames:['cart-icon'],

	nbrArticleText: function(){
		return this.get('cart.nbrArticles') > 1 ? 'articles' : 'article'; 
	}.property('cart.nbrArticles')

});
