<template>
 <div class="project__simple">
    <div class="project__simple-content">
        <h3 class="project__title">Geolocation Weather Forecast</h3>
        <h6 class="project__technologies">React Native</h6>
        <p class="project__description">A simple React Native app that uses the Geolocation functionality of a mobile phone and a WeatherAPI to retrieve a user's current location and return a 5 day weather forecast for that location. 
        <br><br>I published a full guide on how to build this app <a href="https://dev.to/andrewsmith1996/how-to-build-an-geolocation-weather-forecast-app-in-react-native-in-30-minutes-1kmo" target="_blank">here</a> as part of a "Let's Build" series of tutorials.
        <br><br>This guide was also a featured article in Tech Nottingham's October newsletter.
        <br><br><a href="https://github.com/andrewsmith1996/geolocationWeatherReactNative" target="_blank">View on GitHub</a>
        </p>
    </div>
    <div class="project__simple-screenshots">
        <img :immediate="true" src="../../../assets/images/apps/geolocation-one.png" width="263" class="project__simple-screenshot" alt="React Native Geolocation Weather Forecast app" />
        <img :immediate="true" src="../../../assets/images/apps/geolocation-two.png" width="263" class="project__simple-screenshot" alt="React Native Geolocation Weather Forecast app" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class GeolocationWeatherApp extends Vue {

}
</script>

<style lang="scss">

</style>