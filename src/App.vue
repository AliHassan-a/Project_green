<template>
  <div class="mainWrapper bgBg">
    <header class="header">
      <g-link :to="'/'">
        <g-image style="position: absolute; left: 1.5rem; top: 1rem; width: 300px;" src="@/assets/logo.svg"></g-image>
      </g-link>
      <Menu />
    </header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>

import Menu from "@/components/Menu";
export default {
  name: "App",
  components: {
    Menu,
  }
}
</script>

<style scoped>
@import "./main.css";


.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s linear;
  transition-delay: 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.mainWrapper{
  width: 100%;
  max-width: 100vw;
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