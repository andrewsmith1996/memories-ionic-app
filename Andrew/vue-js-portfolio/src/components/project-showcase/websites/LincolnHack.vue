<template>
  <div class="project-screen">
    <a href="https://2018.lincolnhack.org/" target="_blank" class="project-screen__link">
      <img :immediate="true" src="../../../assets/images/websites/lincoln-hack.png"  width="750" alt="Lincoln Hack 2018 website - Built at Cursor" />
    </a>
    <h5 class="project-screen__title">Lincoln Hack 2018</h5>
    <p class="project-screen__caption">HTML, CSS, JavaScript, CSS animations based on provided designs<br>Built on placement at <a href="https://cursor.co.uk" target="_blank">Cursor</a></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class LincolnHack extends Vue {

}
</script>

<style lang="scss">

</style>