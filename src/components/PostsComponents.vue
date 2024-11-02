<template>
  <section>
    <div class="container min-vh-100">
      <h4 class="text-center text-white my-2 p-2 bg-info">Posts</h4>
      <div class="row">
        <div class="col-10 offset-1">
          <PostComponent />
        </div>
      </div>
      <div class="row">
        <div class="col-4 my-2" v-for="post in getPosts" :key="post">
          <div class="card">
            <div class="card-body d-flex justify-content-between">
              <div>({{ post.id }} || {{ post.title }})</div>
              <span class="btn btn-close" @click="deletePost(post.id)"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import PostComponent from "./PostComponent.vue";

export default {
  components: {
    PostComponent,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      // console.log(store.state.Posts.name);
      asyncPosts();
    });

    const asyncPosts = () => {
      store.dispatch("fetchPosts");
    };

    return {
      asyncPosts,
      getPosts: computed(() => store.getters.getPosts),
      deletePost: () => store.dispatch("deletePost"),
    };
  },
};
</script>
