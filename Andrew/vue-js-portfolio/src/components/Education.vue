<template>
   <section class="education">
    <div class="education__inner-container">
      <EducationHeader />
      <div class="education__row">
        <YearModules class="education__column" :title="educationContent.year_1_title" :modules="[]" />
        <YearModules class="education__column" :title="educationContent.year_2_title" :modules="[]" />
        <YearModules class="education__column" :title="educationContent.year_3_title" :modules="[]" />
      </div>
      <PlacementYearRow />
      </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import EducationHeader from "./education/EducationHeader.vue";
import PlacementYearRow from "./education/PlacementYearRow.vue";
import YearModules from "./education/YearModules.vue";

@Component({
  components: {
    EducationHeader,
    PlacementYearRow,
    YearModules
  }
})
export default class Education extends Vue {

}
</script>

<style lang="scss">

</style>