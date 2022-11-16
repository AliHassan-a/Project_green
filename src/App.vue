<template>
  <div class="mainWrapper bgBg">
    <Header />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Cursorfollow from "@/components/Cursorfollow";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Cursorfollow,
    Header,
  },
}
</script>

<style scoped>
@import "./main.css";

#smooth-content{
  will-change: transform;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
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
</style>