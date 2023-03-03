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
      projects: [
        {
          year: "2022",
          title: "Kehr Gutachten",
          services: ["Webdesign", "SEO"],
          link: "https://kehr-gutachten.de/",
        },
        {
          year: "2022",
          title: "Schweizer Immobilienmanufaktur",
          services: ["Webdesign", "Brandingdesign"],
          link: "https://schweizer-immobilienmanufaktur.de/",
        },
        {
          year: "2022",
          title: "Jurgeit Immobilien",
          services: ["Webdesign"],
          link: "",
        },
        {
          year: "2022",
          title: "Schweizer Immobilienmanufaktur",
          services: ["Webdesign", "Brandingdesign"],
          link: "https://schweizer-immobilienmanufaktur.de/",
        },
        {
          year: "2021",
          title: "Ikalu",
          services: ["Webdesign"],
          link: "https://schweizer-immobilienmanufaktur.de/",
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

