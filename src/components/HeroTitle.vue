<template>
  <div class="gsHeroTitle">
    <BaseTitle :align="'left'" :tag="'h2'" >{{ mainTitle }}</BaseTitle>
    <BaseTitle :align="'left'" :tag="'h2'" :addClass="'greenColor'"><b>{{ secondTitle }}</b></BaseTitle>
    <div class="contentContainer">
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
</style>