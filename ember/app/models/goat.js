import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    bio: DS.attr('string'),
    snack: DS.attr('string'),
    isFavorite: DS.attr('boolean'),
    photoUrl: DS.attr('string'),
});
