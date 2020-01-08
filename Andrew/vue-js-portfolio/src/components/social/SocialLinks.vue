<template>
 <div class="social__links">
    <a class="social__links-link" href="https://www.linkedin.com/in/andrewsmithdeveloper/" target="_blank"><img :immediate="true" width="30" src="../../assets/images/social/linkedin.png" alt="LinkedIn Icon" class="linkedin" /></a>
    <a class="social__links-link" href="https://github.com/andrewsmith1996" target="_blank"><img :immediate="true" width="30" src="../../assets/images/social/github.png" alt="GitHub Icon" class="github" /></a>
    <a class="social__links-link" href="https://technottingham.slack.com/messages/andrewsmith96" target="_blank"><img :immediate="true" width="30" src="../../assets/images/social/slack-icon.png" alt="Slack Icon" /></a>
    <a class="social__links-link" href="https://stackoverflow.com/users/4561107/andrew1996" target="_blank"><img :immediate="true" width="30" src="../../assets/images/social/stack-overflow-icon.png" alt="Stack Overflow Icon" class="stackoverflow" /></a>
    <a class="social__links-link" href="https://dev.to/andrewsmith1996" target="_blank"><img :immediate="true" width="30" src="../../assets/images/social/devto.png" alt="Andrew Smith's DEV Profile" /></a>       
    <a class="social__links-link" href="https://medium.com/@andrew.smith_84400" target="_blank"><img :immediate="true" width="30" src="../../assets/images/social/medium.png" alt="Andrew Smith's Medium Profile" /></a>       
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class SocialLinks extends Vue {
  @Prop({type: Object}) links!: {}
}
</script>

<style lang="scss">

</style>