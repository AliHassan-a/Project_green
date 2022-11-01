<template>
  <div class="headerDanke greenBg">
    <Cursorfollow />
    <h1 class="whiteColor animateFadeInUp">Vielen Dank!</h1>
    <h2 class="whiteColor animateFadeInUpSecond">Ihre Anfrage wird nun bearbeitet</h2>
    <baseButton class="animateFadeInUpThird" :hidden="true" :title="'Zur Startseite'" :linkTo="''" :toDark="true" />
  </div>
</template>

<script>
import { gsap, ScrollTrigger} from "gsap/all";
import Cursorfollow from "../components/Cursorfollow";
import BaseButton from "../components/BaseButton";

export default {
  name: "Kontakt",
  components: {
    Cursorfollow,
    BaseButton,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      immediateRender: false,
      ease: "power1.inOut",
      scrub: true
    });

    ScrollTrigger.batch(".animateFadeInUp", {
      toggleClass: "activeContent"
    });
    ScrollTrigger.batch(".animateFadeInUpSecond", {
      toggleClass: "activeContentSecond"
    });
    ScrollTrigger.batch(".animateFadeInUpThird", {
      toggleClass: "activeContentThird"
    });
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