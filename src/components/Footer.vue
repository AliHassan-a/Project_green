<template>
  <div class="mainSection footerWrapper">
    <div class="footer-overlay greenBg"></div>
    <p class="footer">Du hast ein spannendes Projekt?</p>
    <h2 class="footer">Lass uns sprechen!</h2>
    <div class="footerBottom animateFadeInUp" style="z-index: 1;">
      <div style="width: 100%; opacity: 0.6">
        <hr style="height: 2px; border: 0; outline: 0px; background: black;" />
      </div>
      <div class="contentContainer">
        <p style="color:#011713">LOREM IPSUM</p>
        <p style="color:#011713">LOREM IPSUM</p>
        <p style="color:#011713">LOREM IPSUM</p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger, ScrollSmoother, Power2} from "gsap/all";

export default {
  name: "Footer",
}
</script>

<style scoped>

</style>