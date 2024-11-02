import { createStore } from "vuex";
import Test from "@/store/tests/tests";
import Todos from "@/store/Todos/Todo";
import Products from "./Products/products";
import Posts from "./Posts/Posts";

export default createStore({
  modules: { Test, Todos, Products, Posts },
});
