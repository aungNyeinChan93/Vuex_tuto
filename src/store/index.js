import { createStore } from "vuex";
import Test from "@/store/tests/tests";
import Todos from "@/store/Todos/Todo";
import Products from "./Products/products";

export default createStore({
  modules: { Test, Todos, Products },
});
