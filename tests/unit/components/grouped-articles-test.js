import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('grouped-articles', 'Unit | Component | grouped articles', {
    // Specify the other units that are required for this test
    needs: ['component:group-article']
});

test('grouped 0 articles', function (assert) {
    assert.expect(5);

    // Creates the component instance
    var component = this.subject();

    component.set('articles', [

            Ember.Object.create({
                "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
                "title": "Henri Potier à l'école des sorciers",
                "price": 35,
                "cover": "http://henri-potier.xebia.fr/hp0.jpg"
            }),
            Ember.Object.create({
                "isbn": "a460afed-e5e7-4e39-a39d-c885c05db861",
                "title": "Henri Potier et la Chambre des secrets",
                "price": 30,
                "cover": "http://henri-potier.xebia.fr/hp1.jpg"
            }),
            Ember.Object.create({
                "isbn": "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
                "title": "Henri Potier et le Prisonnier d'Azkaban",
                "price": 30,
                "cover": "http://henri-potier.xebia.fr/hp2.jpg"
            }),
            Ember.Object.create({
                "isbn": "c30968db-cb1d-442e-ad0f-80e37c077f89",
                "title": "Henri Potier et la Coupe de feu",
                "price": 29,
                "cover": "http://henri-potier.xebia.fr/hp3.jpg"
            })
    ]);

    this.render();

    assert.equal(component.get('groupedArticles').length, 4);
    assert.equal(component.get('groupedArticles.firstObject.startIndex'), 0);
    assert.equal(component.get('groupedArticles.firstObject.count'), 1);
    assert.equal(component.get('groupedArticles.lastObject.startIndex'), 3);
    assert.equal(component.get('groupedArticles.lastObject.count'), 1);
});

test('grouped 1 articles', function (assert) {
    assert.expect(3);

    // Creates the component instance
    var component = this.subject();

    component.set('articles', [

        Ember.Object.create({
            "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
            "title": "Henri Potier à l'école des sorciers",
            "price": 35,
            "cover": "http://henri-potier.xebia.fr/hp0.jpg"
        }),
        Ember.Object.create({
            "isbn": "a460afed-e5e7-4e39-a39d-c885c05db861",
            "title": "Henri Potier et la Chambre des secrets",
            "price": 30,
            "cover": "http://henri-potier.xebia.fr/hp1.jpg"
        }),
        Ember.Object.create({
            "isbn": "a460afed-e5e7-4e39-a39d-c885c05db861",
            "title": "Henri Potier et la Chambre des secrets",
            "price": 30,
            "cover": "http://henri-potier.xebia.fr/hp1.jpg"
        }),
        Ember.Object.create({
            "isbn": "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
            "title": "Henri Potier et le Prisonnier d'Azkaban",
            "price": 30,
            "cover": "http://henri-potier.xebia.fr/hp2.jpg"
        }),
        Ember.Object.create({
            "isbn": "c30968db-cb1d-442e-ad0f-80e37c077f89",
            "title": "Henri Potier et la Coupe de feu",
            "price": 29,
            "cover": "http://henri-potier.xebia.fr/hp3.jpg"
        })

    ]);

    this.render();

    assert.equal(component.get('groupedArticles').length, 4);
    assert.equal(component.get('groupedArticles')[1].startIndex, 1);
    assert.equal(component.get('groupedArticles')[1].count, 2);
});

test('grouped 2 articles', function (assert) {
    assert.expect(3);

    // Creates the component instance
    var component = this.subject();

    component.set('articles', [

        Ember.Object.create({
            "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
            "title": "Henri Potier à l'école des sorciers",
            "price": 35,
            "cover": "http://henri-potier.xebia.fr/hp0.jpg"
        }),
        Ember.Object.create({
            "isbn": "a460afed-e5e7-4e39-a39d-c885c05db861",
            "title": "Henri Potier et la Chambre des secrets",
            "price": 30,
            "cover": "http://henri-potier.xebia.fr/hp1.jpg"
        }),
        Ember.Object.create({
            "isbn": "a460afed-e5e7-4e39-a39d-c885c05db861",
            "title": "Henri Potier et la Chambre des secrets",
            "price": 30,
            "cover": "http://henri-potier.xebia.fr/hp1.jpg"
        }),
        Ember.Object.create({
            "isbn": "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
            "title": "Henri Potier et le Prisonnier d'Azkaban",
            "price": 30,
            "cover": "http://henri-potier.xebia.fr/hp2.jpg"
        }),
        Ember.Object.create({
            "isbn": "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
            "title": "Henri Potier et le Prisonnier d'Azkaban",
            "price": 30,
            "cover": "http://henri-potier.xebia.fr/hp2.jpg"
        }),
        Ember.Object.create({
            "isbn": "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
            "title": "Henri Potier et le Prisonnier d'Azkaban",
            "price": 30,
            "cover": "http://henri-potier.xebia.fr/hp2.jpg"
        }),
        Ember.Object.create({
            "isbn": "c30968db-cb1d-442e-ad0f-80e37c077f89",
            "title": "Henri Potier et la Coupe de feu",
            "price": 29,
            "cover": "http://henri-potier.xebia.fr/hp3.jpg"
        })

    ]);

    this.render();

    assert.equal(component.get('groupedArticles').length, 4);
    assert.equal(component.get('groupedArticles')[2].startIndex, 3);
    assert.equal(component.get('groupedArticles')[2].count, 3);
});
