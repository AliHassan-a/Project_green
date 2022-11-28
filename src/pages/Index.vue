<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="contentContainer">
          <div class="innerContentContainer">
            <h2 class="animateFadeInLeft">Wir sorgen dafür, dass dein</h2>
            <h2 class="animateFadeInLeft" style="margin-left: -5px;">&nbsp;&nbsp;&nbsp;Unternehmen gehört wird</h2>
            <h2 class="animateFadeInLeftSecond greenColor" style="text-align: left;"><b>Laut & deutlich</b></h2>
            <g-image style="margin-top: 20px;" class="animateFadeInLeftThird" src="@/assets/Pfeile.svg"></g-image>
            <baseButton style="margin-left: 20%;" class="animateFadeInLeftThird" :theme="''" :title="'Mehr erfahren'" :linkTo="'kontakt'" :toDark="false"></baseButton>
          </div>
          <div class="innerContentContainer md-hide">
            <g-image class="animateFadeInUpSecond" style="max-width: 180%; position: absolute; top: -205%; right: -85%;" src="@/assets/Mesh-Shape-grnstn.png"></g-image>
          </div>
        </div>
        <div class="logosSection animateFadeInUp">
          <div style="width: 100%; opacity: 0.6">
            <hr class="animateFadeInUp" style="height: 2px; border: 0; outline: 0px; background: lightgrey;" />
          </div>
          <div class="contentContainer">
            <p style="font-size: 14px; color: #e7ffd3">UNTERNEHMEN, DIE<br>GERNE MIT UNS ARBEITEN</p>
            <g-image class="logo" src="@/assets/chartexperten-logo.png"></g-image>
            <g-image class="logo" src="@/assets/kematherm-logo.png"></g-image>
            <g-image class="logo" src="@/assets/helo-logo.png"></g-image>
            <g-image class="logo" src="@/assets/mdz-logo.png"></g-image>
            <g-image class="logo" src="@/assets/uhrig-logo.png"></g-image>
          </div>
        </div>
      </div>
      <!-- PROJECTS SLIDER -->
      <ProjectSlider/>
      <div id="three" class="mainSection section-three">
        <div class="pinnedContainerWrapper">
          <div class="pinnedContainer">
            <h2> Designer, Programmierer </h2>
            <h2> Marketing-Experten </h2>
            <h2 class="greenColor" style="text-align: left;"><b>Freunde</b></h2>
            <g-image class="" style="margin-top: 20px;" src="@/assets/Pfeile.svg"></g-image>
          </div>
          <div style="width: 100%; display: flex; flex-direction:column;">
            <g-image class="whirlImage" style="margin-top: 30%;" src="@/assets/praktis1.png"></g-image>
            <g-image class="whirlImage" style="margin-top: -70px; margin-left: 50%;" src="@/assets/praktis2.png"></g-image>
          </div>
        </div>
        <div style="width: 100%; display: flex; flex-direction:column;">
          <g-image class="whirlImage" style="margin-top: 0%;" src="@/assets/praktis1.png"></g-image>
          <g-image class="whirlImage" style="margin-top: -370px; margin-left: 60%;" src="@/assets/praktis2.png"></g-image>
          <g-image class="whirlImage" style="margin-top: 0%;" src="@/assets/developer.png"></g-image>
          <g-image class="whirlImage" style="margin-top: -70px; margin-left: 50%;" src="@/assets/3guys.png"></g-image>
        </div>
      </div>
      <div id="four" class="section-four">
        <div style="background: black; width: calc(100% - 100%/6); padding: 10%;">
          <g-image class="animateFadeInUp" style="margin-top: -350px;" src="@/assets/zitat.png"></g-image>
          <h2 class="animateFadeInUp"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
          <hr class="animateFadeInUp greenBg" style="margin-top: 100px; width: 244px; height: 4px; border: 0; outline: 0px; opacity: 0; display: inline-block;" />
          <h2 class="animateFadeInUp"><b>Rene Grebenstein</b> </h2>
          <p class="animateFadeInUp greenColor" style="font-size: 32px;"> Inhaber </p>
        </div>
      </div>
      <div id="five" class="mainSection section-five sectionMargin">
        <div class="innerContentContainer">
          <h2 class="animateFadeInLeft" style="margin-bottom: 60px;"> Unsere Leistungen </h2>
          <div class="lineWrapper">
            <hr class="line animateFadeInUp" />
          </div>
          <div class="leistungWrapper animateFadeInUp">
            <g-image src="@/assets/design_strategie_icon.png"></g-image>
            <h3 class="w-full">Design & Strategie</h3>
            <baseButton :title="'Mehr erfahren'" :linkTo="'kontakt'" :toDark="false"></baseButton>
          </div>
          <div class="lineWrapper">
            <hr class="line animateFadeInUp" />
          </div>
          <div class="leistungWrapper animateFadeInUp">
            <g-image src="@/assets/entwicklung_icon.png"></g-image>
            <h2 class="w-full">Entwicklung</h2>
            <baseButton :title="'Mehr erfahren'" :linkTo="'kontakt'" :toDark="false"></baseButton>
          </div>
          <div class="lineWrapper">
            <hr class="line animateFadeInUp" />
          </div>
          <div class="leistungWrapper animateFadeInUp">
            <g-image src="@/assets/marketing_icon.png"></g-image>
            <h2 class="w-full">Marketing</h2>
            <baseButton :title="'Mehr erfahren'" :linkTo="'kontakt'" :toDark="false"></baseButton>
          </div>
          <div class="lineWrapper">
            <hr class="line animateFadeInUp" />
          </div>
        </div>
      </div>
      <div id="six" class="mainSection section-six">
        <testimonials />
      </div>
      <Footer />
    </div>
  </Layout>
