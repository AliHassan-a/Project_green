<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="contentContainer">
          <div class="innerContentContainer">
            <h2 class="animateFadeInLeftSecond headerFont">Wir sorgen dafür, dass dein</h2>
            <h2 class="animateFadeInLeftSecond headerFont" style="margin-left: -5px;">&nbsp;&nbsp;&nbsp;Unternehmen gehört wird</h2>
            <h2 class="animateFadeInLeftThird headerFont greenColor" style="text-align: left;"><b>Laut & deutlich</b></h2>
            <div class="contentContainer">
              <g-image style="margin-top: 20px; width: 100px;" class="animateFadeInLeftThird" src="@/assets/Pfeile.svg"></g-image>
              <baseButton :theme="'more'" :link-to="'blog/hanspeter'" title="Mehr erfahren" class="animateFadeInLeftThird toLinkHover" gs-hover="Jetzt lauter werden!" style="margin-left: 50px; margin-top:20px" />
            </div>
          </div>
        </div>
        <div class="logosSection animateFadeInUp">
          <div style="width: 100%; opacity: 0.6">
            <hr class="animateFadeInUp" style="height: 2px; border: 0; outline: 0px; background: lightgrey; margin-bottom: 30px;" />
          </div>
          <div class="contentContainer">
            <p class="logosText m-hide">UNTERNEHMEN, DIE<br>GERNE MIT UNS ARBEITEN</p>
            <p class="logosText md-hide">UNTERNEHMEN, DIE GERNE MIT UNS ARBEITEN</p>
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
            <div class="toLinkHover" gs-hover="Was grnstn so!? &nbsp;&nbsp; Wanna be friends?">
              <h2> Designer, Programmierer </h2>
              <h2> Marketing-Experten </h2>
              <h2 class="greenColor" style="text-align: left;"><b>Freunde</b></h2>
              <g-image class="" style="margin-top: 20px;" src="@/assets/Pfeile.svg"></g-image>
            </div>
          </div>
          <div class="m-hide" style="width: 100%; display: flex; flex-direction:column;">
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
        <div class="quote">
          <g-image class="animateFadeInUp" src="@/assets/zitat.png"></g-image>
          <h2 class="animateFadeInUp"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
          <hr class="animateFadeInUp greenBg" style="margin-top: 100px; width: 244px; height: 4px; border: 0; outline: 0px; opacity: 0; display: inline-block;" />
          <h2 class="animateFadeInUp"><b>Rene Grebenstein</b> </h2>
          <p class="animateFadeInUp greenColor" style="font-size: 32px;"> Inhaber </p>
        </div>
      </div>
      <div id="five" class="mainSection section-five sectionMargin">
        <div class="innerContentContainer">
          <h2 class="animateFadeInLeft" style="margin-bottom: 60px;"> Unsere Leistungen </h2>
          <Seperator theme="light"></Seperator>
          <div class="leistungWrapper animateFadeInUp toLinkHover" gs-hover="asdasdasdasdasd" >
            <g-image src="@/assets/design_strategie_icon.png"></g-image>
            <h3 class="w-full leistungText">Design & Strategie</h3>
            <baseButton :link-to="'design-strategie'" :theme="'more'" :title="'Mehr erfahren'"/>
          </div>
          <Seperator theme="light"></Seperator>
          <div class="leistungWrapper animateFadeInUp">
            <g-image src="@/assets/entwicklung_icon.png"></g-image>
            <h3 class="w-full leistungText">Entwicklung</h3>
            <baseButton :link-to="'entwicklung'" :theme="'more'" :title="'Mehr erfahren'"/>
          </div>
          <Seperator theme="light"></Seperator>
          <div class="leistungWrapper animateFadeInUp">
            <g-image src="@/assets/marketing_icon.png"></g-image>
            <h3 class="w-full leistungText">Marketing</h3>
            <baseButton :link-to="'marketing'" :theme="'more'" :title="'Mehr erfahren'"/>
          </div>
          <Seperator theme="light"></Seperator>
        </div>
      </div>
      <div id="six" class="mainSection section-six">
        <h2 class="animateFadeInLeft" style="margin-bottom: 60px;"> Was unsere Kunden sagen </h2>
        <testimonials :content="testimonialsContent" />
      </div>
      <div id="seven" class="mainSection section-seven">
        <h2 class="animateFadeInLeft" style="margin-bottom: 60px;"> Greenstein Blog </h2>
        <BlogSlider/>
      </div>
      <Footer />
    </div>
  </Layout>
</template>

<script>

import { gsap, ScrollTrigger, ScrollSmoother } from "gsap/all";
import BaseButton from "../components/BaseButton";
import ProjectSlider from "../components/ProjectSlider";
import BlogSlider from "../components/BlogSlider";
import Testimonials from "../components/SimpleSlider";
import Footer from "../components/Footer";
import Seperator from "../components/Seperator";

export default {
  components: {
    Seperator,
    Testimonials,
    ProjectSlider,
    BlogSlider,
    BaseButton,
    Footer,
  },
  data() {
    return {
      gsapPage: null,
      sideScroller: null,
      mouseDirection: null,
      testimonialsContent: [
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        }
      ],
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
            end: "+=3000",
            invalidateOnRefresh: true,
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
            invalidateOnRefresh: true,
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
      },
      "(max-width: 1024px)": () => {
      },
      "all": () => {
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
    });
  }
}
</script>

<style>

/*logos section*/
.logosSection{
  position: absolute;
  width: 100%;
  bottom: 60px;
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
.logosText{
  font-size: 14px;
  color: #e7ffd3;
}

.whirlImage{
  transform-origin: top;
  will-change: transform;
}

.quote{
  background: black;
  width: calc(100% - 100%/6);
  padding: 10%;
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
  .pinnedContainer{
    margin-top: -50%;
  }
  .leistungWrapper{
    flex-direction: column;
  }
  .leistungText{
    text-align: center;
  }
  div.footerWrapper{
    padding: 0px;
  }
}
</style>

