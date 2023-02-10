<template>
  <header>
    <div ref="logoContainer" class="logoContainer">
      <a class="logoImage greensteinLogo" href="/">
        <g-image title="greenstein-logo" alt="greenstein-logo" src="@/assets/greenstein-logo.svg"></g-image>
      </a>
      <a class="logoImage greensteinLogoFont" href="/">
        <g-image title="greenstein-logo" alt="greenstein-logo" src="@/assets/greenstein-logo-font.svg"></g-image>
      </a>
    </div>
    <Menu @toggleMenu="onToggleMenu"/>
  </header>
</template>

<script>
import Menu from "@/components/Menu";

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
}
div.logoContainer{
  position: absolute;
  top:10px;
  left:25px;
  width: 300px;
  height: 100%;
  display: flex;
  justify-items: flex-start;
  align-items: center;
  z-index: 1001;
  transition: filter 1s ease;
}
.greensteinLogo{
  margin-right: 10px;
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