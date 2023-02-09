<template>
  <div class="bgWrapper">
    <canvas :style="'filter: hue-rotate(' + getHue + 'deg);'" id="c" width="256" height="256"></canvas>
    <div class="backdrop"></div>
  </div>
</template>

<style>
</style>

<script>
import { createNoise3D } from 'simplex-noise';

export default {
  name: "BackgroundAnimation",
  props: {
    getHue: Number,
  },
  mounted() {
    function animation() {
      var simplex = createNoise3D(),
          canvas = document.getElementById('c'),
          ctx = canvas.getContext('2d'),

          imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height),
          data = imgdata.data,
          t = 0;
      window.setInterval( function() {
        for (var x = 0; x < 256; x++) {
          for (var y = 0; y < 256; y++) {

            var r = simplex(x / 280, y / 180, t / 220) * 0.5 + 0.5;
            var g = simplex(x / 130, y / 330, t / 160) * 0.3 + 0.3;

            data[(x + y * 256) * 4 + 0] = (r) * 48;
            data[(x + y * 256) * 4 + 1] = (r + g) * 60;
            data[(x + y * 256) * 4 + 2] = (r + g) * 28;
            data[(x + y * 256) * 4 + 3] = 255;
          }
        }
        ctx.putImageData(imgdata, 0, 0);
        t++
      }, 25);
    }
    animation();
  },
  beforeDestroy(){
    window.clearInterval(function () {
      for (var x = 0; x < 256; x++) {
        for (var y = 0; y < 256; y++) {

          var r = simplex(x / 280, y / 180, t / 220) * 0.5 + 0.5;
          var g = simplex(x / 130, y / 330, t / 160) * 0.3 + 0.3;

          data[(x + y * 256) * 4 + 0] = (r) * 48;
          data[(x + y * 256) * 4 + 1] = (r + g) * 60;
          data[(x + y * 256) * 4 + 2] = (r + g) * 28;
          data[(x + y * 256) * 4 + 3] = 255;
        }
      }
      t++;
      ctx.putImageData(imgdata, 0, 0);
    });
  }
}
</script>

<style scoped>
    .bgWrapper{
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
    canvas{
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100vw;
      height: 100vh;
      max-width: none;
      transition: filter 1s ease;
    }
    .backdrop{
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200vw;
      height: 200vh;
      z-index: 0;
      opacity: 0.25;
      background-image: url("../assets/bg-muster.png");
      will-change: transform;
      animation: bg-animation 0.5s infinite;
      display: block;
    }

    @keyframes bg-animation {
      0% { transform: translate(0,0) }
      10% { transform: translate(-5%,-5%) }
      20% { transform: translate(-10%,5%) }
      30% { transform: translate(5%,-10%) }
      40% { transform: translate(-5%,15%) }
      50% { transform: translate(-10%,5%) }
      60% { transform: translate(15%,0) }
      70% { transform: translate(0,10%) }
      80% { transform: translate(-15%,0) }
      90% { transform: translate(10%,5%) }
      100% { transform: translate(5%,0) }
    }
</style>