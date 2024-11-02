<template>
  <section>
    <div class="container">
      {{ limit }}
      <select class="form-control" v-model="limit" @change="limitPosts(limit)">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="100">100</option>
      </select>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const limit = ref(null);

    return {
      limit,
      limitPosts: () => store.dispatch("limitPosts"),
    };
  },
};
</script>
