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
      if (!goat.photoUrl || goat.photoUrl.length < 10) {
        goat.set("photoUrl", "https://s3.amazonaws.com/goat-space-production/img/default-goat.png");
      }
      goat.save();
      this.transitionTo('goats.show', goat);
      var newGoat = this.store.createRecord('goat');
      this.controller.set('newGoat', newGoat);

    }
  }
});
