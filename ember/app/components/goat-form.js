import Ember from 'ember';

export default Ember.Component.extend({
  goat: null,

  actions: {
    save: function() {
      this.sendAction('save', this.get('goat'));
    }
  }
});
