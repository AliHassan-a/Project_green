<template>
  <header class="header">
    <div class="logoContainer">
      <a class="logoImage" href="/">
        <img style="width: 300px; padding: 38px 42px;" src="@/assets/logo.svg">
      </a>
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
}
</script>

<style scoped>
div.logoContainer{
  position: absolute;
  top:0;
  left:0;
  width: 300px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}
.logoImage{
  opacity: 1;
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