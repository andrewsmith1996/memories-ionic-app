<template>
   <div class="project__simple">
        <div class="project__simple-content">
            <h3 class="project__title">Hoptical</h3>
            <h6 class="project__technologies">Android, Java, Firebase</h6>
            <p class="project__description">Craft Beer tracker Android application showcasing a range of advanced Android concepts such as:</p>
            <ul class="project__features-list">
                <li>Google Sign-in</li>
                <li>Google Firebase Realtime Database</li>
                <li>Encrypted local SQL storage</li>
                <li>Geolocation services</li>
                <li>Offline capabilities</li>
                <li>API calls &amp; JSON parsing</li>
                <li>Async tasks</li>
                <li>Camera integration</li>
                <li>Contacts directory integration</li>
                <li>Fragments, Implicit &amp; Explicit intents</li>
            </ul> 
        </div>
        <div class="project__simple-screenshots">
            <img :immediate="true" src="../../../assets/images/apps/hoptical-one.png" width="263" class="project__simple-screenshot" alt="Hoptical Craft Beer Tracking app built in Android" />
            <img :immediate="true" src="../../../assets/images/apps/hoptical-three.png" width="263" class="project__simple-screenshot" alt="Hoptical Craft Beer Tracking app built in Android" />
            <img :immediate="true" src="../../../assets/images/apps/hoptical-two.png" width="263" class="project__simple-screenshot" alt="Hoptical Craft Beer Tracking app built in Android" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Hoptical extends Vue {

}
</script>

<style lang="scss">

</style>