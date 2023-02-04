<template>
  <div id="two" class="container section-two">
    <BaseTitle class="horizontalHeader animateBlockHead" :align="'left'" :tag="'h2'" >Wir entwickeln innovative <br> Apps & Webseiten</BaseTitle>
    <section class="panel" v-for="(project, index) in projects">
      <g-link :to="project.link">
        <div class="box toLinkHover" :class="'box-' + (index + 1)" :style="{background: project.color}" :gs-hover="project.hover">
          <div class="projectLeft">
            <img :src="project.logo"/>
            <BaseTitle :align="'left'" :tag="'h3'" class="defaultMarginY">{{ project.text }}</BaseTitle>
            <BaseButton :theme="'dark'" :title="'zum Projekt'"/>
          </div>
          <div class="projectRight">
            <img style="width: 100%" :src="project.mockup"/>
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
          mockup: require("@/assets/projects/chartexperten/chartexperten-mockup.svg"),
        },
        {
          title: "Uhrigstore",
          color: "#1F0E03",
          text: "Neuer Webshop für Uhrigstore",
          hover: "Design - Entwicklung",
          link: "/projekte/uhrigstore",
          logo: require("@/assets/projects/uhrigstore/uhrigstore-logo.svg"),
          mockup: require("@/assets/projects/uhrigstore/uhrigstore-mockup.svg"),
        },
        {
          title: "Kematherm",
          color: "#1A4C7D",
          text: "Performance + für Kematherm",
          hover: "Design & Strategie - Entwicklung",
          link: "/projekte/kematherm",
          logo: require("@/assets/projects/kematherm/kematherm-logo.svg"),
          mockup: require("@/assets/projects/kematherm/kematherm-mockup.svg"),
        },
      ]
    }
  },
  name: "ProjectSlider",
}
</script>

<style scoped>
  section {
    width: 100vw;
    height: 100vh;
    position: relative;
    will-change: transform;
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
    width: calc(100vw - (100vw / 4));
    height: 70vh;
    margin: auto;
    margin-bottom: 5vh;
    text-align: center;
    border-radius: 8px;
    color: white;
    font-weight: 700;
    will-change: transform;
    transition: opacity 0.3s;
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
  @media only screen and (max-width: 1024px){
    .container{
      flex-direction: column;
    }
    .box{
      height: 90vh;
    }
  }
</style>