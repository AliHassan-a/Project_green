<template>
  <header class="header">
    <div class="logoContainer">
      <a class="logoImage" href="/">
        <img style="width: 300px; padding: 38px 42px;" src="@/assets/logo.svg">
      </a>
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
  data(){
    return {
      initialLoad: true,
    }
  },
  mounted() {
    if(this.initialLoad){
      gsap.fromTo(".logoImage", {
        opacity: 0,
        scale: 1.2,
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
        maxWidth: '100%',
      }, {
        width: '300px',
        height: '100%',
        maxWidth: '50%',
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
      setTimeout( function(){
        document.querySelector(".logoBackground").style.display = "none";
      },3000)

      this.initialLoad = false;
    }
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
  height: 80px;
  z-index: 999999;
  backdrop-filter: blur(10px);
}
</style>