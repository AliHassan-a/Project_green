<template>
  <div class="quoteWrapper">
    <div class="quote">
      <g-image class="animateBlockItem" src="@/assets/zitat.png"></g-image>
      <h2 class="animateBlockText"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
      <hr class="animateBlockItem greenBg" style="margin-top: 100px; width: 244px; height: 4px; border: 0; outline: 0px; opacity: 0; display: inline-block;" />
      <h2 class="animateBlockHead"><b>Rene Grebenstein</b> </h2>
      <p class="animateBlockHead greenColor" style="font-size: 32px;"> Inhaber </p>
    </div>
    <div class="quote">
      <g-image class="animateBlockItem" src="@/assets/zitat.png"></g-image>
      <h2 class="animateBlockText"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
      <hr class="animateBlockItem greenBg" style="margin-top: 100px; width: 244px; height: 4px; border: 0; outline: 0px; opacity: 0; display: inline-block;" />
      <h2 class="animateBlockHead"><b>Rene Grebenstein</b> </h2>
      <p class="animateBlockHead greenColor" style="font-size: 32px;"> Inhaber </p>
    </div>
    <div class="quote">
      <g-image class="animateBlockItem" src="@/assets/zitat.png"></g-image>
      <h2 class="animateBlockText"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
      <hr class="animateBlockItem greenBg" style="margin-top: 100px; width: 244px; height: 4px; border: 0; outline: 0px; opacity: 0; display: inline-block;" />
      <h2 class="animateBlockHead"><b>Ich bin der Udo</b> </h2>
      <p class="animateBlockHead greenColor" style="font-size: 32px;"> auch dabei </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote"
}
</script>

<style scoped>
.quoteWrapper{
  margin-top: 200px;
  height: 350vh;
}
.quote:first-child{

  margin-top: 20px !important;
}
.quote{
  background: black;
  margin-top: 100px !important;
  width: 75vw;
  margin-left: 2.5%;
  padding: 0% 10%;
  height: calc(87vh);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transform-origin: top;
}
</style>