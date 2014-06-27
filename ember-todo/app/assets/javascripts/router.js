// For more information see: http://emberjs.com/guides/routing/

EmberTodo.Router.map(function() {
  // this.resource('posts');
  this.resource('todo', {
    path: '/todos/:todo_id'
  });
});
