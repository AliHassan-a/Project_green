<template>
  <div id="page" class="site">
    <div id="one" class="mainSection section-one">
      <div class="contentContainer">
        <HeroTitle
            :main-title="'Vielen Dank!'"
            :main-title-second="'Wir haben deine Anfrage erhalten.'"
            :second-title="'Wir melden uns schnellstmöglich bei Dir.'" />
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