import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.resource("goats");
  this.resource("goat", { path: "/goats/:goat_id" });
});

export default Router;
