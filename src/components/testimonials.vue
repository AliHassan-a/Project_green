<template>
  <div class="testimonialsWrapper">
    <h2 class="animateFadeInLeft" style="margin-bottom: 60px;"> Was unsere Kunden sagen </h2>
    <div ref="testimonials" class="testimonials toDirectionHover">
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
    }
  },
  watch: {
    active(newVal){
      this.$refs.testimonials.style.left = -newVal * 33.333 + "%";
    }
  },
  mounted(){
    this.count = document.querySelectorAll(".singleCard").length;
    window.addEventListener("mousemove", e => {
      this.mouseDirection =  e.clientX > window.innerWidth / 2 ? "isRight" : "isLeft";
    });

    this.$refs.testimonials.addEventListener("click", () => {
      if(this.mouseDirection == "isRight"){
        if(this.active < this.count - 3){
          this.active += 1;
        }
      } else {
        if(this.active > 0){
          this.active -= 1;
        }
      }
    })
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