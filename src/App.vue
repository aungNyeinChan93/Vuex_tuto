<template>
  <section>
    <PostsComponents />
    <br />
    <TodoComponent />
    <br />
    <ProductsComponent />
    <br />
  </section>
</template>

<script>
import { onMounted } from "vue";
import { ref } from "vue";
import store from "./store";
import TodoComponent from "../src/components/TodoComponent.vue";
import ProductsComponent from "./components/ProductsComponent.vue";
import PostsComponents from "./components/PostsComponents.vue";

export default {
  name: "App",
  components: {
    TodoComponent,
    ProductsComponent,
    PostsComponents,
  },
  setup() {
    onMounted(() => {
      console.log(store.state);
    });

    const data = ref(store.state.Test.name);

    return { data };
  },
};
</script>
