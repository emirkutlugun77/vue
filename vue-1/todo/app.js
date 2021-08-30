const app = Vue.createApp({
  data() {
    return {
      todoList: [],
      todoForAdd: "",
      todosForRemove: [],
    };
  },
  methods: {
    handleInput(value) {
      this.todoForAdd = value;
    },
    addToTodoList() {
      this.todoList.push(this.todoForAdd);
      this.resetTodoValue();
    },
    resetTodoValue() {
      this.todoForAdd = "";
    },
    removeTodoFromList(value) {
      this.todoList.pop(value);
    },
    addToRemoveList(todo) {
      this.todosForRemove.push(todo);
    },
    popFromRemoveList(todo) {
      this.todosForRemove.pop(todo);
    },
    checkEvent(event, todo) {
      if (event.target.checked) {
        this.addToRemoveList(todo);
      } else {
        this.popFromRemoveList(todo);
      }
    },
    removeMulti(todos) {
      this.todoList.pop(todos);
      this.todosForRemove = [];
    },
  },
}).mount("#app");
