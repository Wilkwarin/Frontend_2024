<template>
  <div>
    <h1>Gallery</h1>
    <section class="carousel">
      <div class="carousel-inner">

        <div class="carousel-item" v-for="item in carouselItems" :key="item.id">
          <img 
            class="caru" 
            :src="'/src/images/' + item.image" 
            :alt="item.alt" 
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        { image: 'image1.jpg', alt: 'Image 1' },
        { image: 'image2.jpg', alt: 'Image 2' },
        { image: 'image3.jpg', alt: 'Image 3' },
        { image: 'image4.jpg', alt: 'Image 4' },
      ],
    };
  },
};
</script>