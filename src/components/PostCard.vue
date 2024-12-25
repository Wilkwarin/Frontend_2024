<template>
    <div class="post-card">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostCard',
    props: {
      title: String,
      content: String,
    },
  };
  </script>