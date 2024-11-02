import axios from "axios";

export default {
  state: {
    name: "posts",
    posts: [],
  },
  getters: {
    getPosts: (state) => {
      return state.posts;
    },
  },
  mutations: {
    setPosts: (state, data) => {
      return (state.posts = data);
    },
    setPost: (state, data) => {
      return state.posts.unshift(data);
    },
    deletePost: (state, removeId) => {
      return (state.posts = state.posts.filter((p) => p.id != removeId));
    },
  },

  actions: {
    fetchPosts: async ({ commit }) => {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log(response);
      commit("setPosts", response.data);
    },

    addPost: async (context, newPost) => {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        newPost
      );

      const data = response.data;
      context.commit("setpost", data);
    },

    deletePost: async (context, removeId) => {
      await axios.delete(`https://fakestoreapi.com/products/${removeId}`);
      context.commit("deletePost", removeId);
      // console.log("deletepost");
    },

    limitPosts: async (context, limit) => {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${limit}`
      );
      console.log(limit, response.data);

      context.commit("setPosts", response.data);
    },
  },
};
