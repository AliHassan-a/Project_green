<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="contentContainer">
          <HeroTitle
              :main-title="hero.mainTitle"
              :main-title-second="hero.mainTitleSecond"
              :second-title="hero.secondTitle" />
        </div>
        <CustomerLogoGlider/>
      </div>
      <!-- PROJECTS SLIDER -->
      <ProjectSlider style="margin-top: 100px"/>
      <StickyImages />
      <div id="four" class="section-four">
        <Quote></Quote>
      </div>
      <div id="five" class="mainSection section-five sectionMargin">
        <div class="innerContentContainer">
          <Service />
        </div>
      </div>
      <div id="six" class="mainSection section-six">
        <h2 class="animateBlockHead" style="margin-bottom: 60px;"> Was unsere Kunden sagen </h2>
        <Slider :slideContent="testimonialsContent" :hasNumber="false" :hasTestimonial="true" class="animateBlockItem" />
      </div>
    </div>
  </Layout>
</template>

<script>
import BaseButton from "../components/BaseButton";
import BaseTitle from "../components/BaseTitle";
import ProjectSlider from "../components/ProjectSlider";
import BlogSlider from "../components/BlogSlider";
import Seperator from "../components/Seperator";
import CustomerLogoGlider from "../components/CustomerLogoGlider";
import initGsap from "../misc/gsapBase";
import HeroTitle from "../components/HeroTitle";
import StickyImages from "../components/StickyImages";
import Service from "../components/Service";
import Quote from "../components/Quote";
import Slider from "../components/Slider";

export default {
  components: {
    Quote,
    Service,
    StickyImages,
    HeroTitle,
    BaseButton,
    BaseTitle,
    Seperator,
    ProjectSlider,
    BlogSlider,
    CustomerLogoGlider,
    Slider,
  },
  data() {
    return {
      hero: {
        mainTitle: "Wir sorgen dafür, dass dein",
        mainTitleSecond: "Unternehmen gehört wird",
        secondTitle: "Laut & deutlich"
      },
      testimonialsContent: [
        {
          description: "Weißt dus? Weißt dus? Weißt du es?",
          testimonialAuthor: "Celin",
          testimonialPosition: "Netto Dauerkunde"
        },
        {
          description: "Weißt dus? Weißt dus? Weißt du es?",
          testimonialAuthor: "Celin",
          testimonialPosition: "Netto Dauerkunde"
        },
        {
          description: "Weißt dus? Weißt dus? Weißt du es?",
          testimonialAuthor: "Celin",
          testimonialPosition: "Netto Dauerkunde"
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
      sideScroller: true,
      stickyImages: true,
      heroAnimation: true,
      logosGlider: true,
      quote: true,
    }, this);
  }
}
</script>

<style>
/*// content //*/
.section-five, .section-six{
  max-width: 100%;
}

</style>

