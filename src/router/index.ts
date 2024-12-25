import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Gallery from '@/views/Gallery.vue'
import Blog from '@/views/Blog.vue'
import CatStory from '@/views/CatStory.vue'
import Care from '@/views/Care.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/gallery', component: Gallery },
  { path: '/blog', component: Blog },
  { path: '/story', component: CatStory },
  { path: '/care', component: Care },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
