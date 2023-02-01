<template>
  <div class="logosSection animateFadeInUpFourth">
    <div style="width: 100%; opacity: 0.6">
      <hr class="animateFadeIn" style="height: 2px; border: 0; outline: 0px; background: lightgrey; margin-bottom: 30px;" />
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
        <g-image class="logo md-hide" src="@/assets/chartexperten-logo.png"></g-image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerLogoGlider"
}
</script>

<style scoped>
/*logos section*/
.logosSection{
  position: absolute;
  width: 100%;
  bottom: 50px;
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

@keyframes moveSlideshow {
  100% {
    transform: translateX(-100%);
  }
}

@media only screen and (max-width: 1024px){
  .logosSection{
    position: absolute;
    width: 100%;
    bottom: 0px
  }
  .logo{
    width: 250px
  }
  .slideshow {
    margin-top: 10px;
    margin-left: 0px;
    animation: moveSlideshow 12s linear infinite;
    gap: 100px
  }
}
</style>