<template>
  <div :data-speed="hasAni? 1.3 : 1" class="gsHeroTitle">
    <BaseTitle addClass="animateBlockHero" :align="'left'" :tag="'h1'" >{{ mainTitle }}<br>{{ mainTitleSecond }}<br><b class="greenColor">{{ secondTitle }}</b></BaseTitle>
    <g-image class="heroArrow animateBlockHeroArrow" src="@/assets/Pfeile.svg"></g-image>
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
  @media only screen and (max-width: 1024px) {
    .gsHeroTitle{
      margin-top: 150px;
      margin-bottom: 200px;
      width: 100%
    }
  }
</style>