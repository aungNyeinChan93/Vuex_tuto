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
      const response = await axios.get("http://localhost:4000/products");
      console.log(response);
      commit("setPosts", response.data);
    },

    addPost: async (context, newPost) => {
      const response = await axios.post(
        "http://localhost:4000/products",
        newPost
      );

      const data = response.data;
      context.commit("setpost", data);
    },

    deletePost: async (context, removeId) => {
      await axios.delete(`http://localhost:4000/products/`, removeId);
      context.commit("deletePost", removeId);
      console.log("deletepost");
    },
  },
};
