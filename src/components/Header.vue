<template>
  <header>
    <div ref="logoContainer" class="logoContainer">
      <a class="logoImage greensteinLogo" :href="'/'">
        <g-image title="greenstein-logo" alt="greenstein-logo" src="@/assets/greenstein-logo.svg"></g-image>
      </a>
      <a class="logoImage greensteinLogoFont" :href="'/'">
        <g-image title="greenstein-logo" alt="greenstein-logo" src="@/assets/greenstein-logo-font.svg"></g-image>
      </a>
    </div>
    <div class="frame__button">
      <a href="/jetzt-anfragen" class="m-hide">
        <button class="dark">
          <div class="button-blob dark" />
          <span class="title">Jetzt anfragen</span>
          <span class="title title--hovered"><b>Jetzt anfragen</b></span>
        </button>
      </a>
      <div class="menuIcon">
        <button class="unbutton button-menu" aria-label="Open menu" style="background: none; color: white; border: none">
          <g-image src="@/assets/Menu.svg"></g-image>
        </button>
      </div>
    </div>
    <Menu @toggleMenu="onToggleMenu"/>
  </header>
</template>

<script>
import Menu from "@/components/Menu";
import BaseButton from "./BaseButton";

export default {
  name: "Header",
  components: {
    BaseButton,
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
  z-index: 10;
  transition: filter 1s ease;
}
button.dark{
  height: 4em;
  margin-right: 15px;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid rgba(255,255,255,0.25)
}
button.dark span{
  font-size: 20px;
  line-height: 2.5em;
}
.frame__button{
  position: absolute;
  right: 30px;
  top: 19px;
  display: flex;
}
.frame--menu-open .button-menu {
  opacity: 0;
  pointer-events: none;
}
.greensteinLogo{
  margin-right: 10px;
}
.logoImage{
  opacity: 1;
  z-index: 1;
}
.menuIcon{
  display: flex;
  justify-content: center;
  align-items: center;
}
.blackLogo{
  filter: grayscale(1) brightness(0);
}
button{
  cursor: pointer;
}
@media only screen and (max-width: 1024px){
  div.logoContainer{
    position: absolute;
    top:0;
    left:5vw;
    width: 200px;
  }
  .frame__button{
    right: 15px;
  }
}
</style>