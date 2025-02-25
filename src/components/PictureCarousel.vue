<template>
    <div class="carousel">
      <div class="carousel-container" ref="carouselContainer">
        <div class="carousel-item" v-for="(picture, index) in pictures" :key="index">
          <img :src="picture" :alt="'Image ' + (index + 1)" />
        </div>
      </div>
      <button class="carousel-button left" @click="scrollLeft">‹</button>
      <button class="carousel-button right" @click="scrollRight">›</button>
    </div>
  </template>
  
  <script>
export default {
  name: "PictureCarousel",
  props: {
    pictures: {
      type: Array,
      required: true,
    },
  },
  methods: {
    scrollLeft() {
      this.$refs.carouselContainer.scrollBy({
        left: -this.$refs.carouselContainer.clientWidth,
        behavior: 'smooth',
      });
    },
    scrollRight() {
      this.$refs.carouselContainer.scrollBy({
        left: this.$refs.carouselContainer.clientWidth,
        behavior: 'smooth',
      });
    },
  },
};
</script>


<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-container {
  display: flex;
  scroll-behavior: smooth;
}

.carousel-item {
  min-width: 100%;
  flex-shrink: 0;
}

.carousel-item img {
  width: 100%;
  display: block;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carousel-button.left {
  left: 10px;
}

.carousel-button.right {
  right: 10px;
}
</style>
