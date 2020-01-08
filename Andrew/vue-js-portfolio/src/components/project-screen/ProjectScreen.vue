
<template>
  <div class="project-screen">
    <a :href="link" target="_blank" class="project-screen__link">
      <img :immediate="true" :src="image" width="555" :alt="alt" />
  </a>
  <p class="project-screen__caption" v-html="caption"></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class ProjectScreen extends Vue {
  @Prop({type: String}) link!: string;
  @Prop({type: String}) image!: string;
  @Prop({type: String}) alt!: string;
  @Prop({type: String}) caption!: string;
}
</script>

<style lang="scss">

</style>