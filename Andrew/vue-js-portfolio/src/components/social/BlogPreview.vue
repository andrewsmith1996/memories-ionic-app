
<template>
  <div class="contact__blog">
    <h2 class="contact__blog-preview__top-title">Latest from my blog</h2>
    <a href="https://thisdeveloperslife.wordpress.com/" target="_blank" class="contact__blog-preview__url">thisdeveloperslife.wordpress.com</a>
      <vueper-slides v-if="blogPosts" :bullets="false" :visible-slides="2" slide-multiple :gap="3" :dragging-distance="200">
        <vueper-slide v-for="(post, index) in blogPosts" :key="index" class="contact__blog-preview">
          <template v-slot:content>
            <article>
              <h4 class="contact__blog-preview__title"><strong><a :href=post.url v-html="post.title"></a></strong></h4>
              <span>Posted on {{ post.PostDate }}</span>
              <p class="contact__blog-preview__content" v-html="post.intro"></p>
              <a :href="post.url" target="_blank">read more</a>
            </article>
          </template>
        </vueper-slide>
      </vueper-slides>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";
const { VueperSlides, VueperSlide } = require('vueperslides');
import 'vueperslides/dist/vueperslides.css'
import moment from 'moment';
import axios from 'axios';

@Component({
   components: {
      VueperSlides,
      VueperSlide
   }
})
export default class BlogPreview extends Vue {

  blogPosts: Array<any> = [];
  async mounted() {
     try {
        let response = await axios.get('https://public-api.wordpress.com/rest/v1.1/sites/117679029/posts/');
        this.blogPosts = response.data.posts.map((post: any): any => {
          return {
            title: post.title,
            url: post.URL,
            intro: post.excerpt,
            postDate: moment(post.date).format('MMMM Do YYYY, h:mma')
          } as any;
        });
     } catch (e) {
       console.log(e);
     }
  }
}
</script>

<style lang="scss">

</style>