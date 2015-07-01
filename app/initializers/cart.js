'use strict';

import Cart from 'bookshop/models/cart';

export function initialize(container, application) {
	application.register('cart:cart', Cart);
	application.inject('route', 'cart', 'cart:cart');
	application.inject('controller', 'cart', 'cart:cart');
}

export default {
  name: 'cart',
  initialize: initialize
};
