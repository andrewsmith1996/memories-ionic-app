<template>
  <div>
    <div class="skills__container">
      <div class="skills__content-container">
        <div class="skills__skills-content">
          <h3 class="skills__list-title">Back-end development</h3>
          <ul class="skills__list">
              <li><span></span>NodeJS, MongoDB</li>
              <li><span></span>Google Firebase, Google Cloud</li>
              <li><span></span>PHP, SQL, mySQL</li>
              <li><span></span>C++, C#, Python</li>
              <li><span></span>CraftCMS, PHPmyAdmin</li>
          </ul>
        </div>
        <div class="skills__skills-example">
            <SteveNashFashion />
        </div>
      </div>
    </div>
    <div class="screens">
      <div class="screens__row">
        <SimonsGroup />
        <FosterAC />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SteveNashFashion from "./project-showcase/websites/SteveNashFashion.vue";
import SimonsGroup from "./project-showcase/websites/SimonsGroup.vue";
import FosterAC from "./project-showcase/websites/FosterAC.vue";


@Component({
  components: {
    SteveNashFashion,
    SimonsGroup,
    FosterAC
  }
})
export default class Header extends Vue {

}
</script>

<style lang="scss">

</style>