<template>
  <section>
    <TodoComponent />
    <br />
    <ProductsComponent />
  </section>
</template>

<script>
import { onMounted } from "vue";
import { ref } from "vue";
import store from "./store";
import TodoComponent from "../src/components/TodoComponent.vue";
import ProductsComponent from "./components/ProductsComponent.vue";

export default {
  name: "App",
  components: {
    TodoComponent,
    ProductsComponent,
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
