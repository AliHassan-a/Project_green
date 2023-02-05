<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="contentContainer">
          <HeroTitle
              :main-title="hero.mainTitle"
              :second-title="hero.secondTitle" />
        </div>
      </div>
      <!-- PROJECTS SLIDER -->
      <ProjectSlider style="margin-top: 100px"/>
      <StickyImages />
      <div id="four" class="section-four">
        <div class="quote">
          <g-image src="@/assets/zitat.png"></g-image>
          <h2 class="animateBlockText"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
          <hr class="animateBlockItem greenBg" style="margin-top: 100px; width: 244px; height: 4px; border: 0; outline: 0px; opacity: 0; display: inline-block;" />
          <h2 class="animateBlockHead"><b>Rene Grebenstein</b> </h2>
          <p class="animateBlockHead greenColor" style="font-size: 32px;"> Inhaber </p>
        </div>
      </div>
      <div id="five" class="mainSection section-five sectionMargin">
        <div class="innerContentContainer">
          <h2 class="animateBlockHead" style="margin-bottom: 60px;"> Unsere Leistungen </h2>
          <div class="animateBlockItem w-full">
            <Seperator theme="light"></Seperator>
            <div class="leistungWrapper">
              <g-image src="@/assets/design_strategie_icon.png"></g-image>
              <h3 class="w-full leistungText">Design & Strategie</h3>
              <baseButton :link-to="'design-strategie'" :theme="'more'" :title="'Mehr erfahren'"/>
            </div>
            <Seperator theme="light"></Seperator>
          </div>
          <div class="animateBlockItem w-full">
            <div class="leistungWrapper">
              <g-image src="@/assets/entwicklung_icon.png"></g-image>
              <h3 class="w-full leistungText">Entwicklung</h3>
              <baseButton :link-to="'entwicklung'" :theme="'more'" :title="'Mehr erfahren'"/>
            </div>
            <Seperator theme="light"></Seperator>
          </div>
          <div class="animateBlockItem w-full">
            <div class="leistungWrapper">
              <g-image src="@/assets/marketing_icon.png"></g-image>
              <h3 class="w-full leistungText">Marketing</h3>
              <baseButton :link-to="'marketing'" :theme="'more'" :title="'Mehr erfahren'"/>
            </div>
            <Seperator theme="light"></Seperator>
          </div>

        </div>
      </div>
      <div id="six" class="mainSection section-six">
        <h2 class="animateBlockHead" style="margin-bottom: 60px;"> Was unsere Kunden sagen </h2>
        <testimonials :content="testimonialsContent" />
      </div>
    </div>
  </Layout>
</template>

<script>
import BaseButton from "../components/BaseButton";
import BaseTitle from "../components/BaseTitle";
import ProjectSlider from "../components/ProjectSlider";
import BlogSlider from "../components/BlogSlider";
import Testimonials from "../components/SimpleSlider";
import Seperator from "../components/Seperator";
import CustomerLogoGlider from "../components/CustomerLogoGlider";
import initGsap from "../misc/gsapBase";
import HeroTitle from "../components/HeroTitle";
import StickyImages from "../components/StickyImages";

export default {
  components: {
    StickyImages,
    HeroTitle,
    BaseButton,
    BaseTitle,
    Seperator,
    Testimonials,
    ProjectSlider,
    BlogSlider,
    CustomerLogoGlider,
  },
  data() {
    return {
      hero: {
        mainTitle: "Wir sorgen dafür, dass dein Unternehmen gehört wird.",
        secondTitle: "Laut & deutlich"
      },
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
      ],
      pageGsap: null,
    }
  },
  beforeDestroy() {
    this.pageGsap.killGsap();
  },
  mounted() {
    this.pageGsap = new initGsap({
      sideScroller:true,
      stickyImages: true,
      heroAnimation: true,
    }, this);
  }
}
</script>

<style>
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

