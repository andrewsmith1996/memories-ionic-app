<template>
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu:400,500|Open+Sans:600">
      </head>
      <body>
        <div id="app">
          <Header />
          <div class="gradient-wrapper">
            <AboutPanel />
            <ProjectShowcase />
            <Skills />
            <Education />
            <Projects />
            <Contact /> 
          </div>
          <Footer />
        </div>
      </body>
    </html>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
import Header from './components/Header.vue';
import AboutPanel from './components/AboutPanel.vue';
import Footer from './components/Footer.vue';
import Contact from './components/Contact.vue';
import Education from './components/Education.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import ProjectShowcase from './components/ProjectShowcase.vue';

@Component({
  components: {
    Header,
    AboutPanel,
    Footer,
    Contact,
    Education,
    Projects,
    Skills,
    ProjectShowcase
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
