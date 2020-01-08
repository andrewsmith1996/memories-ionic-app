<template>
  <div class="project-screen">
    <a href="https://www.inconnectcables.co.uk" target="_blank" class="project-screen__link">
      <img :immediate="true" src="../../../assets/images/websites/inconnect-cables.png" width="555" alt="Inconnect Cables website - Built at Cursor" />
  </a>
  <h5 class="project-screen__title">Inconnect Cables</h5>
  <p class="project-screen__caption">HTML, CSS, JavaScript, CraftCMS based on provided designs<br>Built on placement at <a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class InconnectCables extends Vue {

}
</script>

<style lang="scss">

</style>