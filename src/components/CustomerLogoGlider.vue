<template>
  <div class="logosSection">
    <div style="width: 100%; opacity: 0.6; margin-bottom: 44px;">
      <Seperator :theme="'lightGreen'"/>
    </div>
    <div class="contentContainer headlines">
      <p class="logosText m-hide">UNTERNEHMEN, DIE<br>GERNE MIT UNS ARBEITEN</p>
      <p class="logosTextMobile md-hide">UNTERNEHMEN, DIE GERNE MIT UNS ARBEITEN</p>
    </div>
    <div class="contentContainer slideshow">
      <div class="slideshow">
        <g-image class="logo" src="@/assets/chartexperten-logo.png"></g-image>
        <g-image class="logo" src="@/assets/kematherm-logo.png"></g-image>
        <g-image class="logo" src="@/assets/helo-logo.png"></g-image>
        <g-image class="logo" src="@/assets/mdz-logo.png"></g-image>
        <g-image class="logo" src="@/assets/uhrig-logo.png"></g-image>
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
.logosSection{
  position: absolute;
  width: 100%;
  bottom: 44px;
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
  width: 300px;
}
.contentContainer.headlines{
  position: absolute;
  top:50%
}
/* SLIDER */

.slideshow {
  margin-top: 0px;
  margin-left: 150px;
  transform: translate3d(0, 0, 0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12%;
}

</style>