class TodosController {
  constructor(TodosService) {
    this.TodosService = TodosService;
    this.todos        = this.TodosService.getTodos();
    this.Todo         = new this.TodosService.Todo();

    this.resetTodo();
  }

  addTodo() {
    this.Todo.name = this.name;
    this.Todo.note = this.note;
    this.Todo.completed = this.completed;

    this.todos.push({
      'name': this.name,
      'note': this.note,
      'completed': this.completed
    });

    this.TodosService.addTodo(this.Todo);
    this.resetTodo();
  }

  resetTodo() {
    this.name = '';
    this.note = '';
    this.completed = false;
  }

  updateTodo(index) {
    let todo = this.todos[index];
    this.TodosService.updateTodo(todo);
  }

  deleteTodo(index) {
    let todo = this.todos[index];
    let promise = this.TodosService.deleteTodo(todo);

    promise.$promise.then((result) => {
      console.log('deleted');
      this.todos.splice(index, 1);
    });
  }
}

// This is the ES6 way to inject dependancies for use inside our class:
TodosController.$inject = [
  'TodosService'
];

export { TodosController };
