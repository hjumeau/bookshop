import Ember from 'ember';

export default Ember.Object.extend({

	articles:[],
	total:0,
	nbArticles: Ember.computed.alias('articles.length'),
	discount:null
  
});
