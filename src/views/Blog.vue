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
import PostCard from '@/components/PostCard.vue';

export default {
  name: 'Blog',
  components: { PostCard },
  data() {
    return {
      posts: [
        { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
        { id: 2, title: 'Second Post', content: 'Here is another amazing post content.' },
        { id: 3, title: 'Third Post', content: 'This is the third post with a lot of interesting stuff.' },
      ],
    };
  },
};
</script>