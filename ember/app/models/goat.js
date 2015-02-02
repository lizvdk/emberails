import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    bio: DS.attr('string'),
    snack: DS.attr('string'),
    isFavorite: DS.attr('boolean')
});
// .reopenClass({
//     FIXTURES: [
//         {
//           id: 1,
//           name: "Sally",
//           bio: "Natoque porta ullamcorper suspendisse eget a accumsan" +
//                 "at consequat class blandit ultrices odio a suspendisse" +
//                 "ornare aptent condimentum a aliquet phasellus neque." +
//                 "Fusce auctor a nisi.",
//           snack: "Tin Cans",
//           isFavorite: false
//         },
//         {
//           id: 2,
//           name: "Frostie",
//           bio: "Baby goat caught in an endless, boundlessly happy frolic.",
//           snack: "Hay",
//           isFavorite: true
//         },
//         {
//           id: 3,
//           name: "T.",
//           bio: "Netus ridiculus arcu ad parturient libero dui sem inceptos" +
//                "id quis a scelerisque a dignissim parturient sem.",
//           snack: "Chai Tea",
//           isFavorite: false
//         }
//     ]
// });
