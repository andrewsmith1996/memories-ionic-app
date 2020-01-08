<template>
  <div>
    <h1 class="header__title">{{ title }}</h1>
    <h2 class="header__subtitle">{{ jobRole }}</h2>
    <p class="header__intro" v-html="intro"></p>
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
export default class HeaderContent extends Vue {
  @Prop({type: String, default: "Andrew Smith"}) title!: string;
  @Prop({type: String, default: "Developer"}) jobRole!: string;
  @Prop({type: String}) intro!: string;
}
</script>

<style lang="scss">

</style>