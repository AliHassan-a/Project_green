<template>
  <div class="cursorFollowWrapper">
    <div class="wrapper">
      <div class="ball">
        <svg id="followMouse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <circle r="400" fill="none" cx="500" cy="500"/>
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
    }
  },
  watch: {
    '$route' (to, from) {
      window.setTimeout(() => {
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
    const ball = document.querySelector(".ball");
    const followMouse = document.querySelector("#followMouse");
    const bgBall = document.querySelector(".bgMouseFollow")
    const pageBg = document.querySelector(".mainWrapper")

    const context = this;

    let xTo = gsap.quickTo(".ball", "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(".ball", "y", {duration: 0.6, ease: "power3"});
    let xToBg = gsap.quickTo(".bgMouseFollow", "x", {duration: 3, ease: "power3"}),
        yToBg = gsap.quickTo(".bgMouseFollow", "y", {duration: 3, ease: "power3"});

    window.addEventListener("mousemove", e => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBg(e.clientX);
      yToBg(e.clientY);
    });

    xTo(window.innerWidth);
    yTo(0);
    xToBg(window.innerWidth);
    yToBg(0);

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
    top:-150px;
    left:-150px;
    width: 300px;
    height: 300px;
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

</style>