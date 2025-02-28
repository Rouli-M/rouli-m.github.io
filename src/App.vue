<template>
  <div id="app">
    
    <link rel="stylesheet" href="@/assets/projects/projects.css" type="text/css">

    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  "img/projects/project-1-icon.png",
  "img/projects/project-2-icon.png",
  "img/projects/project-3-icon.png"
]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

html, body {
  margin: 0px;
  background-color: @bodyBgColor;
}

#app {
  background-color: @contentBgColor;
  color: @textColor;

  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

a {
  color: @textColor;
  text-decoration: none;
  opacity: 0.5;
}

a:hover, .router-link-exact-active {
  opacity: 1;
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

.main {
    padding: 12px;
  }

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em; // removing this makes text bigger
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1200px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.project_box
{
  
}.project-item-desc-links {
  filter: invert(15%) sepia(29%) saturate(7021%) hue-rotate(254deg) brightness(99%) contrast(138%);
  width: 100%;
  height: 45.2px; /* Set a specific height for the parent */
  overflow: hidden; /* Ensure content does not overflow */
  display: flex;
  justify-content: flex-start; /* Align items horizontally to the start */
  align-items: center; /* Align items vertically to the center */
  padding: 5px 0; /* Adjust padding as needed */
  max-height: 2em;
}

.project-item-desc-links a.icon {
  /*border: 1px solid red;  Temporary border to visualize boundaries */
  display: flex; /* Use Flexbox for the <a> tag */
  justify-content: center; /* Align items horizontally to the center */
  align-items: center; /* Align items vertically to the center */
  height: 100%; /* Full height of the parent */
  text-decoration: none; /* Optional: remove underline from link */
  margin: 5px;
}

.project-item-desc-links a.icon img {
  max-width: 100%;
  max-height: 100%;
  width: auto; /* Maintain aspect ratio */
  height: 100%; /* Ensure image fits within the parent height */
  object-fit: contain; /* Ensure the image is contained within the parent without being cropped */
  flex-shrink: 1; /* Allow the image to shrink to fit within its parent */
}




</style>
