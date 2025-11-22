<template>
    <div>
      <div class="projects-list">
		<template v-for="project in projects" :key="project.id">
  			<div class="project-item" :class="{ 'wide': project.isWide, 'high': project.isHigh }">
                <div class="project-item-image"  @mouseover="hoverOver(project)" @mouseout="hoverOut(project)" :style="backgroundImageStyle(project)">
                </div>

                <div class="project-item-desc">
                  <div class="project-item-desc-title"> 
                    <h3>{{ project.name }}</h3>
                  </div>

                  <div v-if="project.htmlLinks.length > 0" class="project-item-desc-links" v-html=project.htmlLinks></div>

                  <div class="project-item-desc-body" v-html=project.htmlShortDescription></div>

                  <div class= "project-item-desc-see-more" @click="showDetails(project)" v-if="project.htmlFullDescription && project.htmlFullDescription.trim() !== ''">See more</div>

              </div>

          </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="showPopup = false"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :htmlLinks="popupLinks"
        :pictures="popupPictures"
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
      popupContent: "",
      popupLinks:"",
      popupPictures:{},
      imageSrc:"",
      hoveredProject:""
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      this.popupTitle = item.name;
      this.popupContent = item.htmlFullDescription;
      this.popupLinks = item.htmlLinks;
      this.popupPictures = item.pictures;
      this.showPopup = true;
      //window.scrollTo(0,0);
    },
    hoverOver: 
    function (item: ProjectData) {
      this.hoveredProject=item.id;
      //this.imageSrc = item.iconUrl;
    },
    hoverOut: 
    function (item: ProjectData) {
      this.hoveredProject="";
    },
    backgroundImageStyle(item: ProjectData)
    {
      if(item.id == this.hoveredProject && item.gifUrl.length > 0)
        return {'background-image': 'url(' + item.gifUrl + ')' }
      else
        return {'background-image': 'url(' + item.iconUrl + ')' } 
    }
  },
});



</script>

<style scoped>

.project-item {
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 50%;
  transition: all 0.2s;
  border-radius: 15px;
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

.project-item-desc-title {
  font-style: bold;
}

.project-item-desc-links {

  justify-content: left;
  align-items: left; 
}

.project-item-desc-body {
  height: 100%;
  width: 100%;
  font-style: italic;
  right:0;
  top: 0px;
  transition: all 0.2s;
}

.project-item-desc-see-more {
  height: 100%;
  width: 100%;
  font-style: bold;
  text-decoration: underline;
  right:0;
  bottom: 0px;
  cursor: pointer;
}

h3 { 
    display: block;
    font-size: 1.3em;
    margin-top: 0em;
    margin-bottom: 0em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
}

/*
.project-item-image:hover {
  
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.project-item:hover {
  
filter: brightness(120%);
}

*/

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
