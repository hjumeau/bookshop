import { defineFixture } from 'ic-ajax';
import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('bookshop-cart', 'Unit | Component | bookshop cart', {
  // Specify the other units that are required for this test
	needs: ['service:offer']
});

test('finalPrice should equal to 75', function(assert) {
	assert.expect(2);

	defineFixture('/api/offers/bbb', {
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

    component.set('cart', {totalPrice:90,articles:[{isbn:'bbb'}]});

    Ember.run(function(){
    	component.updateDiscount();
    });

    var done = assert.async();
    Ember.run.later(function(){
    	assert.equal(component.get('discount'), 15);
    	assert.equal(component.get('finalPrice'), 75);
    	done();
    }, 2000);

});

test('finalPrice should equal to 176', function(assert) {
	assert.expect(2);

	defineFixture('/api/offers/bbb', {
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

    component.set('cart', {totalPrice:200,articles:[{isbn:'bbb'}]});

    Ember.run(function(){
    	component.updateDiscount();
    });

    var done = assert.async();
    Ember.run.later(function(){
    	assert.equal(component.get('discount'), 24);
    	assert.equal(component.get('finalPrice'), 176);
    	done();
    }, 2000);

});

test('finalPrice should equal to 127.5', function(assert) {
	assert.expect(2);

	defineFixture('/api/offers/bbb', {
		response: {
			"offers": [
			{
				"type": "percentage",
				"value": 15
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

    component.set('cart', {totalPrice:150,articles:[{isbn:'bbb'}]});

    Ember.run(function(){
    	component.updateDiscount();
    });

    var done = assert.async();
    Ember.run.later(function(){
    	assert.equal(component.get('discount'), 22.5);
    	assert.equal(component.get('finalPrice'), 127.5);
    	done();
    }, 2000);

});
