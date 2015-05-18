import Ember from 'ember';
import ajax from 'ic-ajax';

var Book = Ember.Object.extend({

	isbn:null,
	title:null,
	price:0,
	cover:null
  
});

Book.reopenClass({
	findAll: function(){
		return ajax('/api/-books').then(function(res){
			return res.map(function(book){
				return Book.create(book);
			});
		});
	}
});

export default Book;