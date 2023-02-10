<template>
  <div class="gsHeroTitle">
    <BaseTitle data-speed="1.3" addClass="animateBlockHero" :align="'left'" :tag="'h1'" >{{ mainTitle }}<br>{{ mainTitleSecond }}<br><b class="greenColor">{{ secondTitle }}</b></BaseTitle>
    <div class="contentContainer animateBlockHeroArrow" data-speed="1.3">
      <g-image style="margin-top: 0px; width: 96px;" src="@/assets/Pfeile.svg"></g-image>
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
  @media only screen and (max-width: 1024px) {
    .gsHeroTitle{
      margin-top: 150px;
      margin-bottom: 50px;
      width: 100%
    }
  }
</style>