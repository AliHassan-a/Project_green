<template>
  <div id="two" class="container">
    <BaseTitle class="m-hide horizontalHeader animateBlockHead" :align="'left'" :tag="'h2'" >Wir entwickeln innovative <br> Apps & Webseiten</BaseTitle>
    <section class="panel" v-for="(project, index) in projects" :style="index == 0 ? {marginLeft: '9.5vw'} : {}">
      <g-link :to="project.link" v-reload>
        <div class="box" :class="'box-' + (index + 1)" :style="{background: project.color}">
          <div class="projectLeft m-hide">
            <g-image :class="index == 0 ? 'animateBlockItem' : ''" :src="project.logo" :title="project.title" :alt="project.text"></g-image>
            <BaseTitle :class="index == 0 ? 'animateBlockItem' : ''" :tag="'h3'" class="defaultMarginY projectTitleAlign">{{ project.text }}</BaseTitle>
            <BaseButton :class="index == 0 ? 'animateBlockItem' : ''" :theme="'dark'" :title="'zum Projekt'"/>
          </div>
          <div class="projectRight m-hide">
            <g-image :title="project.title" :alt="project.text" :class="index == 0 ? 'animateBlockItem' : ''" :src="project.mockup"></g-image>
          </div>
          <div class="projectLeft md-hide">
            <g-image :src="project.logo" :title="project.title" :alt="project.text"></g-image>
            <BaseTitle :tag="'h3'" class="defaultMarginY projectTitleAlign">{{ project.text }}</BaseTitle>
            <BaseButton :theme="'dark'" :title="'zum Projekt'"/>
          </div>
          <div class="projectRight md-hide">
            <g-image :title="project.title" :alt="project.text" :src="project.mockup"></g-image>
          </div>
        </div>
      </g-link>
    </section>
  </div>
</template>

<script>
import BaseButton from "./BaseButton";
import BaseTitle from "./BaseTitle";

export default {
  components: {
    BaseTitle,
    BaseButton
  },
  data(){
    return {
      projects: [
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
      ]
    }
  },
  name: "ProjectSlider",
}
</script>

<style scoped>
  section {
    width: calc(75vw + 100px);
    height: 100vh;
    position: relative;
    will-change: transform;
  }
  .panel:first-child{
    margin-left: 9.5vw;
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
    width: 75vw;
    height: 70vh;
    margin: 0vh 50px 5vh 50px;
    text-align: center;
    border-radius: 20px;
    will-change: transform;
  }
  .projectLeft{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    padding: 5%;
  }
  .projectRight{
    width: 50%;
    padding: 5%;
  }
  .projectRight img{
    width: 100%;
    margin: auto;
  }
  .container {
    width: 500%;
    display: flex;
    flex-wrap: nowrap;
    margin: 10% 0%;
  }
  .horizontalHeader{
    position: absolute;
    left: 12.5vw;
    top: 10%;
  }
  .projectTitleAlign{
    text-align: left;
  }
  @media only screen and (max-width: 1024px){
    .container{
      flex-direction: column;
      margin: 25% 0%;
    }
    .projectTitleAlign{
      text-align: center;
      width: 80%;
    }
    .panel{
      margin-left: unset !important;
    }
    .box {
      display: flex;
      flex-direction: column;
      width: calc(100vw - (100vw / 10));
      margin: auto;
      height: unset;
      margin-bottom: 5vh;
      text-align: center;
    }
    section {
      width: 100vw;
      height: unset;
    }
    .projectLeft{
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 10% 5%;
    }
    .projectRight{
      width: 100%;
      padding: 10%;
    }
    .projectRight img{
      width: 80%;
      margin: auto;
    }
  }
</style>