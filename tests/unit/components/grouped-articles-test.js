import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('grouped-articles', 'Unit | Component | grouped articles', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('grouped one articles', function(assert) {
	assert.expect(5);

  // Creates the component instance
  var component = this.subject();

  component.set('cart', {articles:[
  	
  	{
  		"isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
  		"title": "Henri Potier à l'école des sorciers",
  		"price": 35,
  		"cover": "http://henri-potier.xebia.fr/hp0.jpg"
  	},
  	{
  		"isbn": "a460afed-e5e7-4e39-a39d-c885c05db861",
  		"title": "Henri Potier et la Chambre des secrets",
  		"price": 30,
  		"cover": "http://henri-potier.xebia.fr/hp1.jpg"
  	},
  	{
  		"isbn": "fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
  		"title": "Henri Potier et le Prisonnier d'Azkaban",
  		"price": 30,
  		"cover": "http://henri-potier.xebia.fr/hp2.jpg"
  	},
  	{
  		"isbn": "c30968db-cb1d-442e-ad0f-80e37c077f89",
  		"title": "Henri Potier et la Coupe de feu",
  		"price": 29,
  		"cover": "http://henri-potier.xebia.fr/hp3.jpg"
  	}
  	
  	]});

  this.render();

  assert.equal(component.get('groupedArticles').length, 4);
  assert.equal(component.get('groupedArticles.firstObject.startIndex'), 0);
  assert.equal(component.get('groupedArticles.firstObject.count'), 1);
  assert.equal(component.get('groupedArticles.lastObject.startIndex'), 3);
  assert.equal(component.get('groupedArticles.lastObject.count'), 1);
});
