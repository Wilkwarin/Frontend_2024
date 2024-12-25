<template>
    <div class="gallery-item">
      <img :src="image" :alt="title" />
      <p>{{ title }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GalleryItem',
    props: {
      image: String,
      title: String,
    },
  };
  </script>

  