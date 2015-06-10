import Ember from 'ember';
import ajax from 'ic-ajax';
import Book from '../models/book';

export default Ember.Service.extend({

	findAll: function(){
		return ajax('/api/-books').then(function(res){
			return res.map(function(book){
				return Book.create(book);
			});
		});
	}

});