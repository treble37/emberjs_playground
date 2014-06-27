Emberblah.IndexRoute = Ember.Route.extend
  model: ->
    Emberblah.Todo.findAll()
