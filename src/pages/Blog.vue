<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-head">
        <BaseTitle :align="'left'" :tag="'h2'" class="defaultMarginX">Aktuelles aus Agentur & Werbewelt</BaseTitle>
      </div>
      <div id="one" class="mainSection section-one">
        <a class="singleBlog" :href="'/blog/' + edge.node.slug" v-for="edge in $static.posts.edges" :key="edge.node.id">
          <div class="singleCard">
            <img class="featured" v-if="edge.node.featuredMedia != null" :src="edge.node.featuredMedia.sourceUrl" :title="edge.node.featuredMedia.title" :alt="edge.node.featuredMedia.altText">
            <p v-html="edge.node.title">
            <p style="font-size: 18px" class="greenColor" v-html="edge.node.date"></p>
          </div>
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
import BaseTitle from "../components/BaseTitle";
import {gsap, ScrollSmoother, ScrollTrigger} from "gsap/all";

export default {
  name: "Blog",
  components: {
    BaseTitle,
  },
  mounted() {
    //// HORIZONTAL ////
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    let smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true
    });

    ScrollTrigger.defaults({
      immediateRender: false,
      ease: "power1.inOut",
      scrub: false
    });

    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        /* footer */
        gsap.to(".footer-overlay", {
          scale: 2.5,
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: ".footer-overlay",
            start: "top center",
            end: "top end",
            scrub: 1,
          }
        });
        gsap.to(".footer", {
          color: "#011713",
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: ".footer-overlay",
            start: "top center",
            end: "top end",
            scrub: 1,
          }
        });
      },
      "(max-width: 1024px)": () => {
      },
      "all": () => {
        /* DEFAULT ANIMATIONS */
        ScrollTrigger.batch(".animateFadeInUp", {
          toggleClass: "activeContentUp"
        });
        ScrollTrigger.batch(".animateFadeInUpSecond", {
          toggleClass: "activeContentUpSecond"
        });
        ScrollTrigger.batch(".animateFadeInUpThird", {
          toggleClass: "activeContentUpThird"
        });
        ScrollTrigger.batch(".animateFadeInLeft", {
          toggleClass: "activeContentLeft"
        });
        ScrollTrigger.batch(".animateFadeInLeftSecond", {
          toggleClass: "activeContentLeftSecond"
        });
        ScrollTrigger.batch(".animateFadeInLeftThird", {
          toggleClass: "activeContentLeftThird"
        });
      }
    });
  }
}
</script>

<style scoped>
.section-head{
  min-height: unset;
  margin-top: 200px;
}
.section-one{
  flex-direction: row;
  gap: 25px;
  flex-wrap: wrap;
  min-height: unset;
}
.singleBlog{
  width: calc(33% - 16.666px);
  flex-grow: 1;
}
img.featured{
  height: 333px;
  object-fit: cover;
}
</style>

<static-query>
query{
  posts: allWordPressPost{
      edges{
        node{
        slug,
        title,
        date,
        featuredMedia{
          sourceUrl,
          title,
          altText
        }
      }
    }
  }
}
</static-query>