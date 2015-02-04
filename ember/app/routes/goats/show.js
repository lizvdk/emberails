import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('goat', params.goat_id);
  }
});
