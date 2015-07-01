'use strict';

import Ember from 'ember';
import ajax from 'ic-ajax';
import Offer from '../models/offer';

export default Ember.Service.extend({

    PERCENTAGE: 'percentage',
    MINUS: 'minus',
    SLICE: 'slice',

    find(isbns){
        var url = '/api/offers/'+isbns.join(',');
        return ajax(url).then((res) => {
            return res.offers.map(function(offer){
                return Offer.create(offer);
            });
        });
    }

});
