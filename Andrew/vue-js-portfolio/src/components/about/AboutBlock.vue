

<template>
  <div>
    <img :immediate="true" width="50" src="./assets/images/icons/web.png" :alt="panelInfo.alt" />
    <h3 class="web hidden-xs">{{ panelInfo.title }}</h3>
    <h3 class="web visible-xs">{{ panelInfo.title }}></h3>
    <p>{{ panelInfo.description }} </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
const path = require('path');
@Component
export default class AboutBlock extends Vue {
  @Prop({type: Object}) panelInfo!: {};
  
  getImageIcon(index: number) {
    switch(index) {
      case 1: return "./assets/images/icons/web.png"; 
      case 2: return "./assets/images/icons/mobile.png"; 
      case 3: return "./assets/images/icons/comp-sci.png"; 
      default: return "./assets/images/icons/web.png"; 
    }
  }
}
</script>

<style lang="scss">

</style>