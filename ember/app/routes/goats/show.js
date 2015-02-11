import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('goat', params.goat_id);
  },
  setupController: function(controller, model, params) {
    this._super(controller, model);

    var currentGoat = this.store.getById('goat', params.goat_id);
    controller.set('goat', currentGoat);
  },
  actions: {
    edit: function(goat) {
      goat.set('isEditing', true);
    },
    acceptChanges: function(goat) {
      goat.set('isEditing', false);
      goat.save();
    },
    deleteGoat: function(goat) {
      goat.deleteRecord();
      goat.save();
    }
  }
});
