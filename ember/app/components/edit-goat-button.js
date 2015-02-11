import Ember from 'ember';

export default Ember.Component.extend({
  goat: null,
  classNames: ['edit-goat-button'],
  actions: {
    toggleIsEditing: function() {
      this.get('goat').toggleProperty('isEditing');
      this.get('goat').save();
    }
  }
});
