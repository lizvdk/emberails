import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('goat');
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    var newGoat= this.store.createRecord('goat');
    controller.set('newGoat', newGoat);
  },
  actions: {
    createGoat: function(goat) {
      goat.save();
      this.transitionTo('goats.show', goat);
      var newGoat = this.store.createRecord('goat');
      this.controller.set('newGoat', newGoat);

    }
  }
});
