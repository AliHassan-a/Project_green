<template>
  <div class="mainWrapper bgBg">
    <backgroundAnimation />
    <Header />
    <Cursorfollow />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <transition name="fade" mode="out-in">
          <router-view v-slot="{ Component, route }">
            <component :is="Component" :key="route.path" />
          </router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Cursorfollow from "@/components/Cursorfollow";
import backgroundAnimation from "@/components/BackgroundAnimation"

export default {
  name: "App",
  components: {
    Header,
    Cursorfollow,
    backgroundAnimation
  },
}
</script>

<style lang="scss">
@import "main.scss";

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