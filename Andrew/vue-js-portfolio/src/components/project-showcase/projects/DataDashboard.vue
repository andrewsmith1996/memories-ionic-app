<template>
   <div class="project__simple">
    <div class="project__simple-content">
        <h3 class="project__title">Personal Data Dashboard</h3>
        <h6 class="project__technologies">React, Flexbox</h6>
        <p class="project__description">A ReactJS project that utilises a variety of third-party APIs to display and organise useful personal information including unique iCal calendar integration, WunderList integration and both news and weather APIs.<br><br>This web app also features on-demand refreshing of information, CSS animation and a layout built using Flexbox.</p>
    </div>
    <div class="project__simple-screenshots">
        <img :immediate="true" width="750" src="../../../assets/images/websites/dashboard-reactjs.png" class="project__simple-screenshot" alt="ReactJS data dashboard project" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Gluco extends Vue {

}
</script>

<style lang="scss">

</style>