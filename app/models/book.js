import Ember from 'ember';

var Book = Ember.Object.extend({

	isbn:null,
	title:null,
	price:0,
	cover:null
  
});

export default Book;