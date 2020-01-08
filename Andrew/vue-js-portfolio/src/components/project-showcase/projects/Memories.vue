



<template>
  <div class="project__simple">
    <div class="project__simple-content">
      <h3 class="project__title">Memories</h3>
      <h6 class="project__technologies">Ionic 4, Angular, Firebase</h6>
      <p class="project__description">Diary and journaling application for capturing and collecting social experiences.<br>Share, scan and collect friends’ memories with QR codes to build memory diaries together.</p>
      <ul class="project__features-list">
          <li>Google Firebase Authentication, Realtime Database & Storage</li>
          <li>Device Contacts List &amp; Camera Integration</li>
          <li>Geolocation &amp; Interactive Map with Custom Markers</li>
          <li>Google Maps API, Google Nearby Places API</li>
          <li>Geofencing &amp; Local Notifications</li>
          <li>QR Code Generation &amp; QR Code Scanner</li>
          <li>Social Media Sharing</li>
      </ul> 
    </div>
    <div class="project__simple-screenshots">
      <img :immediate="true" src="../../../assets/images/apps/memories_one.png" width="263" height="536" class="project__simple-screenshot" alt="Memories app built in Ionic 4" /> 
      <img :immediate="true" src="../../../assets/images/apps/memories_two.png" width="263" height="536" class="project__simple-screenshot" alt="Memories app built in Ionic 4" /> 
      <img :immediate="true" src="../../../assets/images/apps/memories_four.png" width="263" height="536" class="project__simple-screenshot" alt="Memories app built in Ionic 4" /> 
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Memories extends Vue {

}
</script>

<style lang="scss">

</style>