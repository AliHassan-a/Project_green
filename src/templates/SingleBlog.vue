<template>
  <Layout>
    <div class="featuredImageWrapper">
      <img class="featuredImage parallax-bg" :src="$context.featuredMedia.sourceUrl" :title="$context.featuredMedia.title" :alt="$context.featuredMedia.altText" >
      <div class="featuredImageOverlay" />
      <BaseTitle :align="'left'" :tag="'h1'" class="featuredTitle">
        <span class="animateFadeInLeft" style="font-weight: 400">{{ getFeaturedTitle()[0] }}</span><br>
        <span class="greenColor animateFadeInLeft">{{ getFeaturedTitle()[1] }}</span><br>
        <g-image style="margin-top: 20px; width: 50px;" class="animateFadeInLeftSecond" src="@/assets/Pfeile.svg"></g-image>
      </BaseTitle>
    </div>
    <div class="mainSection">
      <div class="metaData">
        <p class="small greenColor">{{ getFormattedDate($context.date) }}</p>
        <div class="socialShare">
          <g-image src="@/assets/facebook.png"></g-image>
          <g-image src="@/assets/twitter.png"></g-image>
          <g-image src="@/assets/mail.png"></g-image>
        </div>
      </div>
    </div>
    <div class="mainSection contentWrapper">
      <div class="singleContent" v-html="$context.content"></div>
      <div class="sidebarBlog pinnedContainer">
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
  name: "SingleBlog",
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
        gsap.to(".pinnedContainer", {
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: ".pinnedContainer",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
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

        gsap.to(".parallax-bg", {
          scrollTrigger: {
            scrub: true
          },
          y: () => ScrollTrigger.maxScroll(window),
          ease: "none"
        });
      }
    });
  },
  methods: {
    getFormattedDate(date){
      const newDate = new Date(date);
      return newDate.toLocaleDateString('de-de');
    },
    getFeaturedTitle(){
      return this.$context.title.split("*");
    }
  },
  metaInfo() {
    return {
      title: this.$context.title,
      meta: [
        { name: 'title', content: this.$context.acf.metaTitle },
        { name: 'description', content: this.$context.acf.metaDescription },
      ]
    }
  }
}
</script>

<style scoped>
.mainSection{
  min-height: unset;
}
.metaData{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.socialShare{
  display: flex;
  margin-bottom: 70px;
}
.socialShare img{
  margin-left: 10px;
}
.featuredImageWrapper{
  margin: 80px 0px 50px 0px;
  width: 100%;
  max-height: 1000px;
  overflow: hidden;
}
.featuredImageOverlay{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #011713 20%, rgba(0,0,0,0) 60%);
}
img.featuredImage{
  width: 100%;
  max-height: 1000px;
}
.featuredTitle{
  position: absolute;
  top: 30%;
  left: 10%;
  max-width: 30%;
}
.contentWrapper{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
}
div.sidebarBlog{
  padding-top: 100px;
}
</style>

<style>
div.singleContent p{
  margin-bottom: 20px;
}
div.singleContent h2, div.singleContent h3{
  margin-bottom: 20px;
}
</style>

<static-query>
query{
  posts: allWordPressPost(limit: 3){
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