<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div style="display: flex; width: 100%;">
          <div style="width: 100%; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;">
            <h2 class="animateFadeInLeft">Wir sorgen dafür, dass dein</h2>
            <h2 class="animateFadeInLeft" style="margin-left: -5px;">&nbsp;&nbsp;&nbsp;Unternehmen gehört wird</h2>
            <h2 class="animateFadeInLeftSecond greenColor" style="text-align: left;"><b>Laut & deutlich</b></h2>
            <g-image style="margin-top: 20px;" class="animateFadeInLeftThird" src="@/assets/Pfeile.svg"></g-image>
            <!--
            <baseButton class="" :hidden="true" :title="'ENTDECKEN'" :linkTo="'kontakt'" :toDark="false"></baseButton>
            -->
          </div>
          <div style="width: 100%;">
            <g-image class="animateFadeInUpSecond" style="width: 100%;position: absolute;top: -65%;right: -35%;" src="@/assets/Mesh-Shape-grnstn.png"></g-image>
          </div>
        </div>
        <div style="position: absolute; bottom: 150px; width: 100%; opacity: 0.6">
          <hr class="animateFadeInUpThird" style="height: 2px; border: 0; outline: 0px; background: lightgrey; opacity: 0" />
        </div>
        <div class="logos animateFadeInUpThird">
          <p style="font-size: 14px; color: #e7ffd3">UNTERNEHMEN, DIE<br>GERNE MIT UNS ARBEITEN</p>
          <g-image class="logo" src="@/assets/chartexperten-logo.png"></g-image>
          <g-image class="logo" src="@/assets/kematherm-logo.png"></g-image>
          <g-image class="logo" src="@/assets/helo-logo.png"></g-image>
          <g-image class="logo" src="@/assets/mdz-logo.png"></g-image>
          <g-image class="logo" src="@/assets/uhrig-logo.png"></g-image>
        </div>
      </div>
      <!-- PROJECTS SLIDER -->
      <div id="two" class="container section-two">
        <h2 style="position:absolute; top: 80px; left: calc(100vw/12)">Wir entwickeln innovative <br> Apps & Webseiten</h2>
        <section class="panel">
          <g-link to="/projekte/chartexperten/">
            <div class="box" style="background: #1A102E">
              <div class="projectLeft">
                <img src="@/assets/projects/chartexperten/logo.svg"/><h3>Web App & Branding für Chartexperten</h3>
              </div>
              <div class="projectRight">
                <img style="max-width: 400px" src="@/assets/projects/chartexperten/mockup.svg"/>
              </div>
            </div>
          </g-link>
        </section>
        <section class="panel">
          <g-link to="/projekte/chartexperten/">
            <div class="box" style="background: #1A102E">
              <div>
                <img src="@/assets/projects/chartexperten/logo.svg"/><h3>Web App & Branding für Chartexperten</h3>
              </div>
              <div>
                <img style="max-width: 400px" src="@/assets/projects/chartexperten/mockup.svg"/>
              </div>
            </div>
          </g-link>
        </section>
      </div>
      <div id="three" class="mainSection section-three">
        <div style="display: flex; width: 100%; height: 200vh; ">
          <div style="position: sticky; top:0; height: 100vh; width: 100%; display: flex; flex-direction: column; align-items: flex-start; justify-content: center">
            <h2 class=""> Designer, Programmierer </h2>
            <h2 class=""> Marketing-Experten </h2>
            <h2 class="greenColor" style="text-align: left;"><b>Freunde</b></h2>
            <g-image class="" style="margin-top: 20px;" src="@/assets/Pfeile.svg"></g-image>
          </div>
          <div style="width: 100%; display: flex; flex-direction:column;">
            <g-image class="animateFadeInLeft" style="margin-top: 30%;" src="@/assets/praktis1.png"></g-image>
            <g-image class="animateFadeInUp" style="margin-top: -70px; margin-left: 50%;" src="@/assets/praktis2.png"></g-image>
            <g-image class="animateFadeInLeft" style="margin-top: 10%;" src="@/assets/developer.png"></g-image>
            <g-image class="animateFadeInUp" style="margin-top: -70px; margin-left: 50%;" src="@/assets/3guys.png"></g-image>
          </div>
        </div>
      </div>
      <div id="four" class="section-four">
        <div class="animateFadeInLeft" style="background: black; width: calc(100% - 100%/6); padding: 10%; margin-left: calc(-100%/10)">
          <g-image class="animateFadeInUp" style="margin-top: -350px;" src="@/assets/zitat.png"></g-image>
          <h2 class="animateFadeInUpSecond"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
          <hr class="animateFadeInUpSecond greenBg" style="margin-top: 100px; width: 244px; height: 4px; border: 0; outline: 0px; opacity: 0; display: inline-block;" />
          <h2 class="animateFadeInUpThird"><b>Rene Grebenstein</b> </h2>
          <p class="animateFadeInUpThird greenColor" style="font-size: 32px;"> Inhaber </p>
        </div>
      </div>
      <div id="five" class="mainSection section-five">
        <div style="width: calc(100% - 100vw / 6)">
          <h2 class="animateFadeInLeft" style="margin-bottom: 60px;"> Unsere Leistungen </h2>
          <div style="width: 100%; opacity: 0.6">
            <hr class="animateFadeInLeft" style="height: 2px; border: 0; outline: 0px; background: lightgrey; opacity: 0" />
          </div>
          <div class="animateFadeInUp" style="display: flex; justify-content: space-between; align-items: center; gap: 20px; margin: 30px 0px;">
            <g-image style="object-fit: contain; width: 82px;" src="@/assets/design_strategie_icon.png"></g-image>
            <h2 style="width: 100%; font-size: 34px;">Design & Strategie</h2>
            <baseButton class="" style="justify-content: flex-end" :hidden="false" :title="'Mehr erfahren'" :linkTo="'kontakt'" :toDark="false"></baseButton>
          </div>
          <div style="width: 100%; opacity: 0.6">
            <hr class="animateFadeInUp" style="height: 2px; border: 0; outline: 0px; background: lightgrey; opacity: 0" />
          </div>
          <div class="animateFadeInUp" style="display: flex; justify-content: space-between; align-items: center; gap: 20px; margin: 30px 0px;">
            <g-image style="object-fit: contain; width: 82px;" src="@/assets/entwicklung_icon.png"></g-image>
            <h2 style="width: 100%; font-size: 34px;">Entwicklung</h2>
            <baseButton class="" style="justify-content: flex-end" :hidden="false" :title="'Mehr erfahren'" :linkTo="'kontakt'" :toDark="false"></baseButton>
          </div>
          <div style="width: 100%; opacity: 0.6">
            <hr class="animateFadeInUp" style="height: 2px; border: 0; outline: 0px; background: lightgrey; opacity: 0" />
          </div>
          <div class="animateFadeInUp" style="display: flex; justify-content: space-between; align-items: center; gap: 20px; margin: 30px 0px;">
            <g-image style="object-fit: contain; width: 82px;" src="@/assets/marketing_icon.png"></g-image>
            <h2 style="width: 100%; font-size: 34px;">Marketing</h2>
            <baseButton class="" style="justify-content: flex-end" :hidden="false" :title="'Mehr erfahren'" :linkTo="'kontakt'" :toDark="false"></baseButton>
          </div>
          <div style="width: 100%; opacity: 0.6">
            <hr class="animateFadeInUp" style="height: 2px; border: 0; outline: 0px; background: lightgrey; opacity: 0" />
          </div>
        </div>
      </div>
      <div id="six" class="mainSection section-six">
        <div style="width: calc(100% - 100vw / 6)">
          <h2 class="animateFadeInLeft" style="margin-bottom: 60px;"> Was unsere Kunden sagen </h2>
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
            <div class="animateFadeInUp" style="background: black; padding: 58px 46px;">
              <p style="margin-bottom: 50px; font-size: 26px">Zuverlässig und gute Leistung. <br><br> Die Greenstein Agentur kam Kundenwünsche sofort nach, auch die Zusammenarbeit und Absprache verläuft schnell und reibungslos. Mit der Arbeit sind wir sehr zufrieden</p>
              <hr class="greenBg" style="width: 100px; height: 2px; border: 0; outline: 0px; display: inline-block;" />
              <p style="font-size: 34px"><b>Martin B.</b></p>
              <p style="font-size: 18px" class="greenColor"> KFz-Sachverständigenbüro Berner GmbH </p>
            </div>
            <div class="animateFadeInUp" style="background: black; padding: 58px 46px;">
              <p style="margin-bottom: 50px; font-size: 26px">Zuverlässig und gute Leistung. <br><br> Die Greenstein Agentur kam Kundenwünsche sofort nach, auch die Zusammenarbeit und Absprache verläuft schnell und reibungslos. Mit der Arbeit sind wir sehr zufrieden</p>
              <hr class="greenBg" style="width: 100px; height: 2px; border: 0; outline: 0px; display: inline-block;" />
              <p style="font-size: 34px"><b>Martin B.</b></p>
              <p style="font-size: 18px" class="greenColor"> KFz-Sachverständigenbüro Berner GmbH </p>
            </div>
            <div class="animateFadeInUp" style="background: black; padding: 58px 46px;">
              <p style="margin-bottom: 50px; font-size: 26px">Zuverlässig und gute Leistung. <br><br> Die Greenstein Agentur kam Kundenwünsche sofort nach, auch die Zusammenarbeit und Absprache verläuft schnell und reibungslos. Mit der Arbeit sind wir sehr zufrieden</p>
              <hr class="greenBg" style="width: 100px; height: 2px; border: 0; outline: 0px; display: inline-block;" />
              <p style="font-size: 34px"><b>Martin B.</b></p>
              <p style="font-size: 18px" class="greenColor"> KFz-Sachverständigenbüro Berner GmbH </p>
            </div>
          </div>
        </div>
      </div>
      <div id="seven" class="mainSection section-seven">
        <p style="font-size: 34px">Du hast ein spannendes Projekt?</p>
        <h2 style="font-size: 126px; color: #E7FFD3; font-weight: 700; font-feature-settings: 'calt' 0, 'calt' 0;">Lass uns sprechen!</h2>
      </div>
    </div>
  </Layout>
