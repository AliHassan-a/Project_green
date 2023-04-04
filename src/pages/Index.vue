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
        <CustomerLogoGlider class="animateBlockHead"/>
      </div>
      <!-- PROJECTS SLIDER -->
      <ProjectSlider/>
      <StickyImages :imageSet="'index'" />
      <div id="four" class="section-four">
        <Quote></Quote>
      </div>
      <div id="five" class="mainSection section-five sectionMargin">
        <div class="innerContentContainer">
          <h2 class="animateBlockHead fullWidthInnerHead"> Unsere Leistungen </h2>
          <Service />
        </div>
      </div>
      <div id="six" class="mainSection section-six">
        <div class="innerContentContainer">
          <h2 class="animateBlockHead fullWidthInnerHead"> Was unsere Kunden sagen </h2>
          <SliderIndex>
            <div class="box testimonials blackBg" v-for="(slide, index, key) in testimonialsContent" :key="key">
              <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.title}}</b></BaseTitle>
              <BaseText :addStyle="'white-space: normal'">{{slide.description}}</BaseText>
              <div class="testimonial">
                <hr class="testimonialBorder">
                <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.testimonialAuthor}}</b></BaseTitle>
                <BaseText :addStyle="'white-space: normal'" :addClass="'greenColor'">{{slide.testimonialPosition}}</BaseText>
              </div>
            </div>
          </SliderIndex>
        </div>
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
import SliderIndex from "../components/SliderIndex";
import BaseText from "../components/BaseText";

export default {
  components: {
    Quote,
    Service,
    StickyImages,
    HeroTitle,
    BaseText,
    BaseButton,
    BaseTitle,
    Seperator,
    ProjectSlider,
    BlogSlider,
    CustomerLogoGlider,
    SliderIndex,
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
          description: "Die Greenstein Designagentur hat in kurzen Zeit für uns eine professionelle Webseite auf die Beine gestellt. Wir sagen Danke für die hervorragende Arbeit und freuen uns auf die nächsten Projekte.",
          testimonialAuthor: "Martin Güse",
          testimonialPosition: "Güse GmbH"
        },
        {
          description: "Wir sind sehr zufrieden mit dem Resultat. Absolut empfehlenswert. Sehr kompetent, kreativ und gleichzeitig ein positiver, wertschätzender Umgang.",
          testimonialAuthor: "Omar Fahmy",
          testimonialPosition: "FuNah e.V."
        },
        {
          description: "Ich bin seit Jahren mit mehrern Firmen hier in Betreuung. Von der  Homepage Erstellung, Shop Einrichtung bis hin zu Hosting und kompletter Cooperate Identity. Immer sehr fair und zeitnah beraten worden.",
          testimonialAuthor: "Manuel Uhrig",
          testimonialPosition: "Uhrigstore"
        }
      ],
    }
  },
  mounted() {
    if (initGsap != false){
      new initGsap({
        sideScroller: true,
        stickyImages: true,
        heroAnimation: true,
        logosGlider: true,
        singleQuote: true,
        marquee: true,
      }, this);
    }
  },
  metaInfo() {
    return {
      title: "Werbeagentur Hildesheim",
      meta: [
        { name: 'title', content: "Werbeagentur Hildesheim | Greenstein Designagentur" },
        { name: 'description', content: "Designagentur & Werbeagentur Hildesheim: Wir erstellen Webseiten und Kampagnen für KMU's & Behörden. Nachhaltig✅ Vor Ort✅ Kostenloses Angebot" },
        { name: 'og:title', content: "Werbeagentur Hildesheim | Greenstein Designagentur" },
        { name: 'og:description', content: "Designagentur & Werbeagentur Hildesheim: Wir erstellen Webseiten und Kampagnen für KMU's & Behörden. Nachhaltig✅ Vor Ort✅ Kostenloses Angebot" },
        { name: 'twitter:title', content: "Werbeagentur Hildesheim | Greenstein Designagentur" },
        { name: 'twitter:description', content: "Designagentur & Werbeagentur Hildesheim: Wir erstellen Webseiten und Kampagnen für KMU's & Behörden. Nachhaltig✅ Vor Ort✅ Kostenloses Angebot" },
      ],
      script: [
        { innerHTML: '{' +
              '"@context":"https://schema.org/",' +
              '"@type":"Product",' +
              '"name":"Greenstein Designagentur",' +
              '"description":"Branding, Entwicklung, Strategie",' +
              '"aggregateRating":' +
                '{"@type":"AggregateRating","reviewCount":56,"ratingValue":4.95,"bestRating":5,"worstRating":1}' +
              '}',
          type: 'application/ld+json' }
      ]
    }
  }
}
</script>

<style scoped>
.section-five, .section-six{
  max-width: 100%;
  min-height: unset;
}
.section-five{
  padding: 200px 0px;
}
@media only screen and (max-width:1024px){
  .section-five{
    padding: 100px 0px 50px;
  }
  .section-six{
    padding: 0px 0px 100px;
  }
}

</style>

