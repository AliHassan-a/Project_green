<template>
  <div class="gsHeroTitle">
    <BaseTitle :data-speed="hasAni? 1.3 : 1" addClass="animateBlockHero" :align="'left'" :tag="'h1'" >{{ mainTitle }}<br>{{ mainTitleSecond }}<br><b class="greenColor">{{ secondTitle }}</b></BaseTitle>
    <div class="contentContainer animateBlockHeroArrow" :data-speed="hasAni? 1.3 : 1">
      <g-image class="heroArrow" src="@/assets/Pfeile.svg"></g-image>
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle";

export default {
  name: "HeroTitle",
  props: {
    mainTitle: String,
    mainTitleSecond: String,
    secondTitle: String,
    hasAni: Boolean,
  },
  components: {
    BaseTitle,
  }
}
</script>

<style scoped>
  .gsHeroTitle{
    width: 70%
  }
  .heroArrow{
    margin-top: -30px;
    width: 96px;
  }
  @media only screen and (max-width: 1024px) {
    .gsHeroTitle{
      margin-top: 150px;
      margin-bottom: 50px;
      width: 100%
    }
    .heroArrow{
      margin-top: -10px;
      width: 10%;
    }
  }
</style>