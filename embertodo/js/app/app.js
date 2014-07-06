var Todos = Ember.Application.create({
});

/** Router **/
Todos.Router.map(function () {
    this.resource('todos', {path: "/"}, function() {
        this.route('todo', {path: "/todo/:todo_id"});
    });
});

Todos.TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});

Todos.TodosTodoRoute = Ember.Route.extend({
    model: function(todo) {
        return this.store.find('todo', todo.todo_id);
    }
});

/** Ember Data **/
Todos.Todo = DS.Model.extend({
    name: DS.attr('string'),
    value: DS.attr('string')
});

Todos.Store = DS.Store.extend({
    adapter: DS.LSAdapter
});


Todos.TodosController = Ember.ArrayController.extend({
    needs: ['todosTodo'],
    newTodoName: null,

    actions: {
        createNewTodo: function() {
            var content = this.get('content');
            var newTodoName = this.get('newTodoName');
            var unique = newTodoName != null && newTodoName.length > 1;

            content.forEach(function(todo) {
                if (newTodoName === todo.get('name')) {
                    unique = false; return;
                }
            });

            if (unique) {
                var newTodo = this.store.createRecord('todo');
                newTodo.set('id', newTodoName);
                newTodo.set('name', newTodoName);
                newTodo.save();

                this.set('newTodoName', null);
            } else {
                alert('Todo must have a unique name of at least 2 characters!');
            }
        },

        doDeleteTodo: function (todo) {
            this.set('todoForDeletion', todo);
            $("#confirmDeleteTodoDialog").modal({"show": true});
        },

        doCancelDelete: function () {
            this.set('todoForDeletion', null);
            $("#confirmDeleteTodoDialog").modal('hide');
        },

        doConfirmDelete: function () {
            var selectedTodo = this.get('todoForDeletion');
            this.set('todoForDeletion', null);
            if (selectedTodo) {
                this.store.deleteRecord(selectedTodo);
                selectedTodo.save();

                if (this.get('controllers.todosTodo.model.id') === selectedTodo.get('id')) {
                    this.transitionToRoute('todos');
                }
            }
            $("#confirmDeleteTodoDialog").modal('hide');
        }

    }
});

Todos.TodosTodoController = Ember.ObjectController.extend({
    actions: {
        updateTodo: function() {
            var content = this.get('content');
            console.log(content);
            if (content) {
                content.save();
            }
        }
    }
});