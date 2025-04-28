<template>
  <div>
    <h1>Tech</h1>

  <div style="margin-bottom: 30px;">
    Here are some technical challenges I faced, and the solutions I came up with.
  </div>
  

    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import techProjectsData from "@/data/TechProjectsData.ts";

export default Vue.extend({
  name: "TechProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: techProjectsData,
    };
  },
});
</script>
