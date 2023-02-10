<template>
  <div class="cursorFollowWrapper">
    <div class="wrapper">
      <div class="ball">
        <svg id="followMouse" viewBox="0 0 1000 1000">
          <circle r="400" fill="none" cx="500" cy="500"/>
        </svg>
        <svg id="followFont" viewBox="0 0 100 100" width="100" height="100">
          <defs>
            <path id="circle"
                  d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
          </defs>
          <text font-size="17">
            <textPath xlink:href="#circle" id="hoverContentText">
              You spin me right round, baby...
            </textPath>
          </text>
        </svg>
        <svg id="rightChev" width="100" height="100" fill="black" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
        <svg id="leftChev" width="100" height="100" fill="black" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
        <svg id="upChev" width="100" height="100" fill="black" viewBox="0 0 16 16">
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

      this.setDirectionListener(followMouse);
      this.setLinkListener(followMouse);
    },
    setLinkListener(followMouse){
      let upChev = document.getElementById("upChev");
      let followFont = document.getElementById("followFont");
      let hoverElements = gsap.utils.toArray(".toLinkHover");

      hoverElements.forEach((element) => {
        const customText = element.getAttribute("gs-hover");
        if (element.getAttribute("gs-hover") != null){
        }
        element.addEventListener("mouseenter", () => {
          mouseEnter();
          document.getElementById("hoverContentText").innerHTML = customText;
        })
        element.addEventListener("mouseleave", () => {
          mouseLeave();
        })
      })
      function mouseEnter(){
        animateHover(followMouse, 15, 0);
        animateOpacity(upChev, 1, 0.2);
        animateOpacity(followFont, 1, 0.3);
      }
      function mouseLeave(){
        animateHover(followMouse, 1, 0.2);
        animateOpacity(upChev, 0, 0);
        animateOpacity(followFont, 0, 0);
      }
      function animateHover(element, scale = 1, delay = 0){
        gsap.to(element, {
          scale: scale,
          delay: delay,
          duration: 0.5,
          overwrite: true,
        })
      }
      function animateOpacity(element, opacity = 1, delay = 0){
        gsap.to(element, {
          opacity: opacity,
          delay: delay,
          duration: 0.5,
          overwrite: true,
        })
      }
    },
    setDirectionListener(followMouse){
      let rightChev = document.getElementById("rightChev");
      let leftChev = document.getElementById("leftChev");
      let hoverElements = gsap.utils.toArray(".toDirectionHover");

      hoverElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          mouseEnter();
        })
        element.addEventListener("mouseleave", () => {
          mouseLeave();
        })
      })
      function mouseEnter(){
        animateHover(followMouse, 15, 0);
        animateOpacity(rightChev, 1, 0.2);
        animateOpacity(leftChev, 1, 0.2);
      }
      function mouseLeave(){
        animateHover(followMouse, 1, 0.2);
        animateOpacity(rightChev, 0, 0);
        animateOpacity(leftChev, 0, 0);
      }
      function animateHover(element, scale = 1, delay = 0){
        gsap.to(element, {
          scale: scale,
          delay: delay,
          duration: 0.5,
          overwrite: true,
        })
      }
      function animateOpacity(element, opacity = 1, delay = 0){
        gsap.to(element, {
          opacity: opacity,
          delay: delay,
          duration: 0.5,
          overwrite: true,
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
    width: 20px;
    height: 20px;
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
    opacity: 0.9;
  }

  /* content */

  #followMouse{
  }
  svg#followFont {
    fill: currentColor;
    height: auto;
    transform-origin: center;
    position: absolute;
    left: -52px;
    top: -38px;
    width: 115px;
    animation: rotation 6s infinite linear;
    opacity: 0;
  }
  svg textpath {
    fill: black;
    color: black;
    font-size: 12px;
    font-weight: 600;
  }
  @keyframes rotation {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
  }
  #rightChev{
    position: absolute;
    width: 40px;
    left: 10px;
    top: -30px;
    opacity: 0;
    z-index: 1;
    transition: opacity, transform 0.4s ease-out;
  }
  #leftChev{
    position: absolute;
    width: 40px;
    left: -40px;
    top: -30px;
    opacity: 0;
    z-index: 1;
    transform: rotate(180deg);
    transition: opacity, transform 0.4s ease-out;
  }
  #upChev{
    position: absolute;
    width: 40px;
    left: -15px;
    top: -30px;
    opacity: 0;
    z-index: 1;
    transform: rotate(-45deg);
    transition: opacity, transform 0.4s ease-out;
  }
  .rotate180{
    transform: rotate(-180deg);
  }
</style>