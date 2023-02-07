<template>
  <div id="page" class="site">
    <div id="one" class="mainSection section-one">
      <div class="contentContainer">
        <HeroTitle
            :main-title="'Vielen Dank! Deine Anfrage wurde gestellt.'"
            :second-title="'Jetzt kommen wir auf dich zu!'" />
        <BaseButton class="animateBlockItem" :theme="'light'" :title="'Zur Startseite'" toLink="/"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeroTitle from "../components/HeroTitle";
import BaseButton from "../components/BaseButton";

export default {
  name: "Vielen-Dank",
  components: {
    HeroTitle,
    BaseButton,
  }
}
</script>

<style scoped>

</style>