<template>
  <div class="project-screen">
    <a href="https://www.simonsgroup.com" target="_blank" class="project-screen__link">
      <img :immediate="true" src="../../../assets/images/websites/simons-group-main.png" width="555" alt="www.simonsgroup.com" />
    </a>
    <h5 class="project-screen__title">Simons Group</h5>
    <p class="project-screen__caption">HTML, CSS, JavaScript, CraftCMS based on provided designs<br>Built on placement at <a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class SimonsGroup extends Vue {

}
</script>

<style lang="scss">

</style>