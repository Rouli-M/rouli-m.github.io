<template>
  <div class="header">
    <div class="nav-bar">
          <img src="img/avatar.png" alt="artistic depiction of myself" /> 
      <div class="categories">
        <router-link to="/">About</router-link>
        <router-link to="/game-projects">Games</router-link>
        <router-link to="/other-projects">Extra</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  //   props: {
  //     msg: String,
  //   },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
}


.nav-bar {
  padding: 20px;
  line-height: 3em;
  display:flex; 
  flex-direction: row;
  justify-content: space-between;
}

img{
  align-self:flex-start;
  object-fit: contain;
  max-width:5%;
}

.categories {
  align-self:flex-end;
  text-align: right;
}


a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}

</style>
