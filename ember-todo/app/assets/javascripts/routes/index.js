EmberTodo.IndexRoute = Ember.Route.extend({
  model: function() {
    return EmberTodo.Todo.findAll();
  }
});