class TodosService {
  constructor($resource, APP_CONFIG) {
    this.Todo = $resource(APP_CONFIG.api.todo);
  }

  addTodo(todo) {
    this.Todo.save(todo, () => {
      console.log('saved');
    });
  }

  getTodos() {
    return this.Todo.query();
  }

  updateTodo(todo) {
    return this.Todo.update({id: todo._id}, todo, () => {
      console.log('updated');
    });
  }

  deleteTodo(todo) {
    return this.Todo.delete({id: todo._id, todo});
  }
}

TodosService.$inject = [
  '$resource',
  'APP_CONFIG'
];

export { TodosService };
