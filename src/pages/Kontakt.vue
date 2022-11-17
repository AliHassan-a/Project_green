<template>
  <div class="headerKontakt greenBg">
    <Cursorfollow />
    <h1 class="bgColor animateFadeInUp">Kontakt</h1>
    <h2 class="bgColor animateFadeInUpSecond">asdasdasd</h2>
    <ContactForm class="animateFadeInUpThird" />
    <baseButton class="animateFadeInUpThird" :hidden="true" :title="'Startseite'" :linkTo="''" :toDark="true" />
  </div>
</template>

<script>
import { gsap, ScrollTrigger} from "gsap/all";
import Cursorfollow from "../components/Cursorfollow";
import BaseButton from "../components/BaseButton";
import ContactForm from "../components/ContactForm";

export default {
  name: "Kontakt",
  components: {
    ContactForm,
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
      toggleClass: "activeContentUp"
    });
    ScrollTrigger.batch(".animateFadeInUpSecond", {
      toggleClass: "activeContentUpSecond"
    });
    ScrollTrigger.batch(".animateFadeInUpThird", {
      toggleClass: "activeContentUpThird"
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