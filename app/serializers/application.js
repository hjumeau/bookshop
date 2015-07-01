'use strict';

import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend({
	isNewSerializerAPI: true,
	normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType){
		var newPlayload = {};
		newPlayload[Ember.String.pluralize(primaryModelClass.modelName)] = payload;
		return this._super(store, primaryModelClass, newPlayload, id, requestType);
	}, 
	normelizeSingleResponse: function(store, primaryModelClass, payload, id, requestType){
		var newPlayload = {};
		newPlayload[primaryModelClass.modelName] = payload;
		return this._super(store, primaryModelClass, newPlayload, id, requestType);
	}
});