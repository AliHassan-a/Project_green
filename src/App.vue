<template>
  <div class="mainWrapper bgBg">
    <CookieBanner :openCookies="openCookies" />
    <backgroundAnimation :getHue="bgHue" />
    <Header />
    <Cursorfollow class="m-hide" />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <transition name="fade" mode="out-in">
          <router-view v-slot="{ Component, route }">
            <component :is="Component" :key="route.path"/>
          </router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Cursorfollow from "@/components/Cursorfollow";
import backgroundAnimation from "./components/BackgroundAnimation";
import CookieBanner from "./components/CookieBanner";
import {gsap, Quart} from "gsap/all";

export default {
  name: "App",
  data() {
    return {
      bgHue: 0,
      openCookies: false,
    }
  },
  methods: {
    onRepaint(hue){
      this.bgHue = hue;
    },
    onOpenCookies(){
      this.openCookies = true;
      setTimeout(() => {
        this.openCookies = false;
      },1000)
    },
  },
  mounted(){
    this.$root.$on("repaint-bg", this.onRepaint);
    this.$root.$on("openCookies", this.onOpenCookies);
  },
  components: {
    CookieBanner,
    Header,
    Cursorfollow,
    backgroundAnimation,
  },
}
</script>

<style lang="scss">
@import "main.scss";

#smooth-content{
  will-change: transform;
}
.mainWrapper{
  width: 100%;
  max-width: 100vw;
}
</style>