<template>
  <div class="mainSection">
    <div class="contentContainer">
      <div class="simpleStickySection">
        <HeroTitle
            v-if="stickyContent == 'hero'"
            class="heroTitle"
            :main-title="hero.mainTitle"
            :main-title-second="hero.mainTitleSecond"
            :second-title="hero.secondTitle" />
        <div v-else-if="stickyContent == 'slot'">
          <slot></slot>
        </div>
      </div>
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
</template>

<script>
import BaseButton from "../components/BaseButton";
import BaseTitle from "../components/BaseTitle";
import HeroTitle from "../components/HeroTitle";
import BaseText from "../components/BaseText";

export default {
  name: "StickySection",
  props: {
    hero: Object,
    stickyContent: String,
    boxesContent: Array,
  },
  components: {
    HeroTitle,
    BaseButton,
    BaseTitle,
    BaseText,
  },
}
</script>

<style scoped>
.mainSection{
  margin-top: 1px;
}
.contentContainer{
  align-items: flex-start;
}
.leistungBox{
  border: 1px solid rgba(136,243,50,0.2);
  background: rgba(0,0,0,0.5);
  border-radius: 22px;
  padding: 60px 70px;
  min-width: 300px;
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
.heroTitle{
  width: 100%;
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
.simpleStickySection{
  top:0;
  height: 100vh;
  padding-top: 30vh;
}
@media only screen and (max-width: 1024px){
  .contentContainer{
    display: flex;
    flex-direction: column;
  }
  .leistungBox{
    border: 1px solid rgba(136,243,50,0.2);
    background: rgba(0,0,0,0.5);
    border-radius: 22px;
    padding: 30px 0px;
    width: 100%;
    min-width: 100%;
    transition: all 0.3s ease-out;
  }
  .boxWrapper{
    width: 100%;
    margin-bottom: 100px;
  }
  .simpleStickySection{
    padding-top:20vh;
    height: 50vh;
  }
}
</style>