<template>
  <section>
    <div class="container min-vh-100">
      <h3 class="text-center">Products</h3>
      <button @click="actionProduct" class="btn btn-primary">
        Run onMouted Hook
      </button>
      <button class="btn btn-danger ms-2" @click="status = !status">
        TopTen
      </button>

      <div class="row">
        <!-- true -->
        <div class="col-6 offset-3" v-if="status">
          <div class="card my-2" v-for="product in topTen" :key="product.id">
            <div class="card-header">
              {{ product.id }} || {{ product.title }}
            </div>
            <div class="card-body">
              <p>{{ product.description }}</p>
            </div>
          </div>
        </div>
        <!-- false -->
        <div class="col-6 offset-3" v-if="!status">
          <div
            class="card my-2"
            v-for="product in getProducts"
            :key="product.id"
          >
            <div class="card-header">
              {{ product.id }} || {{ product.title }}
            </div>
            <div class="card-body">
              <p>{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const status = ref(false);
    const store = useStore();
    onMounted(() => {
      store.dispatch("getProducts");
    });

    return {
      status,
      actionProduct: () => store.dispatch("getProducts"),
      getProducts: computed(() => store.getters.getProducts),
      topTen: computed(() => store.getters.topTen),
    };
  },
};
</script>

<style lang="stylus" scoped></style>
