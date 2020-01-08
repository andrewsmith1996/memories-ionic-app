<template>
  <div class="project-screen">
    <a href="https://www.espressodesign.co.uk/offers" target="_blank" class="project-screen__link">
       <img :immediate="true" src="../../../assets/images/websites/espresso-design.png" width="555" alt="Espresso Design Offers Page - Built at Cursor" />
    </a>
    <h5 class="project-screen__title">Espresso Design offers page</h5>
    <p class="project-screen__caption">HTML, CSS, JavaScript based on provided designs<br>Built on placement at<a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class EspressoDesign extends Vue {

}
</script>

<style lang="scss">

</style>