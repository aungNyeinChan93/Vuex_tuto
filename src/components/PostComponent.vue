<template>
  <section>
    <div class="container">
      <div class="input-group">
        <input type="text" class="form-control" v-model="newPost.title.title" />
        <button class="btn btn-primary" @click="addPost(newPost.title)">
          Add Post
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import store from "@/store";
import { reactive } from "vue";

export default {
  setup() {
    const newPost = reactive({
      title: {
        title: null,
      },
    });

    return {
      newPost,
      addPost: () => store.dispatch("addPost"),
    };
  },
};
</script>
