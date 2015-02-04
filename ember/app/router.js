import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route("goats", function() {
    this.route("show", { path: ":goat_id" });
    this.route("new");
  });
});

export default Router;
