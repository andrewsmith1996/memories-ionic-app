

<template>
  <section class="contact">
    <div class="contact__inner-container">
      <h2 class="contact__title">Say hello</h2> 
      <p class="contact__subtitle">Get in touch</p>
      <div class="contact__container">
        <SocialLinks class="contact__social" />
      </div>
       <BlogPreview />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SocialLinks from "./social/SocialLinks.vue";
import BlogPreview from "./social/BlogPreview.vue";

@Component({
  components: {
    SocialLinks,
    BlogPreview
  }
})
export default class Contact extends Vue {
}
</script>

<style lang="scss">

</style>