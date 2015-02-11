import Ember from 'ember';

export default Ember.Component.extend({
  goat: null,
  classNames: ['delete-goat-button'],

  actions: {
    deleteGoat: function() {
      this.get('goat').deleteRecord();
      this.get('goat').save();
    }
  }
});
