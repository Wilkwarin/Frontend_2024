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

<style>
#app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header {
  grid-column: 1 / -1;
  width: 100%;
  background-color: blue;
}

footer {
  grid-column: 1 / -1;
  width: 100%;
  background-color: blue;
}

.content {
  display: grid;
  grid-template-columns: 5fr 1fr;
}

</style>
