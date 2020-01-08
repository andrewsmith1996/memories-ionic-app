


<template>
  <div>
    <div class="project__simple">
      <div class="project__simple-content">
        <h3 class="project__title">Gluco - AI &amp; Machine Learning</h3>
        <h6 class="project__technologies">Ionic 3, Node.js, MongoDB, Express, Angular</h6>
        <p class="project__description">
            Final Year Project for BSc (Hons) Computer Science entitled <em>"Using Artificial Intelligence and Machine Learning to improve the Glycaemic Control of Insulin Dependent Diabetics"</em> - (awarded 100%)
            <br><br>
            I built an API in Node.js, MongoDB and Express to provide various artificial intelligence and machine learning techniques to diabetic patients through a mobile application built in Ionic 3.  
            <br><br>
            Scoring 100% in the final written report, this project looked into the provision of various artificial intelligence and machine learning techniques to identify patterns of poor blood sugar control, give recommendations to patients on fixing patterns, identfiying the causes of patterns, validating when a pattern has been fixed and a machine learning enabled insulin dose calculator.
        </p>
      </div>
      <div class="project__simple-screenshots">
        <img :immediate="true" src="../../../assets/images/apps/gluco_one.png" width="263" class="project__simple-screenshot" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />  
        <img :immediate="true" src="../../../assets/images/apps/gluco_two.png" width="263" class="project__simple-screenshot" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" /> 
      </div>
    </div>
    <div class="project__simple--full-row">
      <div class="project__simple-screenshots--row">
        <img :immediate="true" src="../../../assets/images/apps/gluco_four.png" width="263" class="project__simple-screenshot" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
        <img :immediate="true" src="../../../assets/images/apps/gluco_three.png" width="263" class="project__simple-screenshot" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
        <img :immediate="true" src="../../../assets/images/apps/gluco_five.png" width="263" class="project__simple-screenshot" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
        <img :immediate="true" src="../../../assets/images/apps/gluco_six.png" width="263" class="project__simple-screenshot" alt="Gluco App built in Ionic and API built in Node.js, MongoDB and Express" />
      </div>
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