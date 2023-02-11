<template>
  <Layout>
    <div id="page" class="site">
      <div class="heroWrapper stepsIntroAnimation">
        <HeroTitle
            :main-title="hero.mainTitle"
            :main-title-second="hero.mainTitleSecond"
            :second-title="hero.secondTitle" />
      </div>
      <div id="one" class="container section-one">
        <section class="panel" v-for="(step, index) in steps">
            <div class="box introBox" v-if="index == 0">
            </div>
            <div v-else class="box" style="background: black" :class="'box-' + (index + 1)">
              <g-image class="stepImage stepContentAnimation" :src="step.image"></g-image>
              <div class="stepLeft stepDescriptionAnimation">
                <BaseTitle :tag="'h2'"><b class="greenColor" style="font-weight: 800">{{ index+1 }}.</b>&nbsp;<b>{{  step.title }}</b></BaseTitle>
              </div>
              <div class="stepRight stepDescriptionAnimation">
                <BaseText>{{ step.text }}</BaseText>
              </div>
            </div>
        </section>
      </div>
      <div id="three" class="mainSection section-three greenBg">
        <div class="contentContainer">
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
import BaseText from "../components/BaseText";

export default {
  components: {
    StickyImages,
    HeroTitle,
    BaseButton,
    BaseTitle,
    BaseText,
    Seperator,
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
      steps: [
        {
          title: "Auswertung",
          text: "Mi bibendum neque egestas congue quisque egestas diam in. Porta non pulvinar neque laoreet. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Turpis egestas integer eget aliquet. Diam volutpat commodo sed egestas egestas. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. ",
          image: require("@/assets/projects/chartexperten/chartexperten-mockup.svg"),
        },
        {
          title: "Auswertung",
          text: "Mi bibendum neque egestas congue quisque egestas diam in. Porta non pulvinar neque laoreet. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Turpis egestas integer eget aliquet. Diam volutpat commodo sed egestas egestas. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. ",
          image: require("@/assets/projects/chartexperten/chartexperten-mockup.svg"),
        },
        {
          title: "Auswertung",
          text: "Mi bibendum neque egestas congue quisque egestas diam in. Porta non pulvinar neque laoreet. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Turpis egestas integer eget aliquet. Diam volutpat commodo sed egestas egestas. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. ",
          image: require("@/assets/projects/chartexperten/chartexperten-mockup.svg"),
        },
        {
          title: "Auswertung",
          text: "Mi bibendum neque egestas congue quisque egestas diam in. Porta non pulvinar neque laoreet. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Turpis egestas integer eget aliquet. Diam volutpat commodo sed egestas egestas. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. ",
          image: require("@/assets/projects/chartexperten/chartexperten-mockup.svg"),
        },
        {
          title: "Auswertung",
          text: "Mi bibendum neque egestas congue quisque egestas diam in. Porta non pulvinar neque laoreet. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Turpis egestas integer eget aliquet. Diam volutpat commodo sed egestas egestas. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. ",
          image: require("@/assets/projects/chartexperten/chartexperten-mockup.svg"),
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
      stepsSideScroller: true,
      heroAnimation: true,
    }, this);
  }
}
</script>

<style>

section {
  width: 100vw;
  height: 100vh;
  position: relative;
  will-change: transform;
}
.section-one{
  margin-top: 0px !important;
  min-height: calc(100vh - 300px);
  justify-content: space-between;
}
.panel{
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(90vw);
  height: 80vh;
  margin: 10vh 5vw 5vh 5vw;
  border-radius: 20px;
  will-change: transform;
}
.introBox{
  align-items: center;
  padding: 10%;
}
.stepImage{
  position: absolute;
  top:10%;
  left:0;
  height: 300px;
}
.stepLeft{
  width: 100%;
  padding: 7%;
  margin-top: 35vh;
}
.stepRight{
  width: 100%;
  padding: 7%;
  margin-top: 35vh;
}
.container {
  width: 500%;
  display: flex;
  flex-wrap: nowrap;
  margin: 10% 0%;
}
.heroWrapper{
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
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

/* RESPONSIVE */

@media only screen and (max-width: 1024px) {
  .pinnedContainer{
    margin-top: -50%;
  }

  div.footerWrapper{
    padding: 0px;
  }

  .container{
    flex-direction: column;
  }
  .projectTitleAlign{
    text-align: center;
    width: 80%;
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
}
</style>

