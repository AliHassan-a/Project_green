<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="contentContainer">
          <HeroTitle
              :has-ani="true"
              :main-title="hero.mainTitle"
              :main-title-second="hero.mainTitleSecond"
              :second-title="hero.secondTitle" />
        </div>
        <CustomerLogoGlider/>
      </div>
      <!-- PROJECTS SLIDER -->
      <ProjectSlider/>
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
          description: "Zuverlässig und gute Leistung." +
              "Die Greenstein Agentur kam Kundenwünsche sofort nach, auch die Zusammenarbeit und Absprache verläuft schnell und reibungslos. Mit der Arbeit sind wir sehr zufrieden",
          testimonialAuthor: "Martin Berner",
          testimonialPosition: "KFz-Sachverständigenbüro Berner GmbH"
        },
        {
          description: "Nettes und hilfreiches Team. Sie hatten stets ein offenes Ohr für meine Fragen und Wünsche, auch außerhalb der Geschäftszeiten (teilweise sogar aus dem Urlaub heraus). Meine Homepage ist sehr gelungen.\n" +
              "Weiter so!",
          testimonialAuthor: "Lauritz Singelmann",
          testimonialPosition: "SGL-Immobilien GmbH"
        },
        {
          description: "Vielen Dank für die kompetente Arbeit an meiner Homepage. Ich habe mich sehr gut beraten und betreut gefühlt. Sehr empfehlenswert!",
          testimonialAuthor: "Dr. Tamara Thomsen\n",
          testimonialPosition: "Coaching | Beratung | Sportpsychologie"
        },
        {
          description: "Vielen Dank für die kompetente Arbeit an meiner Homepage. Ich habe mich sehr gut beraten und betreut gefühlt. Sehr empfehlenswert!",
          testimonialAuthor: "Dr. Tamara Thomsen\n",
          testimonialPosition: "Coaching | Beratung | Sportpsychologie"
        },
        {
          description: "Vielen Dank für die kompetente Arbeit an meiner Homepage. Ich habe mich sehr gut beraten und betreut gefühlt. Sehr empfehlenswert!",
          testimonialAuthor: "Dr. Tamara Thomsen\n",
          testimonialPosition: "Coaching | Beratung | Sportpsychologie"
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
      singleQuote: true,
      marquee: true,
    }, this);
  },
  metaInfo() {
    return {
      title: "greenstein.design",
      meta: [
        { name: 'title', content: "Designagentur" },
        { name: 'description', content: "Strategie & Marketing - Entwicklung - Performance" },
      ]
    }
  }
}
</script>

<style>
/*// content //*/
.section-one{
  margin-top: 300px !important;
  min-height: calc(100vh - 300px);
  justify-content: space-between;
}
.section-five, .section-six{
  max-width: 100%;
  min-height: unset;
  padding: 200px 0px;
}
@media only screen and (max-width:1024px){
  .section-one{
    margin-top: 100px !important;
    min-height: calc(100vh - 100px);
  }
  .section-five, .section-six{
    max-width: 100%;
    min-height: unset;
    padding: 100px 0px;
  }
}

</style>

