



<template>
  <div class="project__simple">
    <div class="project__simple-content">
        <h3 class="project__title">Image Identifier </h3>
        <h6 class="project__technologies">React Native</h6>
        <p class="project__description">A React Native app that uses AI and a number of React Native components to identify what's in an image taken by a user.
            <br><br>I published a full guide on how to build this app <a href="https://dev.to/andrewsmith1996/how-to-build-an-image-recognition-app-in-react-native-m6g" target="_blank">here</a> as part of a "Let's Build" series of tutorials.
            <br><br>This guide was also a featured article in Tech Nottingham's September newsletter.
            <br><br><a href="https://github.com/andrewsmith1996/Image-Recogition-React-Native" target="_blank"> View on GitHub</a>
        </p>
    </div>

    <div class="project__simple-screenshots">
        <img :immediate="true" src="../../../assets/images/apps/image-recognition-react-native-1.png" width="263" class="project__simple-screenshot" alt="React Native image recognition app" />
        <img :immediate="true" src="../../../assets/images/apps/image-recognition-react-native-2.png" width="263" class="project__simple-screenshot" alt="React Native image recognition app" />
        <img :immediate="true" src="../../../assets/images/apps/image-recognition-react-native-3.png" width="263" class="project__simple-screenshot" alt="React Native image recognition app" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class ImageIdentifier extends Vue {

}
</script>

<style lang="scss">

</style>