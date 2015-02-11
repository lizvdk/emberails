import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createGoat: function() {
            var name = this.get('name');
            var bio= this.get('bio');
            var snack= this.get('snack');
            var photoUrl= this.get('photoUrl');

            if (!photoUrl || photoUrl.length < 10) {
              photoUrl = "https://s3.amazonaws.com/goat-space-production/img/default-goat.png";
            }

            var goat = this.store.createRecord('goat', {
                    name:name,
                    bio:bio,
                    snack:snack,
                    isFavorite:false,
                    photoUrl:photoUrl

            });

            this.set('name','');
            this.set('bio','');
            this.set('snack','');
            this.set('photoUrl','');
            goat.save();
            this.transitionToRoute('goats.index');

    }
  }
});
