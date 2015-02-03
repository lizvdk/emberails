import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('goats').findBy('id', params.id);
  }
});