</template>

<script>

import { gsap, ScrollTrigger, ScrollSmoother, Power2} from "gsap/all";
import BaseButton from "../components/BaseButton";


export default {
  components: {
    BaseButton,
  },
  data() {
    return {
    }
  },
  mounted() {
    //// HORIZONTAL ////
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // smooth scrolling container
    // create the smooth scroller FIRST!
    let smoother = ScrollSmoother.create({
      smooth: 1,   // seconds it takes to "catch up" to native scroll position
      effects: false // look for data-speed and data-lag attributes on elements and animate accordingly
    });

    let sections = gsap.utils.toArray(".panel");

    ScrollTrigger.defaults({
      immediateRender: false,
      ease: "power1.inOut",
      scrub: true
    });

    /* SIDESCROLLER */
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=2000"
      }
    });

    /* IMAGE REVEAL */

    /* ADD IMAGEREVEAL */

    // check how to set animations inside horizontal scroll
    //ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});

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



    /* SCHWULES LICHT */
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
  }
}
</script>

<style>

.mainSection {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-height: 100vh;
  max-width: calc(100vw - (100vw / 6));
  margin: auto;
}

/* slider */

section {
  width: 100vw;
  height: 100vh;
  position: relative;
  will-change: transform;
}

.panel{
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - (100vw / 6));
  height: 70vh;
  margin: auto;
  margin-bottom: 5vh;
  text-align: center;
  line-height: 80px;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  will-change: transform;
  transform-origin: bottom;
}
.projectLeft{
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 500%;
  height: 80%;
  display: flex;
  flex-wrap: nowrap;
}
/*// content //*/


div.logos{
  position: absolute;
  bottom: 50px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-self: self-end;
  width: 100%;
}
div.logos img{
  object-fit: contain;
}

.headline{
  position: absolute;
  top:30px;
  left: 30px;
}
</style>
