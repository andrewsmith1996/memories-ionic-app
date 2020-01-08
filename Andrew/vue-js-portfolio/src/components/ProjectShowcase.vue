<template>
  <section class="projects-panel">
    <div class="projects-panel__inner-container">
      <ProjectShowcaseHeader  />
      <Gluco  />
      <Memories  />
      <Hoptical  />
      <ImageIdentifier />
      <DataDashboard  />
      <BloodSugarAppMagik  />
      <GeolocationWeatherApp  />
      <HackbustersGame />  
      
      <div class="projects__screens" >
        <div class="projects__screen">
          <InconnectCables />
        </div>
        <div class="projects__screen">
          <EspressoDesign />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import ProjectShowcaseHeader from "./project-showcase/ProjectShowcaseHeader.vue";
import Gluco from "./project-showcase/projects/Gluco.vue";
import Memories from "./project-showcase/projects/Memories.vue";
import Hoptical from "./project-showcase/projects/Hoptical.vue";
import ImageIdentifier from "./project-showcase/projects/ImageIdentifier.vue";
import BloodSugarAppMagik from "./project-showcase/projects/BloodSugarAppMagik.vue";
import DataDashboard from "./project-showcase/projects/DataDashboard.vue";
import GeolocationWeatherApp from "./project-showcase/projects/GeolocationWeatherApp.vue";
import HackbustersGame from "./project-showcase/projects/HackbustersGame.vue";
import InconnectCables from "./project-showcase/websites/InconnectCables.vue";
import EspressoDesign from "./project-showcase/websites/EspressoDesign.vue";


@Component({
  components: {
    ProjectShowcaseHeader,
    Gluco,
    Memories,
    Hoptical,
    ImageIdentifier,
    BloodSugarAppMagik,
    DataDashboard,
    GeolocationWeatherApp,
    HackbustersGame,
    InconnectCables,
    EspressoDesign
  }
})
export default class ProjectShowcase extends Vue {

}
</script>

<style lang="scss">

</style>