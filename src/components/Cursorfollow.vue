<template>
  <div>
    <div class="ball"></div>
    <div class="bgMouseFollow">
      <div class="lightsWrapper">
        <div class="innerLightsWrapper">
          <g-image class="greenLight" src="@/assets/greenLight.png"></g-image>
        </div>
        <div class="innerLightsWrapper">
          <g-image class="blueLight" src="@/assets/blueLight.png"></g-image>
        </div>
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
  mounted(){
    const ball = document.querySelector(".ball");
    const bgBall = document.querySelector(".bgMouseFollow")
    const pageBg = document.querySelector(".mainWrapper")

    const context = this;
    gsap.set(".ball", {xPercent: -50, yPercent: -50});

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

    document.querySelector(".icon-wrap").addEventListener("mouseenter", function(e) {
      gsap.to(this, 0.3, { scale: 1.2 });
      gsap.to(ball, 0.3, { scale: 10 });
      gsap.to(ball, 0.3, { opacity: 0 });
      gsap.to(".lightsWrapper", {x: -bgBall.clientWidth / 2, duration: 0.5});
      gsap.to(".lightsWrapper", {scale: 0, duration: 0.5});
    });

    document.querySelector(".icon-wrap").addEventListener("mouseleave", function(e) {
      gsap.to(this, 0.3, { scale: 1 });
      gsap.to(ball, 0.3, { scale: 1 });
      gsap.to(ball, 0.3, { opacity: 1 });
      gsap.to(this.querySelector(".button-icon"), 0.3, { x: 0, y: 0 });
      gsap.to(".lightsWrapper", {x: 0, duration: 0.5});
      gsap.to(".lightsWrapper", {scale: 1, duration: 0.5});
    });

    document.querySelector(".icon-wrap").addEventListener("mousemove",function(e) {
      callParallax(e, this);
    });

    if(document.querySelector(".toLight") != null){
      document.querySelector(".toLight").addEventListener("click",function(e) {
        gsap.to(ball, 0.5, { scale: 300 });
        gsap.to(ball, 0.4, { opacity: 1 });
        gsap.to(pageBg, { duration: 0.1, backgroundColor: '#88F332'});
      });
    }
    if(document.querySelector(".toDark") != null){
      document.querySelector(".toDark").addEventListener("click",function(e) {
        gsap.to(ball, 0.5, { scale: 300 });
        gsap.to(ball, 0.4, { opacity: 1 });
        gsap.to(pageBg, { duration: 0.1, backgroundColor: '#011713'});
      });
    }

    function callParallax(e, parent) {
      parallaxIt(e, parent, parent.querySelector(".button-icon"), 10);
    }

    function parallaxIt(e, parent, target, movement) {
      var boundingRect = parent.getBoundingClientRect();
      var relX = e.pageX - boundingRect.left;
      var relY = e.pageY - boundingRect.top;
      gsap.to(target, 0.3, {
        x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
        y: (relY - boundingRect.height / 2) / boundingRect.height * movement,
        ease: Power2.easeOut
      });
    }
  },
}
</script>

<style>
  .ball {
    width: 10px;
    height: 10px;
    position: fixed;
    top: 0;
    left: 0;
    background: #88F332;
    border-radius: 50%;
    pointer-events: none;
    z-index: 100;
  }
  .innerLightsWrapper{
    transform: translateX(-50%) translateY(-50%);
    position: relative;
    display: flex;
  }

  .bgMouseFollow{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
  }

  .bgMouseFollow .greenLight, .bgMouseFollow .blueLight{
    position: absolute;
    top: -25vw;
    left: 25%;
    width: 50%;
  }

  .lightsWrapper{
    -webkit-animation: fadeInOut 2s;
    animation: fadeInOut 2s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>