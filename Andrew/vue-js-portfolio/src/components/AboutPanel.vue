<template>
<section class="about-panel">
  <div class="about-panel__inner-container">
    <div class="about-panel__block">
      <img :immediate="true" width="50"  class="about-panel__block-icon" src="../assets/images/icons/web.png" alt="Web Development Icon" />
      <h3 class="about-panel__block-title">Web Development</h3>
      <p class="about-panel__block_description">Web design &amp; web development skills with a year's experience of working within an agency and a year's freelance experience.</p>
    </div>

    <div class="about-panel__block">
      <img :immediate="true" width="50" class="about-panel__block-icon" src="../assets/images/icons/mobile.png" alt="Mobile Development Icon" />
      <h3 class="about-panel__block-title">Mobile Development</h3>
      <p class="about-panel__block_description">Skills in native Android development in Java and cross-platform mobile development in Ionic and React Native.</p>
    </div>
        
    <div class="about-panel__block">
      <img :immediate="true" width="50" class="about-panel__block-icon" src="../assets/images/icons/comp-sci.png" alt="Computer Science Icon" />
      <h3 class="about-panel__block-title">Computer Science</h3>
      <p class="about-panel__block_description">First Class Honours degree in BSc Computer Science (85%) with a year's placement in industry, winning both the 'Best Graduate' and 'Best Project' awards.</p>
    </div>
  </div>
</section>

</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class AboutPanel extends Vue {

}
</script>

<style lang="scss">

</style>