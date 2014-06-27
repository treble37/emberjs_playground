# For more information see: http://emberjs.com/guides/routing/

Emberblah.Router.map ()->
  # @resource('posts')
  @resource "todos",
    path: "/"
  , ->

  @resource 'todos', ->
    @route 'new'
  @resource 'todo', path: '/todos/:todo_id', ->
    @route 'edit'
