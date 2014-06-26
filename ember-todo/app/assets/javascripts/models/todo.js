EmberTodo.Todo = Ember.Object.extend({});

EmberTodo.Todo.reopenClass({
  findAll: function() {
    var todos;
    todos = Em.A();
    return $.getJSON('/api/v1/todos').then(function(data) {
      return Ember.run(function() {
        todos.pushObjects(data.todos);
        return todos;
      });
    });
  }
});
