<template>
  <Layout>
    <Cursorfollow />
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
          <h2 class="animateFadeInUp">Wir sorgen dafür, dass dein</h2>
          <h1 class="animateFadeInUpSecond">Unternehmen entdeckt wird.</h1>
          <baseButton class="" :hidden="true" :title="'ENTDECKEN'" :linkTo="'kontakt'" :toDark="false"></baseButton>
        </div>
        <div class="logos animateFadeInUpThird">
          <g-image class="logo" src="@/assets/chartexperten-logo.png"></g-image>
          <g-image class="logo" src="@/assets/kematherm-logo.png"></g-image>
          <g-image class="logo" src="@/assets/helo-logo.png"></g-image>
          <g-image class="logo" src="@/assets/mdz-logo.png"></g-image>
          <g-image class="logo" src="@/assets/uhrig-logo.png"></g-image>
        </div>
      </div>

      <div id="two" class="container section-two">
        <section class="panel">
          <div>
          </div>
          <div class="box-1 box">
            <g-image src="@/assets/chartexperten.png"></g-image>
          </div>
        </section>
        <section class="panel">
          <div>
          </div>
          <div class="box-2 box">
            <g-image src="@/assets/kematherm.png"></g-image>
          </div>
        </section>
        <section class="panel">
          <div>
          </div>
          <div class="box-3 box">
            <g-image src="@/assets/kematherm.png"></g-image>
          </div>
        </section>
      </div>
      <div id="three" class="mainSection section-three">
        <div style="height: 300vh;">
        </div>
      </div>
      <div id="four" class="mainSection section-four">
        <div class="half-footer">
          <h2 class="">RAUM FÜR WACHSTUM</h2>
          <p class="">Lorem ipsum dolor sit</p>
        </div>
      </div>
      <div id="five" class="mainSection section-five">
          <h2 class="">RAUM FÜR WACHSTUM</h2>
          <p class="">Lorem ipsum dolor sit</p>
      </div>
    </div>
  </Layout>
</template>

<script>

import { gsap, ScrollTrigger} from "gsap/all";
import Cursorfollow from "../components/Cursorfollow";
import BaseButton from "../components/BaseButton";


export default {
  components: {
    Cursorfollow,
    BaseButton,
  },
  mounted() {
    //// HORIZONTAL ////
    gsap.registerPlugin(ScrollTrigger);
    // smooth scrolling container

    let sections = gsap.utils.toArray(".panel");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=3000"
      }
    });

    // check how to set animations inside horizontal scroll
    //ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});

    gsap.fromTo(".greenLight", {
      opacity: 1,
    }, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".section-two",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
    gsap.fromTo(".blueLight", {
      opacity: 0,
    }, {
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".section-two",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
    gsap.fromTo(".blueLight", {
      scale: 1,
    }, {
      scale: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: ".section-three",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.fromTo(".half-footer", {
      translateX: -window.innerWidth/2,
    }, {
      translateX: window.innerWidth/2,
      ease: "none",
      scrollTrigger: {
        trigger: ".section-four",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    ScrollTrigger.batch(".animateFadeInUp", {
      toggleClass: "activeContent"
    });
    ScrollTrigger.batch(".animateFadeInUpSecond", {
      toggleClass: "activeContentSecond"
    });
    ScrollTrigger.batch(".animateFadeInUpThird", {
      toggleClass: "activeContentThird"
    });

      ScrollTrigger.defaults({
        immediateRender: false,
        ease: "power1.inOut",
        scrub: true
      });
  }
}
</script>

<style>
body {
  width: 100vw;
  height: 100%;
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
}

section {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.panel{
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: auto;
  height: 100vh;
  text-align: center;
  line-height: 80px;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  will-change: transform;
  transform-origin: bottom;
}

.mainSection {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 100vh;
}

.section-five{
  background: #ff6900;
}

.container {
  width: 500%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.half-footer{
  position: fixed;
  transition: transform 0.3s ease-out;
  will-change: transform;
  left: 0; top:0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
}
/*// content //*/

.firstGreenLight{
  position: absolute;
  left: -40%;
  height: 80vw;
  width: 80%;
  bottom: -40%;
  z-index: 0;
  animation-name: fadeIn;
  animation-duration: 5s;
}

.firstBlueLight{
  position: fixed;
  right: -40%;
  height: 80vw;
  width: 80%;
  top: -70%;
  z-index: 0;
  animation-name: fadeIn;
  animation-duration: 3s;
}

div.logos{
  position: absolute;
  bottom: 50px;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-self: self-end;
  width: 100%;
}
div.logos img{
  object-fit: contain;
}

.secondBlueLight{
  display: none;
}

.secondGreenLight{
  position: absolute;
  bottom: 0;
  height: 80vw;
  width: 80%;
  z-index: 0;
}

.headline{
  position: absolute;
  top:30px;
  left: 30px;
}
</style>
