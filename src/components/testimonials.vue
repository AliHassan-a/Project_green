<template>
  <div class="testimonialsWrapper">
    <h2 class="animateFadeInLeft" style="margin-bottom: 60px;"> Was unsere Kunden sagen </h2>
    <div ref="testimonials" class="testimonials toDirectionHover animateFadeInUp">
      <div class="singleCard">
        <p style="margin-bottom: 50px;">Zuverlässig und gute Leistung. <br><br> Die Greenstein Agentur kam Kundenwünsche sofort nach, auch die Zusammenarbeit und Absprache verläuft schnell und reibungslos. Mit der Arbeit sind wir sehr zufrieden</p>
        <hr class="greenBg line" />
        <p style="font-size: 34px"><b>Martin B.</b></p>
        <p style="font-size: 18px" class="greenColor"> KFz-Sachverständigenbüro Berner GmbH </p>
      </div>
      <div class="singleCard">
        <p style="margin-bottom: 50px;">Zuverlässig und gute Leistung. <br><br> Die Greenstein Agentur kam Kundenwünsche sofort nach, auch die Zusammenarbeit und Absprache verläuft schnell und reibungslos. Mit der Arbeit sind wir sehr zufrieden</p>
        <hr class="greenBg line" />
        <p style="font-size: 34px"><b>Martin B.</b></p>
        <p style="font-size: 18px" class="greenColor"> KFz-Sachverständigenbüro Berner GmbH </p>
      </div>
      <div class="singleCard">
        <p style="margin-bottom: 50px;">Zuverlässig und gute Leistung. <br><br> Die Greenstein Agentur kam Kundenwünsche sofort nach, auch die Zusammenarbeit und Absprache verläuft schnell und reibungslos. Mit der Arbeit sind wir sehr zufrieden</p>
        <hr class="greenBg line" />
        <p style="font-size: 34px"><b>Martin B.</b></p>
        <p style="font-size: 18px" class="greenColor"> KFz-Sachverständigenbüro Berner GmbH </p>
      </div>
      <div class="singleCard">
        <p style="margin-bottom: 50px;">Zuverlässig und gute Leistung. <br><br> Die Greenstein Agentur kam Kundenwünsche sofort nach, auch die Zusammenarbeit und Absprache verläuft schnell und reibungslos. Mit der Arbeit sind wir sehr zufrieden</p>
        <hr class="greenBg line" />
        <p style="font-size: 34px"><b>Martin B.</b></p>
        <p style="font-size: 18px" class="greenColor"> KFz-Sachverständigenbüro Berner GmbH </p>
      </div>
      <div class="singleCard">
        <p style="margin-bottom: 50px;">Zuverlässig und gute Leistung. <br><br> Die Greenstein Agentur kam Kundenwünsche sofort nach, auch die Zusammenarbeit und Absprache verläuft schnell und reibungslos. Mit der Arbeit sind wir sehr zufrieden</p>
        <hr class="greenBg line" />
        <p style="font-size: 34px"><b>Martin B.</b></p>
        <p style="font-size: 18px" class="greenColor"> KFz-Sachverständigenbüro Berner GmbH </p>
      </div>
      <div class="singleCard">
        <p style="margin-bottom: 50px;">Zuverlässig und gute Leistung. <br><br> Die Greenstein Agentur kam Kundenwünsche sofort nach, auch die Zusammenarbeit und Absprache verläuft schnell und reibungslos. Mit der Arbeit sind wir sehr zufrieden</p>
        <hr class="greenBg line" />
        <p style="font-size: 34px"><b>Martin B.</b></p>
        <p style="font-size: 18px" class="greenColor"> KFz-Sachverständigenbüro Berner GmbH </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "testimonials",
  data() {
    return {
      active: 0,
      count: null,
      mouseDirection: null,
      isMobile: true,
    }
  },
  watch: {
    active(newVal){
      if(this.isMobile){
        this.$refs.testimonials.style.left = -newVal * 96 + "%";
      } else {
        this.$refs.testimonials.style.left = -newVal * 33.333 + "%";
      }
    }
  },
  mounted(){
    window.addEventListener("load", () => {
      this.isMobile = window.innerWidth > 1024 ? false : true;
    })
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth > 1024 ? false : true;
    })

    this.count = document.querySelectorAll(".singleCard").length;

    var xDown = null;
    var yDown = null;

    this.$refs.testimonials.addEventListener('touchstart', (evt) => {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }, false);

    this.$refs.testimonials.addEventListener('touchmove', (evt) => {
      if ( ! xDown || ! yDown ) {
        return;
      }
      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
          if(this.active < this.count - (this.isMobile ? 1 : 3)){
            this.active += 1;
          }
        } else {
          if(this.active > 0){
            this.active -= 1;
          }
        }
      } else {
        if ( yDiff > 0 ) {
        } else {
        }
      }
      xDown = null;
      yDown = null;
    }, false);

    function getTouches(evt) {
      return evt.touches || evt.originalEvent.touches;
    }
  }
}
</script>

<style scoped>
  .testimonialsWrapper{
    position: absolute;
    left: 0;
    right: 0;
  }
  .testimonials{
    display: flex;
    left: 0;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    width: 200%;
    transition: left 0.8s ease-out;
    cursor: grab;
  }
  .singleCard{
    width: 33.333%;
    background: black;
    padding: 58px 46px;
  }
  .line{
    width: 100px;
    height: 2px;
    border: 0;
    outline: 0px;
    display: inline-block;
  }
  @media only screen and (max-width: 1024px){
  }
</style>