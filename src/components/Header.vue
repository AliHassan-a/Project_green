<template>
  <header class="header">
    <div class="logoContainer">
      <img class="logoImage" style="width: 300px;" src="@/assets/logo.svg">
      <div class="logoBackground bgBg"></div>
    </div>
    <Menu class="menuContainer" />
  </header>
</template>

<script>
import Menu from "@/components/Menu";
import {gsap, Quart} from "gsap/all";

export default {
  name: "Header",
  components: {
    Menu,
  },
  mounted() {
    gsap.fromTo(".logoImage", {
      opacity: 0,
      scale: 1.5,
    }, {
      opacity: 1,
      scale: 1,
      duration: 2,
      delay: 0,
      ease: "ease-in",
    });
    gsap.fromTo(".logoContainer", {
      width: '100%',
      height: '100vh',
    }, {
      width: '300px',
      height: '100%',
      duration: 0.5,
      delay: 2,
      ease: "ease-out",
    });
    gsap.fromTo(".logoBackground", {
      opacity: 1,
    }, {
      opacity: 0,
      duration: 1,
      delay: 2,
      ease: "ease-out",
    });
    window.setTimeout( function(){
      document.querySelector(".logoBackground").style.display = "none";
    },3000)
  }
}
</script>

<style scoped>
div.logoContainer{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}
div.logoBackground{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: 0;
}
.logoImage{
  opacity: 0;
  z-index: 1;
}

.header {
  position: fixed;
  top: 0px;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  z-index: 999999;
  backdrop-filter: blur(10px);
}
</style>