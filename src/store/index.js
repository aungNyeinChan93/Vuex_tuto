import { createStore } from "vuex";
import Test from "@/store/tests/tests";
import Todos from "@/store/Todos/Todo";

export default createStore({
  modules: { Test, Todos },
});
