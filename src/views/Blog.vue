<template>
  <div>
    <h1>Blog</h1>
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
  computed: {
    posts() {
      return this.postStore.posts;
    },
  },
  created() {
    console.log(this.posts);
  },
  setup() {
    const postStore = usePostStore();
    return { postStore };
  },
};
</script>
