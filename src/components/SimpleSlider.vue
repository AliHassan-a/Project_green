<template>
  <div class="simpleSliderWrapper toDirectionHover">
    <div class="simpleSlider animateFadeInUp">
      <div class="singleCard" v-for="card in content">
        <p style="margin-bottom: 50px;" v-html="card.text">
        <hr class="greenBg line" />
        <p style="font-size: 34px; font-weight: 600" v-html="card.customer"></p>
        <p style="font-size: 18px" class="greenColor" v-html="card.position"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap/all";
export default {
  name: "simpleSlider",
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
      startX = e.changedTouches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('touchstart', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.changedTouches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('touchend', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('touchcancel', () => {
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
    slider.addEventListener('touchmove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.changedTouches[0].pageX - slider.offsetLeft;
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