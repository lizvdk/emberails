import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);
      this.get('model').save();
    },
    deleteGoat: function() {
      var goat = this.get('model');
      this.transitionTo('goats');
      goat.deleteRecord();
      goat.save();
    }
  }
});
