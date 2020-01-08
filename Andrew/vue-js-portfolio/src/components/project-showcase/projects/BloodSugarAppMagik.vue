<template>
  <div class="project__simple">
        <div class="project__simple-content">
            <h3 class="project__title">BloodSugarAppMagik</h3>
            <h6 class="project__technologies">Ionic 3, Angular </h6>
            <p class="project__description">Built at <a href="https://www.hack24.co.uk/" target="_blank">Hack24</a> this cross platform mobile app tracks and analyses the blood sugar results of Diabetics, 
                giving graph illustrations and a practical representation of blood sugar results over time.</p>
        </div>
        <div class="project__simple-screenshots">
            <img :immediate="true" src="../../../assets/images/apps/bloodsugarappmagik-one.png" width="263" class="project__simple-screenshot" alt="Blood Sugar App Magik built at Hack24" />
            <img :immediate="true" src="../../../assets/images/apps/bloodsugarappmagik-two.png" width="263" class="project__simple-screenshot" alt="Blood Sugar App Magik built at Hack24" />
            <img :immediate="true" src="../../../assets/images/apps/bloodsugarappmagik-three.png" width="263" class="project__simple-screenshot" alt="Blood Sugar App Magik built at Hack24" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class BloodSugarAppMagik extends Vue {

}
</script>

<style lang="scss">

</style>