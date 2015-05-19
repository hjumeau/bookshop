import Ember from 'ember';
import ajax from 'ic-ajax';

var Offer = Ember.Object.extend({

	type: '',
	sliceValue: 0,
	value: 0

});

Offer.reopenClass({

	PERCENTAGE: 'percentage',
	MINUS: 'minus',
	SLICE: 'slice',

	find: function(isbns){
		var url = '/api/-offers/'+isbns.join(',');
		return ajax(url).then(function(res){
			return res.offers.map(function(offer){
				return Offer.create(offer);
			});
		});
	}
});

export default Offer;