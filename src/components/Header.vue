<template>
    <header class="menu">
      <nav>
        <ul class="nav-list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/story">CatStory</router-link></li>
          <li><router-link to="/care">Care</router-link></li>
        </ul>
      </nav>
    </header>
</template>
  
  <script>
  export default {
    name: "Header",
  };
  </script>