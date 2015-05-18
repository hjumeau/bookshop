import { defineFixture } from 'ic-ajax';
import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('bookshop-cart', 'Unit | Component | bookshop cart', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('finalPrice should equal to 71.4', function(assert) {
	assert.expect(3);

	defineFixture('/api/-offers', {
		response: {
			"offers": [
			{
				"type": "percentage",
				"value": 4
			},
			{
				"type": "minus",
				"value": 15
			},
			{
				"type": "slice",
				"sliceValue": 100,
				"value": 12
			}
			]
		},
		jqXHR: {},
		textStatus: 'success'
	});

  // Creates the component instance
  var component = this.subject();

  component.set('cart', {articles:[{ibsn:'aaa', price:30},{isbn:'bbb', price:25},{isbn:'ccc', price:35}]});
  component.updateCart();

  // Renders the component to the page
  this.render();

  var done = assert.async();
  Ember.run.later(function(){
  	assert.equal(component.get('totalPrice'), 90);
  	assert.equal(component.get('discount'), 18.6);
  	assert.equal(component.get('finalPrice'), 71.4);
  	done();
  }, 1000);

});
