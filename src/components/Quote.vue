<template>
  <div class="quote">
    <g-image class="animateBlockItem" src="@/assets/zitat.png"></g-image>
    <h2 class="animateBlockText"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
    <hr class="animateBlockItem greenBg" style="margin-top: 100px; width: 244px; height: 4px; border: 0; outline: 0px; opacity: 0; display: inline-block;" />
    <h2 class="animateBlockHead"><b>Rene Grebenstein</b> </h2>
    <p class="animateBlockHead greenColor" style="font-size: 32px;"> Inhaber </p>
  </div>
</template>

<script>
export default {
  name: "Quote"
}
</script>

<style scoped>
  .quote{
    background: black;
    width: calc(100% - 100%/6);
    padding: 10%;
  }
</style>