<template>
  <Layout>
    <div id="page" class="site">
      <div class="mainSection section-one">
        <div class="contentContainer">
          <HeroTitle
              class="heroTitle stickyBoxes"
              :main-title="hero.mainTitle"
              :main-title-second="hero.mainTitleSecond"
              :second-title="hero.secondTitle" />
          <div class="boxWrapper">
            <div class="leistungBox">
              <g-link to="/leistungen/design-strategie">
                <div class="innerLeistung">
                  <g-image src="@/assets/design_strategie.svg"></g-image>
                  <BaseTitle :align="'center'" style="margin-top: 20px;" :tag="'h3'"><b>Design & Strategie</b></BaseTitle>
                </div>
              </g-link>
            </div>
            <div class="leistungBox">
              <g-link to="/leistungen/entwicklung">
                <div class="innerLeistung">
                  <g-image src="@/assets/entwicklung.svg"></g-image>
                  <BaseTitle :align="'center'" style="margin-top: 20px;" :tag="'h3'"><b>Entwicklung</b></BaseTitle>
                </div>
              </g-link>
            </div>
            <div class="leistungBox">
              <g-link to="/leistungen/marketing">
                <div class="innerLeistung">
                  <g-image src="@/assets/marketing.svg"></g-image>
                  <BaseTitle :align="'center'" style="margin-top: 20px;" :tag="'h3'"><b>Marketing</b></BaseTitle>
                </div>
              </g-link>
            </div>
          </div>
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
        mainTitle: "Unsere digitalen Dienstleistungen",
        mainTitleSecond: "helfen Ihrem Unternehmen",
        secondTitle: "groß & mutig zu werden"
      },
    }
  },
  mounted() {
    new initGsap({
      heroAnimation: true,
      stickyBoxes: true,
    }, this);
  }
}
</script>

<style>
.contentContainer{
  align-items: flex-start;
}
.leistungBox{
  border: 1px solid rgba(136,243,50,0.2);
  background: rgba(0,0,0,0.5);
  border-radius: 22px;
  padding: 100px;
  min-width: 350px;
  transition: all 0.3s ease-out;
}
.innerLeistung{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
}
.leistungBox:hover .innerLeistung{
  filter: brightness(0);
}
.leistungBox:hover{
  background: #88F332;
}
.boxWrapper{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 60px;
  margin-top: 0vh;
  padding-top: 30vh;
}
.stickyBoxes{
  top:0;
  height: 50vh;
  padding-top: 30vh;
}
</style>

