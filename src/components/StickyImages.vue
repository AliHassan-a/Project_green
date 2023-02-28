<template>
  <div class="mainSection">
    <div class="pinnedContainerWrapper">
      <div class="pinnedContainer" data-speed="0.8">
        <div class="toLinkHover" gs-hover="Was grnstn so!? &nbsp;&nbsp; Wanna be friends?">
          <h2 class="animateBlockHead"> Designer, Programmierer </h2>
          <h2 class="animateBlockHead"> Marketing-Experten </h2>
          <h2 class="animateBlockHead greenColor" style="text-align: left;"><b>Freunde</b></h2>
          <g-image class="animateBlockItem heroArrow" src="@/assets/Pfeile.svg"></g-image>
        </div>
      </div>
      <div v-if="imageSet == 'index' || imageSet == undefined" style="width: 100%; display: flex; flex-direction:column; margin-top: 70%;">
        <div class="revealWrapper" data-speed="1.2">
          <div class="reveal">
            <g-image src="@/assets/praktis1.webp"></g-image>
          </div>
        </div>
        <div class="revealWrapper" data-speed="0.9">
          <div class="reveal">
            <g-image src="@/assets/praktis2.webp"></g-image>
          </div>
        </div>
        <div class="revealWrapper" data-speed="1.2">
          <div class="reveal">
            <g-image src="@/assets/developer.webp"></g-image>
          </div>
        </div>
        <div class="revealWrapper" data-speed="0.9">
          <div class="reveal">
            <g-image src="@/assets/3guys.webp"></g-image>
          </div>
        </div>
      </div>
      <div v-if="imageSet == 'about'" style="width: 100%; display: flex; flex-direction:column; margin-top: 70%;">
        <div class="revealWrapper" data-speed="1.2">
          <div class="reveal">
            <g-image src="@/assets/teamwork.webp"></g-image>
          </div>
        </div>
        <div class="revealWrapper" data-speed="0.9">
          <div class="reveal">
            <g-image src="@/assets/greenstein-praktikant.webp"></g-image>
          </div>
        </div>
        <div class="revealWrapper" data-speed="1.2">
          <div class="reveal">
            <g-image src="@/assets/greenstein-gestaltung.webp"></g-image>
          </div>
        </div>
        <div class="revealWrapper" data-speed="0.9">
          <div class="reveal">
            <g-image src="@/assets/greenstein-webapp.webp"></g-image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StickyImages",
  props: {
    imageSet: String,
  },
}
</script>

<style scoped>
.revealWrapper:nth-child(1){
  transform: translateX(-6.25vw);
}
.revealWrapper:nth-child(2){
  transform: translateY(-6.25vw);
}
.revealWrapper:nth-child(2) .reveal{
  display: flex;
  justify-content: flex-end;
}
.revealWrapper:nth-child(3){
  transform: translateX(-6.25vw);
}
.revealWrapper:nth-child(4){
  transform: translateY(-6.25vw);
}
.revealWrapper:nth-child(4) .reveal{
  display: flex;
  justify-content: flex-end;
}

.reveal {
  visibility: hidden;
  position: relative;
  height: 80%;
  overflow: hidden;
}
.pinnedContainerWrapper{
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.pinnedContainer{
  position: relative;
  top:0;
  height: 250vh;
  padding-top: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transform-origin: left;
}
@media only screen and (max-width: 1024px) {
  .revealWrapper:nth-child(1){
    z-index: 1;
  }
  .revealWrapper:nth-child(2){
  }
  .revealWrapper:nth-child(3){
    z-index: 1;
  }
  .revealWrapper:nth-child(4){
  }
  .pinnedContainerWrapper{
    flex-direction: column;
  }
  .pinnedContainer{
    margin-top: -50%;
    height: 500px;
  }
}
</style>