<template>
  <div>
    <div class="skills__container">
      <div class="skills__content-container">
        <div class="skills__skills-content">
            <h3 class="skills__list-title">Front-end development</h3>
            <ul class="skills__list">
                <li><span></span>ReactJS, Vue.js, TypeScript</li>
                <li><span></span>HTML, CSS, LESS, Bootstrap</li>
                <li><span></span>Ionic Framework, React Native</li>
                <li><span></span>SASS, Flexbox</li>
                <li><span></span>JQuery, AJAX</li>
                <li><span></span>Android Development (Java)</li>
            </ul>
        </div>
        <div class="skills__skills-example">
            <LincolnHack />
        </div>
      </div>
      <div class="screens">
        <div class="screens__row">
          <GreenstockLighting />
          <NicholsonMcBride />
        </div>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import SkillsHeader from "./skills/SkillsHeader.vue";
import SkillsList from "./skills/SkillsList.vue";
import LincolnHack from "./project-showcase/websites/LincolnHack.vue";
import GreenstockLighting from "./project-showcase/websites/GreenstockLighting.vue";
import NicholsonMcBride from "./project-showcase/websites/NicholsonMcBride.vue";

@Component({
  components: {
    SkillsHeader,
    SkillsList,
    LincolnHack,
    GreenstockLighting,
    NicholsonMcBride
  },
})
export default class FrontendSkills extends Vue {
  // content!: {skills_one: any, skills_two: any, skills_three: any, skills_four: any};

  // get frontEndSkills() {
  //   return `${this.content.skills_one}-${this.content.skills_two}-${this.content.skills_three}-${this.content.skills_four}}`.split("-");
  // }
}
</script>

<style lang="scss">

</style>