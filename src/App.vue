<template>
  <section>
    <TodoComponent />
  </section>
</template>

<script>
import { onMounted } from "vue";
import { ref } from "vue";
import store from "./store";
import TodoComponent from "../src/components/TodoComponent.vue";

export default {
  name: "App",
  components: {
    TodoComponent,
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
