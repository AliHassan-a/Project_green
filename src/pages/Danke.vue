<template>
  <div class="headerDanke greenBg">
    <Cursorfollow />
    <h1 class="whiteColor animateFadeInUp">Vielen Dank!</h1>
    <h2 class="whiteColor animateFadeInUpSecond">Ihre Anfrage wird nun bearbeitet</h2>
    <baseButton class="animateFadeInUpThird" :hidden="true" :title="'Zur Startseite'" :linkTo="''" :toDark="true" />
  </div>
</template>

<script>
import Cursorfollow from "../components/Cursorfollow";
import BaseButton from "../components/BaseButton";

export default {
  name: "Kontakt",
  components: {
    Cursorfollow,
    BaseButton,
  }
}
</script>

<style scoped>
.headerDanke{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>