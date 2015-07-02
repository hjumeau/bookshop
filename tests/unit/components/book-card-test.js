import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('book-card', 'Unit | Component | book card', {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
    unit: true
});

test('is not already in cart', function (assert) {
    assert.expect(1);

    // Creates the component instance
    var component = this.subject();

    component.set('book', Ember.Object.create({isbn: 'CCCC'}));
    component.set('cart', {
        articles: [
            Ember.Object.create({isbn: 'AAAA'}),
            Ember.Object.create({isbn: 'BBBB'})
        ]
    });

    // Renders the component to the page
    this.render();

    assert.equal(component.get('isAlreadyInCart'), false);

});

test('is already in cart', function (assert) {
    assert.expect(1);

    // Creates the component instance
    var component = this.subject();

    component.set('book', Ember.Object.create({isbn: 'AAAA'}));
    component.set('cart', {
        articles: [
            Ember.Object.create({isbn: 'AAAA'}),
            Ember.Object.create({isbn: 'BBBB'})
        ]
    });

    // Renders the component to the page
    this.render();

    assert.equal(component.get('isAlreadyInCart'), true);

});
