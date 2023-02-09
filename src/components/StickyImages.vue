<template>
  <div class="mainSection">
    <div class="pinnedContainerWrapper">
      <div class="pinnedContainer">
        <div class="toLinkHover" gs-hover="Was grnstn so!? &nbsp;&nbsp; Wanna be friends?">
          <h2 class="animateBlockHead"> Designer, Programmierer </h2>
          <h2 class="animateBlockHead"> Marketing-Experten </h2>
          <h2 class="animateBlockHead greenColor" style="text-align: left;"><b>Freunde</b></h2>
          <g-image class="animateBlockItem" style="margin-top: 20px;" src="@/assets/Pfeile.svg"></g-image>
        </div>
      </div>
      <div style="width: 100%; display: flex; flex-direction:column; margin-top: 70%;">
        <div class="reveal">
          <g-image src="@/assets/praktis1.png"></g-image>
        </div>
        <div class="reveal">
          <g-image src="@/assets/praktis2.png"></g-image>
        </div>
        <div class="reveal">
          <g-image src="@/assets/praktis1.png"></g-image>
        </div>
        <div class="reveal">
          <g-image src="@/assets/praktis2.png"></g-image>
        </div>
        <div class="reveal">
          <g-image src="@/assets/developer.png"></g-image>
        </div>
        <div class="reveal">
          <g-image src="@/assets/3guys.png"></g-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StickyImages"
}
</script>

<style scoped>
.reveal {
  visibility: hidden;
  position: relative;
  width: 80%;
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
  height: 100vh;
  padding-top: 30%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transform-origin: left;
}
@media only screen and (max-width: 1024px) {
  .pinnedContainer{
    margin-top: -50%;
  }
}
</style>