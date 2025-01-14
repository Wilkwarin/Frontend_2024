<template>
  <div>
    <h1>Blog</h1>

    <form @submit.prevent="handleSubmit">
      <div>
        <label for="title">Заголовок:</label>
        <input
          id="title"
          v-model="newPost.title"
          type="text"
          placeholder="Введите заголовок"
          required
        />
      </div>
      <div>
        <label for="content">Содержание:</label>
        <textarea
          id="content"
          v-model="newPost.content"
          placeholder="Введите содержание"
          required
        ></textarea>
      </div>
      <button type="submit">Добавить статью</button>
    </form>

    <div class="post-list">
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :content="post.content"
      />
    </div>
  </div>
</template>

<script>
import { usePostStore } from '@/stores/postStore';
import PostCard from '@/components/PostCard.vue';

export default {
  name: 'Blog',
  components: { PostCard },
  data() {
    return {
      newPost: {
        title: '',
        content: '',
      },
    };
  },
  computed: {
    posts() {
      return this.postStore.posts;
    },
    postStore() {
      return usePostStore();
    },
  },
  methods: {
    handleSubmit() {
      if (this.newPost.title && this.newPost.content) {
        const post = {
          id: Date.now(),
          title: this.newPost.title,
          content: this.newPost.content,
        };
        this.postStore.addPost(post);
        this.newPost.title = '';
        this.newPost.content = '';
      }
    },
  },
};
</script>