</template>

<script>

import { gsap, ScrollTrigger, ScrollSmoother } from "gsap/all";
import BaseButton from "../components/BaseButton";
import ProjectSlider from "../components/ProjectSlider";
import Testimonials from "../components/testimonials";
import Footer from "../components/Footer";


export default {
  components: {
    Testimonials,
    ProjectSlider,
    BaseButton,
    Footer,
  },
  data() {
    return {
      gsapPage: null,
      sideScroller: null,
      mouseDirection: null,
    }
  },
  beforeDestroy(){
    this.sideScroller.kill();
    this.stickySection.kill();
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
        let sections = gsap.utils.toArray(".panel");
        this.sideScroller = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 0.1,
            end: "+=3000"
          }
        });
        gsap.fromTo(".container", {
          opacity: 0,
          translateY: 40,
        },{
          opacity: 1,
          translateY: 0,
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: ".container",
            scrub: true,
            start: "start 50%",
            end: "start 30%"
          }
        });
        gsap.to(".horizontalHeader h2", {
          opacity: 0,
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: ".box-3",
            containerAnimation: this.sideScroller,
            scrub: 1,
            start: "start 30%",
            end: "start 10%"
          }
        });
        gsap.to(".horizontalHeader", {
          opacity: 1,
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: ".box-1",
            scrub: true,
            start: "start 100%",
            end: "start 90%"
          }
        });
        /* STICKY SECTION /w images */
        this.stickySection = gsap.to(".pinnedContainer", {
          opacity: 0,
          ease: "none", // <-- IMPORTANT!
          scrollTrigger: {
            trigger: ".pinnedContainer",
            pin: true,
            scrub: 1,
          }
        });

        let whirlImages = gsap.utils.toArray(".whirlImage");
        whirlImages.forEach((whirlImage) => {
          gsap.to(whirlImage, {
            opacity: 0,
            scrollTrigger: {
              trigger: whirlImage,
              start: "-=100",
              pin: true,
              scrub: 1,
            }
          })
        })
      },
      "(max-width: 1024px)": () => {
      },
      "all": () => {

      }
    });

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
  }
}
</script>

<style>

/*logos section*/
.logosSection{
  position: absolute;
  width: 100%;
  bottom: 50px;
}
.logosSection .contentContainer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/*// content //*/
.pinnedContainerWrapper{
  display: flex;
  width: 100%;
}

.pinnedContainer{
  position: relative;
  top:0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transform-origin: left;
}

div.logos img{
  object-fit: contain;
}
.whirlImage{
  transform-origin: top;
  will-change: transform;
}

.leistungWrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 30px 0px;
}
.leistungWrapper img{
  object-fit: contain;
  width: 82px;
}
.leistungWrapper base-button{
  justify-content: flex-end;
}

.lineWrapper{
  width: 100%;
  opacity: 0.6;
}
.line{
  height: 2px;
  border: 0;
  outline: 0px;
  background: lightgrey;
}

/* RESPONSIVE */

@media only screen and (max-width: 1024px) {
  .logosSection{
    position: relative;
    margin-top: 100px;
  }
  .logosSection .contentContainer{
    flex-direction: column;
  }
  .leistungWrapper{
    flex-direction: column;
  }
  div.footerWrapper{
    padding: 0px;
  }
}
</style>
