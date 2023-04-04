<template>
  <div class="logosSectionWrapper">
    <div class="logosSection m-hide animateBlockHeroFeature" :data-speed="hasAni || hasAni == undefined ? 1.15 : false">
      <div style="width: 100%; opacity: 0.6; margin-bottom: 44px;">
        <Seperator :theme="'lightGreen'"/>
      </div>
      <div class="contentContainer headlines">
        <p class="logosText m-hide">UNTERNEHMEN, DIE<br>GERNE MIT UNS ARBEITEN</p>
        <p class="logosTextMobile md-hide">UNTERNEHMEN, DIE GERNE MIT UNS ARBEITEN</p>
      </div>
      <div class="contentContainer loopContainerWrapper">
        <div class="loop-container">
          <div class="item">
            <g-image alt="logo-chartexperten" title="logo-chartexperten" class="logo" src="@/assets/chartexperten-logo.webp"></g-image>
            <g-image alt="logo-helosports" title="logo-helosports" class="logo" src="@/assets/helo-logo.webp"></g-image>
            <g-image alt="logo-uhrigstore" title="logo-uhrigstore" class="logo" src="@/assets/uhrig-logo.webp"></g-image>
            <g-image alt="logokematherm-" title="logo-kematherm" class="logo" src="@/assets/kematherm-logo.webp"></g-image>
            <g-image alt="logo-mdz" title="logo-mdz" class="logo" src="@/assets/mdz-logo.webp"></g-image>
          </div>
          <div class="item">
            <g-image alt="logo-chartexperten" title="logo-chartexperten" class="logo" src="@/assets/chartexperten-logo.webp"></g-image>
            <g-image alt="logo-helosports" title="logo-helosports" class="logo" src="@/assets/helo-logo.webp"></g-image>
            <g-image alt="logo-uhrigstore" title="logo-uhrigstore" class="logo" src="@/assets/uhrig-logo.webp"></g-image>
            <g-image alt="logokematherm-" title="logo-kematherm" class="logo" src="@/assets/kematherm-logo.webp"></g-image>
            <g-image alt="logo-mdz" title="logo-mdz" class="logo" src="@/assets/mdz-logo.webp"></g-image>
          </div>
        </div>
      </div>
    </div>
    <div class="md-hide">
      <div class="loop-container">
        <div class="item">
          <g-image alt="logo-chartexperten" title="logo-chartexperten" class="logo" src="@/assets/chartexperten-logo.webp"></g-image>
          <g-image alt="logo-helosports" title="logo-helosports" class="logo" src="@/assets/helo-logo.webp"></g-image>
          <g-image alt="logo-uhrigstore" title="logo-uhrigstore" class="logo" src="@/assets/uhrig-logo.webp"></g-image>
          <g-image alt="logokematherm-" title="logo-kematherm" class="logo" src="@/assets/kematherm-logo.webp"></g-image>
          <g-image alt="logo-mdz" title="logo-mdz" class="logo" src="@/assets/mdz-logo.webp"></g-image>
        </div>
        <div class="item">
          <g-image alt="logo-chartexperten" title="logo-chartexperten" class="logo" src="@/assets/chartexperten-logo.webp"></g-image>
          <g-image alt="logo-helosports" title="logo-helosports" class="logo" src="@/assets/helo-logo.webp"></g-image>
          <g-image alt="logo-uhrigstore" title="logo-uhrigstore" class="logo" src="@/assets/uhrig-logo.webp"></g-image>
          <g-image alt="logokematherm-" title="logo-kematherm" class="logo" src="@/assets/kematherm-logo.webp"></g-image>
          <g-image alt="logo-mdz" title="logo-mdz" class="logo" src="@/assets/mdz-logo.webp"></g-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Seperator from "./Seperator";
export default {
  name: "CustomerLogoGlider",
  props: {
    hasAni: Boolean,
  },
  components: {Seperator},
  mounted(){
    const lerp = (current, target, factor) => current * (1 - factor) + target * factor;

    class LoopingText {
      constructor(el) {
        this.el = el;
        this.lerp = {current: 0, target: 0};
        this.interpolationFactor = 0.1;
        this.speed = 0.2;
        this.direction = -1; // -1 (to-left), 1 (to-right)

        // Init
        this.el.style.cssText = `position: relative; display: inline-flex; white-space: nowrap;`;
        this.el.children[1].style.cssText = `position: absolute; left: ${100 * -this.direction}%;`;

        if(process.isClient){
          let responsiveTimer = window.innerWidth < 1024 ? 500 : 3000;
          setTimeout(() => {
            window.innerWidth < 1024 ? "" : this.events()
            this.render();
          }, responsiveTimer)
        }
      }

      events() {
        window.addEventListener("scroll", () => this.lerp.target += this.speed * 4);
      }

      animate() {
        this.lerp.target += this.speed;
        this.lerp.current = lerp(this.lerp.current, this.lerp.target, this.interpolationFactor);

        if (this.lerp.target > 100) {
          this.lerp.current -= this.lerp.target;
          this.lerp.target = 0;
        }

        const x = this.lerp.current * this.direction;
        this.el.style.transform = `translateX(${x}%)`;
      }

      render() {
        this.animate();
        window.requestAnimationFrame(() => this.render());
      }
    }

    document.querySelectorAll(".loop-container").forEach(el => new LoopingText(el));
  }
}
</script>

<style scoped>
.logosSectionWrapper{
  position: absolute;
  width: 100%;
  bottom: 125px;
}
.logosSection{
  position: relative;
  width: 100%;
}
.logosText{
  font-size: 14px;
  color: #e7ffd3;
}
.logosTextMobile{
  font-size: 13px;
  color: #e7ffd3;
  position: absolute;
  top: -20px;
  width: 100%;
  text-align: center;
}
.logo{
  height: 40px;
  max-width: 200px;
  object-fit: contain;
}
.loopContainerWrapper{
  width: 80%;
  margin-left: 20%;
  overflow: hidden;
}
.contentContainer.headlines{
  position: absolute;
  top:50%
}
/* SLIDER */

.slideshow {
  margin-top: 0px;
  margin-left: 200px;
  transform: translate3d(0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0px;
  width: calc(100% - 200px);
}
.item{
  display: flex;
  white-space: nowrap;
}
.item img{
  margin: 0px 20px;
}

.js-ticker {
  position: relative;
}

.js-ticker .wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  white-space: nowrap;
  padding: 0;
  will-change: transform;
}

.js-ticker li {
  list-style: none;
  padding: 0;
  font-family: sans-serif;
  line-height: 50px;
  color: white;
  font-weight: 300;
  font-size: 10vw;
  display: inline-block;
  margin-right: 30px;
}
@media only screen and (max-width: 1024px){
  .logosSectionWrapper{
    bottom: 25px;
  }
  .logo{
    width: unset;
    height: 30px;
  }
}
</style>