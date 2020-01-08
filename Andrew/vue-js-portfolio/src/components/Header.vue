<template>
  <header class="header">
    <div class="header__inner-container">
        <HeaderContent class="header__content"/>
        <Technologies class="header__technologies"/>
      </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import Technologies from "./technologies/Technologies.vue";
import HeaderContent from "./header/HeaderContent.vue";

@Component({
  components: {
    Technologies,
    HeaderContent
  }
})
export default class Header extends Vue {
  globalContent!: {};
}
</script>

<style lang="scss">

</style>