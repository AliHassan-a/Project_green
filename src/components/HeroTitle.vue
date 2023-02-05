<template>
  <div class="gsHeroTitle">
    <BaseTitle addClass="animateBlockHero" :align="'left'" :tag="'h2'" >{{ mainTitle }}<br><b class="greenColor">{{ secondTitle }}</b></BaseTitle>
    <div class="contentContainer animateBlockHeroArrow">
      <g-image style="margin-top: 15px; width: 50px;" src="@/assets/Pfeile.svg"></g-image>
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle";

export default {
  name: "HeroTitle",
  props: {
    mainTitle: String,
    secondTitle: String,
  },
  components: {
    BaseTitle,
  }
}
</script>

<style scoped>
  .gsHeroTitle{
    width: 50%
  }
  @media only screen and (max-width: 1024px) {
    .gsHeroTitle{
      margin-top: 150px;
      margin-bottom: 50px;
      width: 100%
    }
  }
</style>