<template>
  <header>
    <div ref="logoContainer" class="logoContainer">
      <a class="logoImage" href="/">
        <g-image src="@/assets/logo.svg"></g-image>
      </a>
    </div>
    <Menu @toggleMenu="onToggleMenu"/>
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
  methods: {
    onToggleMenu(action){
      action == "open" ? this.$refs.logoContainer.classList.add("blackLogo") : this.$refs.logoContainer.classList.remove("blackLogo");
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0px;
  width:  100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 999999;
  backdrop-filter: blur(10px);
}
div.logoContainer{
  position: absolute;
  top:10px;
  left:25px;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  transition: filter 1s ease;
}
.logoImage{
  opacity: 1;
  z-index: 1;
}
.blackLogo{
  filter: grayscale(1) brightness(0);
}
@media only screen and (max-width: 1024px){
  div.logoContainer{
    position: absolute;
    top:0;
    left:5vw;
    width: 200px;
  }
}
</style>