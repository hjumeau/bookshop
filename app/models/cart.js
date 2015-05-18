import Ember from 'ember';

var Carts = Ember.Object.extend({

	articles:[],
	nbrArticles: Ember.computed.alias('articles.length'),
  
});

export default Carts;