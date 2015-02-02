import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createGoat: function() {
            var name = this.get('name');
            var bio= this.get('bio');
            var snack= this.get('snack');

            var goat = this.store.createRecord('goat', {
                    name:name,
                    bio:bio,
                    snack:snack,
                    isFavorite:false

            });
            this.set('name','');
            this.set('bio','');
            this.set('snack','');
            goat.save();
            this.transitionToRoute('goats.show', goat);

    }
  }
});
