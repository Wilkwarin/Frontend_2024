<template>
  <div id="app">
    <Header />

    <div class="content">
      <main>
        <router-view />
      </main>
      <Banner />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Banner from './components/Banner.vue';

export default {
  name: 'App',
  components: { 
    Header,
    Footer,
    Banner,
  },
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 5fr 1fr;
}

</style>
