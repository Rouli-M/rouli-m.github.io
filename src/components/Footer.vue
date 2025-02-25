<template>
  <div class="footer">
    
    <div class="left">Check out the <a href="https://github.com/Rouli-M/rouli-m.github.io" target="blank">source code</a> of this portfolio</div>
    <div class="right">Reach me at <a target="_blank" href="mailto:martin.loiseau49@gmail.com">martin.loiseau49@gmail.com</a> </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  font-size: 0.8em;
  opacity: 0.7;
  padding-bottom: 30px;
}

.left, .right {
    padding-top: 10px;
    text-align: center;
  }

@media only screen and (min-width: 620px){

  .footer {
    padding: 0;
  }

  .left, .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float:right;
  }
}
</style>