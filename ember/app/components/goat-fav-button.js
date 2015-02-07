import Ember from 'ember';

export default Ember.Component.extend({
  goat: null,
  classNames: ['fav-button'],
  text: function(){
    if (this.get('goat.isFavorite')) {
      return "Unfavorite :(";
    } else {
      return "Favorite :)";
    }

  }.property('goat.isFavorite'),


  actions: {
    toggleFavoriteGoat: function() {
      this.get('goat').toggleProperty('isFavorite');
      this.get('goat').save();
    }
  }
});
