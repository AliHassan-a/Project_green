<template>
  <div class="cursorFollowWrapper">
    <div class="wrapper">
      <div class="ball">
        <svg id="followMouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <circle r="400" fill="none" cx="500" cy="500"/>
        </svg>
        <svg id="rightChev" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
        <svg id="leftChev" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap/all";

export default {
  name: "Cursorfollow",
  data() {
    return {
      active: false,
      needsDirection: false,
      mouseDirection: null,
    }
  },
  watch: {
    '$route' (to, from) {
      setTimeout(() => {
        this.resetHovers();
      },1000)
    },
  },
  methods: {
    resetHovers() {
      let followMouse = document.getElementById("followMouse");
      let rightChev = document.getElementById("rightChev");
      let leftChev = document.getElementById("leftChev");
      let hoverElementsDirecction = gsap.utils.toArray(".toDirectionHover");

      hoverElementsDirecction.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          animateHover(followMouse, 20, 0);
          animateOpacity(rightChev, 1, 0.2);
          animateOpacity(leftChev, 1, 0.2);
        })
        element.addEventListener("mouseleave", () => {
          animateHover(followMouse, 1, 0.2);
          animateOpacity(rightChev, 0, 0);
          animateOpacity(leftChev, 0, 0);
        })
      })
      function animateHover(element, scale = 1, delay = 0){
        gsap.to(element, {
          scale: scale,
          delay: delay,
          duration: 0.2,
        })
      }
      function animateOpacity(element, opacity = 1, delay = 0){
        gsap.to(element, {
          opacity: opacity,
          delay: delay,
          duration: 0.2,
        })
      }
    }
  },
  mounted(){

    let xTo = gsap.quickTo(".ball", "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(".ball", "y", {duration: 0.6, ease: "power3"});

    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    xTo(window.innerWidth);
    yTo(0);

    this.resetHovers();
  },
}
</script>

<style scoped>
  .cursorFollowWrapper{
    position: absolute;
    left: 0;
    top:0;
  }
  .wrapper{
    position:absolute;
    width: 0px;
    height: 0px;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .ball {
    width: 5px;
    height: 5px;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 100;
    will-change: transform;
  }
  svg{
    margin-top: -100%;
    margin-left: -100%;
  }
  circle{
    fill: #88F332;
  }

  /* content */

  #followMouse{
    transition: transform 0.3s ease-out;
  }
  #rightChev{
    position: absolute;
    width: 60px;
    left: 10px;
    top: -32px;
    opacity: 0;
    z-index: 1;
    transition: opacity, transform 0.4s ease-out;
  }
  #leftChev{
    position: absolute;
    width: 60px;
    left: -60px;
    top: -32px;
    opacity: 0;
    z-index: 1;
    transform: rotate(180deg);
    transition: opacity, transform 0.4s ease-out;
  }
  .rotate180{
    transform: rotate(-180deg);
  }
</style>