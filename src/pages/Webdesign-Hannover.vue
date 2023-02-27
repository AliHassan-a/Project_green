<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="innerContentContainer head">
          <HoverSection :content="hoverSection" />
        </div>
      </div>
      <div id="two" class="mainSection section-two">
        <StickyProjects :projects="projectsMain" />
      </div>
      <div id="three" class="mainSection section-three">
        <div class="contentContainer">

        </div>
      </div>
      <div id="last" class="mainSection section-last">
        <div class="innerContentContainer">
          <BaseTitle :align="'left'" :tag="'h2'">Häufig gestellte Fragen</BaseTitle>
          <Dropdown :content="faq" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.innerContentContainer.head{
  justify-content: center;
  align-items: center;
}
.section-two{
  min-height: 0px;
  min-width: 100vw;
  margin: 100px 0px;
}

@media only screen and (max-width:1024px){
  .section-three .contentContainer{
    gap: 100px;
    flex-direction: column;
    min-width: unset;
  }
  .section-three .contentContainer div:first-child{
    width: 100%;
    min-width: unset;
  }
  .section-three .contentContainer div:nth-child(2){
    min-width: unset;
  }
}
</style>

<script>
import Dropdown from "../components/Dropdown";
import HoverSection from "../components/HoverSection"
import initGsap from "../misc/gsapBase";
import BaseTitle from "../components/BaseTitle";
import BaseButton from "../components/BaseButton";
import Slider from "../components/Slider";
import HeroTitle from "../components/HeroTitle";
import BaseText from "../components/BaseText";
import CustomerLogoGlider from "../components/CustomerLogoGlider";
import StickyProjects from "../components/StickyProjects";

export default {
  name: "Webdesign-Hannover",
  components: {
    CustomerLogoGlider,
    BaseText,
    HeroTitle,
    BaseButton,
    BaseTitle,
    Dropdown,
    HoverSection,
    Slider,
    StickyProjects,
  },
  data(){
    return {
      sliderImages: [
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
      ],
      projectsMain: [
        {
          title: "chartexperten",
          color: "#1A102E",
          text: "Web App & Branding für Chartexperten",
          hover: "Design & Strategie - Entwicklung",
          link: "/projekte/chartexperten",
          logo: require("@/assets/projects/chartexperten/chartexperten-logo.svg"),
          mockup: require("@/assets/projects/chartexperten/chartexperten-mockup.webp"),
        },
        {
          title: "Eintracht Hildesheim",
          color: "#406B2B",
          text: "Branding & Webdesign für Eintracht Hildesheim",
          hover: "Design & Strategie - Branding - Entwicklung",
          link: "/projekte/eintracht-hildesheim",
          logo: require("@/assets/projects/eintracht-hildesheim/eintracht-hildesheim-logo.svg"),
          mockup: require("@/assets/projects/eintracht-hildesheim/eintracht-hildesheim-mockup.webp"),
        },
        {
          title: "Kematherm",
          color: "#1A4C7D",
          text: "Performance + für Kematherm",
          hover: "Design & Strategie - Entwicklung",
          link: "/projekte/kematherm",
          logo: require("@/assets/projects/kematherm/kematherm-logo.svg"),
          mockup: require("@/assets/projects/kematherm/kematherm-mockup.webp"),
        },
        {
          title: "Schweizer Immobilienmanufaktur",
          color: "#000000",
          text: "Branding & Webdesign für die Schweizer Immobilienmanufaktur",
          hover: "Design & Strategie - Entwicklung",
          link: "/projekte/schweizer-immobilienmanufaktur",
          logo: require("@/assets/projects/schweizer-immobilienmanufaktur/schweizer-immobilienmanufaktur-logo.svg"),
          mockup: require("@/assets/projects/schweizer-immobilienmanufaktur/schweizer-immobilienmanufaktur-mockup.webp"),
        },
      ],
      steps: [
        {
          title: 'Strategie',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Strategie',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Strategie',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Strategie',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Strategie',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
      ],
      faq: [
        {
          title: "laaaaaaange lange lange lange Frage?",
          content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          title: "Frage?",
          content: "Content!",
        },
        {
          title: "laaaaaaange lange lange lange Frage?",
          content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          title: "Frage?",
          content: "Content!",
        },
        {
          title: "laaaaaaange lange lange lange Frage?",
          content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          title: "Frage?",
          content: "Content!",
        }
      ],
      hoverSection: [
        {
          title: "Laaaaaaange lange lange lange Frage?",
          icon: "",
          content: "kurze Antwort"
        },
        {
          title: "Laaaaaaange lange lange lange Frage?",
          icon: "",
          content: "kurze Antwort"
        },
        {
          title: "laaaaaaange lange lange lange Frage?",
          icon: "",
          content: "kurze Antwort"
        },
      ]
    }
  },
  mounted() {
    this.pageGsap = new initGsap({
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