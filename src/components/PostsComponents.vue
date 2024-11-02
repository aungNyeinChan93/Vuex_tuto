<template>
  <section>
    <div class="container min-vh-100">
      <h4 class="text-center text-white my-2 p-2 bg-info">Posts</h4>
      <div class="row">
        <div class="col-10 offset-1">
          <PostComponent />
        </div>
        <div class="col-3 offset-1 my-2">
          <PostLimitComponent />
        </div>
      </div>
      <div class="row">
        <div class="col-4 my-2" v-for="post in getPosts" :key="post">
          <div
            class="card"
            :class="{ 'bg-primary': completed }"
            @click="changeBG"
          >
            <div class="card-body d-flex justify-content-between">
              <div>({{ post.id }} || {{ post.title.substring(0, 30) }})</div>
              <span class="btn btn-close" @click="deletePost(post.id)"></span>
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
import PostComponent from "./PostComponent.vue";
import PostLimitComponent from "./PostLimitComponent.vue";

export default {
  components: {
    PostComponent,
    PostLimitComponent,
  },
  setup() {
    const store = useStore();
    const completed = ref(false);

    onMounted(() => {
      // console.log(store.state.Posts.name);
      asyncPosts();
    });

    const asyncPosts = () => {
      store.dispatch("fetchPosts");
    };

    const changeBG = () => {
      completed.value = !completed.value;
    };

    return {
      completed,
      asyncPosts,
      changeBG,
      getPosts: computed(() => store.getters.getPosts),
      deletePost: () => store.dispatch("deletePost"),
    };
  },
};
</script>
