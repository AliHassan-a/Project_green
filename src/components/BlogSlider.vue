<template>
  <div class="simpleSliderWrapper toDirectionHover">
    <div class="simpleSlider animateFadeInUp">
      <a :href="'/blog/' + edge.node.slug" v-for="edge in $static.posts.edges" :key="edge.node.id">
        <div class="singleCard">
          <img :src="edge.node.featuredMedia.sourceUrl" :title="edge.node.featuredMedia.title" :alt="edge.node.featuredMedia.altText">
          <p style="margin-bottom: 50px;" v-html="edge.node.title">
          <hr class="greenBg line" />
          <p style="font-size: 18px" class="greenColor" v-html="edge.node.date"></p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap/all";
export default {
  name: "BlogSlider",
  props: {
    content: Array,
  },
  data() {
    return {
      active: 0,
      count: null,
      isDown: false,
      startX: null,
      scrollLeft: null,
    }
  },
  mounted() {
    const slider = document.querySelector('.simpleSliderWrapper');

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX); //scroll-fast
      gsap.to( slider ,{
        scrollLeft: scrollLeft - walk,
        duration: 0.5,
      })
    });
  }
}
</script>

<style scoped>
.simpleSliderWrapper{
  overflow: hidden;
  width: calc(100VW - (100vw / 8));
  padding-left: calc(100vw / 8);
  cursor: grab;
}
.simpleSlider{
  display: inline;
  white-space: nowrap;
  left: 0;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  transition: left 0.8s ease-out;
  overflow: visible;
}
.singleCard{
  display: inline-block;
  width: 30vw;
  margin-right: 20px;
  background: black;
  padding: 58px 46px;
}
.singleCard img{
  max-height: 300px;
}
.line{
  width: 100px;
  height: 2px;
  border: 0;
  outline: 0px;
  display: inline-block;
}
@media only screen and (max-width: 1024px){
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
