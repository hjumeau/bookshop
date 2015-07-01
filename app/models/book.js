'use strict';

import DS from 'ember-data';

var Book = DS.Model.extend({

	isbn: DS.attr('string'),
	title: DS.attr('string'),
	price: DS.attr('number'),
	cover: DS.attr('string')
  
});

export default Book;