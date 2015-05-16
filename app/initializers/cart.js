export function initialize(container, application) {
	application.register('cart:cart', Cart);
	application.inject('route', 'cart', 'cart:cart');
}

export default {
  name: 'cart',
  initialize: initialize
};
