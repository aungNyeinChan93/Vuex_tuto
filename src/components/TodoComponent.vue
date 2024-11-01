<template>
  <section>
    <h1>My Todo Lists</h1>
    <ul>
      <li v-for="todo in myTodos" :key="todo">
        <div class="alert alert-danger my-2">
          {{ todo.title }}
        </div>
      </li>
    </ul>

    <div class="my-2">
      <ul>
        <li v-for="customer in $store.getters.getCustomers" :key="customer.id">
          {{ customer.name }}
        </li>
      </ul>
    </div>

    <h2>{{ $store.getters.onlyTwo[0].title }}</h2>

    <div class="card">
      <ul>
        <li v-for="c in getCustomers" :key="c.id">{{ c.name }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";

import store from "@/store";
export default {
  setup() {
    // const store = useStore()
    const myTodos = computed(() => {
      return store.getters.myTodos;
    });

    onMounted(() => {
      // console.log(store);
    });

    return {
      myTodos,
      getCustomers: computed(() => store.getters.getCustomers),
    };
  },
};
</script>

<style></style>
