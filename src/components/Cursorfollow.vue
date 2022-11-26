<template>
  <div class="cursorFollowWrapper">
    <div class="wrapper">
      <div class="ball">
        <svg id="followMouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <circle r="400" fill="none" cx="500" cy="500"/>
        </svg>
        <svg id="rightChev" :class="mouseDirection == 'isRight' ? '' : 'rotate180'" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </div>
    </div>
    <div class="wrapperBg">
      <div class="bgMouseFollow cursor__flashgreen">
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, Power2 } from "gsap/all";

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
        this.resetButtons();
      },1000)
    }
  },
  methods: {
    resetButtons() {
      if(document.querySelector(".toLight") != null){
        document.querySelectorAll(".toLight").forEach((element) => {
          element.addEventListener("click",function(e) {
            gsap.to(followMouse, 0.5, { scale: 400 });
            gsap.to(followMouse, 0.5, { scale: 1, delay: 1 });
          });
        })
      }
    },
  },
  mounted(){

    let xTo = gsap.quickTo(".ball", "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(".ball", "y", {duration: 0.6, ease: "power3"});
    let xToBg = gsap.quickTo(".bgMouseFollow", "x", {duration: 3, ease: "power3"}),
        yToBg = gsap.quickTo(".bgMouseFollow", "y", {duration: 3, ease: "power3"});

    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBg(e.clientX);
      yToBg(e.clientY);
      if(this.needsDirection){
        this.mouseDirection =  e.clientX > window.innerWidth / 2 ? "isRight" : "isLeft";
      }
    });

    xTo(window.innerWidth);
    yTo(0);
    xToBg(window.innerWidth);
    yToBg(0);


    /* hovers */
    let followMouse = document.getElementById("followMouse");
    let rightChev = document.getElementById("rightChev");
    let hoverElementsDirecction = gsap.utils.toArray(".toDirectionHover");

    hoverElementsDirecction.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        animateHover(followMouse, 20, 0);
        animateOpacity(rightChev, 1, 0.2);
        this.needsDirection = true;
      })
      element.addEventListener("mouseleave", () => {
        animateHover(followMouse, 1, 0.2);
        animateOpacity(rightChev, 0, 0);
        this.needsDirection = false;
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

    this.resetButtons();
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
  .wrapperBg{
    position:fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 0;
  }
  .bgMouseFollow{
    position: fixed;
    top:-25vh;
    left:-25vh;
    width: 50vh;
    height: 50vh;
    border-radius: 1000px;
    will-change: transform;
    background-blend-mode: multiply;
    transition: background-color 0.8s ease-out;
  }
  .cursor__flashgreen{
    background: radial-gradient(#88F332, transparent 70%);
  }
  .cursor__flashblue{
    background: radial-gradient(#2CDBA9, transparent 70%);
  }

  /* content */

  #followMouse{
    transition: transform 0.3s ease-out;
  }
  #rightChev{
    position: absolute;
    left: -50px;
    top: -32px;
    opacity: 0;
    z-index: 1;
    transition: opacity, transform 0.4s ease-out;
  }
  .rotate180{
    transform: rotate(-180deg);
  }
</style>