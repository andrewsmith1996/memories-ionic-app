
<template>
   <ul class="skills__list">
      <li v-for="(skill, index) in skills" :key="index"><span></span>{{ skill }}</li>
   </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class SkillsList extends Vue {
  @Prop({type: Array}) skills!: [];
}
</script>

<style lang="scss">

</style>