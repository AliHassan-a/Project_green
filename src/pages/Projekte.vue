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
      </div>
      <div id="two" class="mainSection section-two">
        <StickyProjects :projects="projectsMain" />
      </div>
      <div id="three" class="mainSection section-three sectionMargin">
        <div class="innerContentContainer">
          <h2 class="animateBlockHead fullWidthInnerHead"> Weitere Projekte </h2>
          <ProjectsList :projects="projects" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BaseButton from "../components/BaseButton";
import BaseTitle from "../components/BaseTitle";
import initGsap from "../misc/gsapBase";
import HeroTitle from "../components/HeroTitle";
import BaseText from "../components/BaseText";
import ProjectsList from "../components/ProjectsList";
import StickyProjects from "../components/StickyProjects";

export default {
  components: {
    ProjectsList,
    StickyProjects,
    HeroTitle,
    BaseButton,
    BaseTitle,
    BaseText,
  },
  data() {
    return {
      hero: {
        mainTitle: "Für uns ist jedes",
        mainTitleSecond: "Projekt ein Grund,",
        secondTitle: "stolz zu sein"
      },
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
          text: "Webdesign & Marketing für Kematherm",
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
      projects: [
        {
          year: "2023",
          title: "Weedbeat",
          services: ["Strategie & Design", "Entwicklung", "Marketing"],
          link: "https://weedbeat.de",
        },
        {
          year: "2022",
          title: "Smacktalk",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://smacktalk.de",
        },
        {
          year: "2022",
          title: "Petersilien Marketing",
          services: ["Strategie & Design", "Entwicklung"],
          link: "",
        },
        {
          year: "2022",
          title: "Hilde Gastro",
          services: ["Strategie & Design", "Entwicklung", "Marketing"],
          link: "https://hilde-lieblingsort.de",
        },
        {
          year: "2022",
          title: "Emre Haustechnik",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://emre-haustechnik.de",
        },
        {
          year: "2022",
          title: "Kehr Gutachten",
          services: ["Strategie & Design", "Entwicklung", "Marketing"],
          link: "https://kehr-gutachten.de",
        },
        {
          year: "2022",
          title: "Wohlwerq",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://wohlwerq31.de",
        },
        {
          year: "2022",
          title: "TV Plus",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://tv-plus.de",
        },
        {
          year: "2022",
          title: "Mondrowski",
          services: ["Strategie & Design", "Entwicklung", "Marketing"],
          link: "https://praxis-mondrowski.de",
        },
        {
          year: "2022",
          title: "Jerena Buse",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://deins.de",
        },
        {
          year: "2022",
          title: "HC Eintracht Hildesheim",
          services: ["Strategie & Design", "Entwicklung", "Marketing"],
          link: "https://hceintracht-hildesheim.de/",
        },
        {
          year: "2021",
          title: "Clazz",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://clazz.de",
        },
        {
          year: "2021",
          title: "Stadtmagazin Public",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://stadtmagazin-public.de/",
        },
        {
          year: "2021",
          title: "Mitunsdigital",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://digitalzentrum-hannover.de",
        },
        {
          year: "2021",
          title: "Ikalu",
          services: ["Entwicklung"],
          link: "https://ikalu.de/",
        },
        {
          year: "2021",
          title: "Welcome Center Region Hildesheim",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://www.welcome-center-hildesheim.de/",
        },
        {
          year: "2021",
          title: "Villa Seligmann",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://villa-seligmann.de/",
        },
        {
          year: "2021",
          title: "SG-Med (Axel Richter)",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://sg-med.de/",
        },
        {
          year: "2021",
          title: "Ardechereisen",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://ardechereisen.de/",
        },
        {
          year: "2021",
          title: "Universität Hildesheim",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://uni-hildesheim.de/deinprojekt",
        },
        {
          year: "2021",
          title: "Kematherm",
          services: ["Strategie & Design", "Entwicklung", "Marketing"],
          link: "brandschutzdaemmung.de",
        },
        {
          year: "2021",
          title: "Zahnarztpraxis Blumenberg",
          services: ["Strategie & Design", "Entwicklung"],
          link: "https://zahnarzt-blumenberg.de/ ",
        },
      ]
    }
  },
  mounted() {
    this.pageGsap = new initGsap({
      heroAnimation: true,
    }, this);
  },
  metaInfo() {
    return {
      title: "Projekte",
      meta: [
        { name: 'title', content: "Designagentur" },
        { name: 'description', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'og:title', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'og:description', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'twitter:title', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'twitter:description', content: "Strategie & Marketing - Entwicklung - Performance" },
      ]
    }
  }
}
</script>

<style scoped>
.section-two{
  margin-top: -300px;
}
.section-three{
  max-width: 100%;
  min-height: unset;
  padding: 100px 0px;
}
@media only screen and (max-width: 1024px){
  .section-two{
    margin-top: -200px;
  }
  .section-three{
    max-width: 100%;
    min-height: unset;
    padding: 0px 0px;
  }
}
</style>

