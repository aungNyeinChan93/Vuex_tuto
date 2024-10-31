export default {
  state: {
    name: "hello world!",
    customers: [
      { name: "aung", id: 1 },
      { name: "chan", id: 2 },
      { name: "mgmg", id: 3 },
    ],
  },
  getters: {
    getCustomers(state) {
      return state.customers;
    },
  },
  mutations: {},
  actions: {},
};
