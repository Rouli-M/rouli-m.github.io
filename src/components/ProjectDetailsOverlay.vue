<template>
  <transition name="fade">
    <div v-if="visible">
      <div class="overlay"></div>
      <div class="dialog fixed-popup" :style="{ 'background-color': color }">
        <div class="dialog-content">
          <h1 class="dialog-title">{{ title }}</h1>
          <div class="project-item-desc-links" v-html="htmlLinks"></div>
          <div @click="$emit('close')" class="dialog-close">
            <i class="fa fa-times fa-lg fa-fw"></i>
          </div>
          <div class="scrollable-content" v-html="htmlContent"></div>


          <PictureCarousel
            v-if="pictures && pictures.length > 0"
            :pictures="pictures"
          />

          <div class="dialog-bottom">
            <a @click="$emit('close')" class="dialog-close-button">Close</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import PictureCarousel from "./PictureCarousel.vue";

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
    htmlLinks: String,
    pictures: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    getImage: function (url: string) {
      console.log("fetching image " + url);
    },
  },
});
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

.dialog {
  z-index: 11;
  margin: 20px;
  padding-bottom: 10px;
  color: white;
}

.fixed-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.iframe {
  width: 100%;
}

h1.dialog-title {
  text-align: center;
  font-size: 1.3em;
  margin: 0px;
  padding: 22px;
}

.dialog-content {
  padding: 20px;
  max-height: 80vh;
  overflow-y: auto;
}

.scrollable-content {
  max-height: 60vh;
  overflow-y: auto;
}

.dialog-content {
  background-color: #fcfcfc;
  color: #696969;
  border-radius: 15px;
}

.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 100;
}

.dialog-close:hover {
  opacity: 0.6;
}

.dialog-bottom {
  text-align: center;
}

a.dialog-close-button {
  cursor: pointer;
  font-size: 1.4em;
  display: inline-block;
  margin: 0 auto;
}

.project-item-desc-links {
  justify-content: center; /* Center the image horizontally */
  align-items: center;
}

.scrollable-content ::v-deep img  {
  max-width:80%;
  max-height: 50%;
}


@media only screen and (min-width: 620px) {
  .dialog {
    margin: 0 auto;
    margin-top: 0;
    margin-bottom:0;
    max-width: 1000px;
  }

  h1.dialog-title {
    font-size: 1.6em;
  }

  .dialog-content {
    padding: 40px;
  }
}
</style>
