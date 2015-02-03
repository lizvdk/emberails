import Ember from 'ember';

export default Ember.ArrayController.extend({
  favoriteGoat: function() {
    return this.filterBy("isFavorite").slice(0,8);
  }.property()
});
