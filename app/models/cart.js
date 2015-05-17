import Ember from 'ember';

export default Ember.Object.extend({

	articles:[],
 	totalPrice: 0,
	nbrArticles: Ember.computed.alias('articles.length'),
	discount:null,

	onArticlesChange:function(){

		var totalPrice = this.get('articles').mapBy('price').reduce(function(result, item){
			return result + item;
		});
		this.set('totalPrice', totalPrice);

	}.observes('articles.@each')
  
});
