Emberblah.Todo = Ember.Object.extend


Emberblah.Todo.reopenClass
  findAll: ->
    todos = Em.A()
    Ember.$.getJSON('/api/v1/todos').then (data) ->
      Ember.run () ->
        todos.pushObjects(data.todos)
        todos
