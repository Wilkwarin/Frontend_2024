<template>
  <div>
    <h1>Cat Story</h1>
    <div class="story">
      <PostCard 
        v-for="stor in story" 
        :key="stor.id" 
        :title="stor.title" 
        :content="stor.content" 
      />
    </div>
  </div>
</template>

<script>
import { usePostStore } from '@/stores/postStore';
import PostCard from '@/components/PostCard.vue';

export default {
  name: 'CatStory',
  components: { PostCard },
  computed: {
    story() {
      return this.postStore.story;
    },
  },
  data() {
    return {
      postStore: usePostStore(),
    };
  },
};
</script>