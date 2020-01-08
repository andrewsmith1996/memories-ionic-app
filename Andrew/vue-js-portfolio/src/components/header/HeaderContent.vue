<template>
  <div>
    <h1 class="header__title">Andrew Smith</h1>
    <h2 class="header__subtitle">Developer</h2>
    <p class="header__intro">A double award winning First Class BSc (Hons) Computer Science graduate and agency experienced developer specialising in web development and mobile app development.<br /><br />Currently working with Vue.js, MEAN stack technologies, native mobile application development and cross-platform application development.</p>
    <SocialLinks />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SocialLinks from "../social/SocialLinks.vue";

@Component({
  components: {
    SocialLinks
  }
})
export default class HeaderContent extends Vue {}
</script>

<style lang="scss">

</style>