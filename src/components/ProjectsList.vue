<template>
    <div>
      <div class="projects-list">
        <template v-for="project in projects">
          <div
            :key="project.id"
              
              class="project-item"
              :class="{ 'wide': project.isWide, 'high': project.isHigh }">

                <div class="project-item-image" @click="showDetails(project)" :style="{ 'background-image': 'url(' + project.iconUrl + ')' }">
                </div>
                
                <!--
                <div class="project-short-desc" v-html="project.htmlShortDescription"></div>
  <div class="title-bar" :style="{ 'background-color': bodyBgColor + 'DD' }">
            -->
            <div class="project-item-desc">
                <div class="project-item-desc-title" @click="showDetails(project)"> 
                  <h3>{{ project.name }}</h3>
                </div>

                <div class="project-item-desc-links" v-html=project.htmlLinks></div>

                <div class="project-item-desc-body" v-html=project.htmlShortDescription></div>

              </div>

          </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="showPopup = false"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupContent: ""
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // if (event) {
      //   alert(event.target);
      // }
      this.popupTitle = item.name;
      this.popupContent = item.htmlFullDescription;
      this.showPopup = true;
      window.scrollTo(0,0);
    },
  },
});
</script>

<style scoped>

.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 50%;
  transition: all 0.2s;
}

.project-item-desc {
  position: absolute;
  top: 0px;
  right:0px;
  width: 50%;
  background-color: #22222200;
  padding-left: 10px;
  box-sizing: border-box;
}

.project-item-desc-body {
  height: 100%;
  width: 100%;
  font-style: italic;
  right:0;
  top: 0px;
  transition: all 0.2s;
}

.project-item-desc-links {
  filter:invert(15%) sepia(29%) saturate(7021%) hue-rotate(254deg) brightness(99%) contrast(138%);
}

.project-item-desc-title {
  font-style: bold;
}

h3 { 
    display: block;
    font-size: 1.3em;
    margin-top: 0em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}
/*
.project-item-image:hover {
  
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}*/
/*
.project-item:hover {
  
filter: brightness(120%);
}*/

.icon {
  filter: invert(11%) sepia(73%) saturate(6992%) hue-rotate(272deg) brightness(114%) contrast(125%);
}


@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 900px;
    
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 1;
  }
  .high {
    grid-row-end: span 2;
  }
}



</style>