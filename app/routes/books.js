import Ember from 'ember'; 
import Book from 'bookshop/models/book'; 
import ajax from 'ic-ajax';

export default Ember.Route.extend({

	model:function(){
		return ajax('/api/-books').then(function(books){
			return books.map(function(book){
				return Book.create(book);
			});
		});
	}

});
