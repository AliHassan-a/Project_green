<template>
  <div class="headerKontakt greenBg">
    <h1 class="bgColor animateFadeInUp">Kontakt</h1>
    <h2 class="bgColor animateFadeInUpSecond">asdasdasd</h2>
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
    ScrollTrigger.batch(".animateFadeInUp", {
      toggleClass: "activeContent"
    });
    ScrollTrigger.batch(".animateFadeInUpSecond", {
      toggleClass: "activeContentSecond"
    });
    ScrollTrigger.batch(".animateFadeInUpThird", {
      toggleClass: "activeContentThird"
    });

    ScrollTrigger.defaults({
      immediateRender: false,
      ease: "power1.inOut",
      scrub: true
    });
  }
}
</script>

<style scoped>
.headerKontakt{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>