

<template>
  <div class="education__modules">
    <h3 class="education__modules-title"><strong>{{ title }}</strong></h3>
    <ul class="education__modules-list">
      <li class="education__modules-item" v-for="(module, index) in modules" :key="index">{{ module.title }}
        <span>({{module.result}})</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class PlacementYearRow extends Vue {
  @Prop({type: String, default: "Modules"}) title!: string;
  @Prop({type: Array}) modules!: [{}];
}
</script>

<style lang="scss">

</style>