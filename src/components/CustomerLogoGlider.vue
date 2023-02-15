<template>
  <div class="logosSectionWrapper">
    <div class="logosSection m-hide" data-speed="1.15">
      <div style="width: 100%; opacity: 0.6; margin-bottom: 44px;">
        <Seperator :theme="'lightGreen'"/>
      </div>
      <div class="contentContainer headlines">
        <p class="logosText m-hide">UNTERNEHMEN, DIE<br>GERNE MIT UNS ARBEITEN</p>
        <p class="logosTextMobile md-hide">UNTERNEHMEN, DIE GERNE MIT UNS ARBEITEN</p>
      </div>
      <div class="contentContainer">
        <div class="slideshow">
          <g-image class="logo" src="@/assets/chartexperten-logo.png"></g-image>
          <g-image class="logo" src="@/assets/helo-logo.png"></g-image>
          <g-image class="logo" src="@/assets/uhrig-logo.png"></g-image>
          <g-image class="logo" src="@/assets/kematherm-logo.png"></g-image>
          <g-image class="logo" src="@/assets/mdz-logo.png"></g-image>
        </div>
      </div>
    </div>
    <div class="md-hide">
      <div class="js-ticker">
        <ul class="wrapper">
          <li><img class="logo" src="@/assets/chartexperten-logo.png"></li>
          <li><img class="logo" src="@/assets/kematherm-logo.png"></li>
          <li><img class="logo" src="@/assets/helo-logo.png"></li>
          <li><img class="logo" src="@/assets/mdz-logo.png"></li>
          <li><img class="logo" src="@/assets/uhrig-logo.png"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Seperator from "./Seperator";
export default {
  name: "CustomerLogoGlider",
  components: {Seperator}
}
</script>

<style scoped>
.logosSectionWrapper{
  position: absolute;
  width: 100%;
  bottom: 100px;
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
  .logo{
    width: unset;
    height: 30px;
  }
}
</style>