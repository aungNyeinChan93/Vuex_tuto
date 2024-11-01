import axios from "axios";

export default {
  state: {
    name: "products",
    products: [],
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    topTen: (state) =>
      (state.products = state.products.filter((p) => p.id <= 10)),
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get("http://localhost:4000/products");
      const data = response.data;
      console.log(data);
      commit("setProducts", data);
    },
  },
};
