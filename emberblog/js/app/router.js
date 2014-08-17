var Blog = Ember.Application.create({});

Blog.Router = Ember.Router.extend({
  location: 'history'
});

Blog.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('blog');
  }
});

Blog.BlogRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('blogPost');
  }
});


