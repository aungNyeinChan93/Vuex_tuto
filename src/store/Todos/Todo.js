export default {
  state: {
    todos: [
      { title: "Todo -1", id: 1 },
      { title: "Todo -2", id: 2 },
      { title: "Todo -3", id: 3 },
    ],
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
    onlyTwo(state) {
      return state.todos.filter((todo) => todo.id == 2);
    },
  },
  mutations: {},
  actions: {},
};
