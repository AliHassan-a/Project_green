<template>
  <div class="c-exp-gallery__slider js-experience-slider">
    <div class="greenBg sliderArrow arrowNext m-hide" style="z-index: 100;">
      <svg class="arrowNext" width="100" height="100" fill="black" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
    </div>
    <div class="greenBg sliderArrow arrowPrev m-hide" style="z-index: 100;">
      <svg class="arrowPrev" width="100" height="100" fill="black" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
    </div>
    <div class="proxy"></div>
    <div class="c-exp-gallery__inner js-experience-slider__inner">
      <div class="c-exp-gallery__content js-experience-slider__content toDirectionHover">
        <div :class="slideType != 'image' ? 'slideBg' : 'slideBg0'" class="c-exp-gallery-slide js-experience-slide" v-for="(slide, index, key) in slideContent" :key="key">
          <div v-if="slideType != 'image'" class="c-exp-gallery-slide__card" :class="slideType">
            <div class="c-exp-gallery-slide__proxy"></div>
            <BaseTitle v-if="hasNumber" :class="'greenColor'" class="greenIndex" :tag="'h3'"><span style="font-weight: 800;">{{index+1}}.</span></BaseTitle>
            <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.title}}</b></BaseTitle>
            <BaseText :addStyle="'white-space: normal'">{{slide.description}}</BaseText>
            <div v-if="hasTestimonial" class="testimonial">
              <hr class="testimonialBorder">
              <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.testimonialAuthor}}</b></BaseTitle>
              <BaseText :addStyle="'white-space: normal'" :addClass="'greenColor'">{{slide.testimonialPosition}}</BaseText>
            </div>
          </div>
          <div v-else-if="slideType == 'image'" class="c-exp-gallery-slide__card" :class="slideType">
            <div class="c-exp-gallery-slide__proxy"></div>
            <g-image src="@/assets/3guys.webp" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { gsap, Draggable, InertiaPlugin } from "gsap/all"
import BaseTitle from "./BaseTitle";
import BaseText from "./BaseText";

export default {
  name: "Slider",
  components: {
    BaseTitle,
    BaseText,
  },
  props: {
    slideContent: Array,
    slideType: String,
    hasNumber: Boolean,
    hasTestimonial: Boolean,
    sliderIndexOnPage: Number,
  },
  mounted(){
    gsap.registerPlugin(Draggable, InertiaPlugin);
    const sliderIndex = this.sliderIndexOnPage != undefined ? this.sliderIndexOnPage : 0;

    const container = document.querySelectorAll(".js-experience-slider")[sliderIndex];
    const proxy = container.querySelector(".proxy");
    const slider = document.querySelectorAll(".js-experience-slider__inner")[sliderIndex];
    const sliderContent = document.querySelectorAll(".js-experience-slider__content")[sliderIndex];
    const slides = [...container.querySelectorAll(".js-experience-slide")];

    let sliderWidth = 0;
    let prevSliderWidth = 0;
 // let pressedTop = false;
    let offset = 0;
    let distance = 0;

    const setBounds = () => {
      prevSliderWidth = sliderWidth;

      sliderWidth = slides[0].offsetWidth * slides.length + ((slides.length + 1) * window.innerWidth / 30);

      const newX =
          (sliderWidth / 100) *
          (gsap.getProperty(proxy, "x") / (prevSliderWidth / 100));

      gsap.to([slider, proxy], { width: sliderWidth, x: newX });

      distance = slides[0].clientWidth;
    };

    setBounds();
    window.addEventListener("resize", setBounds, false);

    /* ARROWS */

    // EXP SLIDE ADD DISTANCE TO SCROLLCLICK

    distance = slides[0].clientWidth;

    function getTranslateX(element) {
      var style = window.getComputedStyle(element);
      var matrix = new WebKitCSSMatrix(style.transform);
      return matrix.m41;
    }

    const draggable = Draggable.create(proxy, {
      type: "x",
      trigger: container,
      bounds: container,
      zIndexBoost: false,
      throwProps: true,
      edgeResistance: 0.75,
      // edgeResistance: 1,
      dragResistance: 0.4,
      onPress: function(e) {
        var bounds = this.target.getBoundingClientRect();
        if(e.srcElement.classList.contains("arrowPrev")){
          if(getTranslateX(slider) >= 100 ) return ''
          gsap.to(slider, {
            duration: 0.35,
            x: "+=" + (distance + 30),
            skewX: function (v) {
              var skew = InertiaPlugin.getVelocity(proxy, "x") / 200;
              return gsap.utils.clamp(-10, 10, skew);
            },
            overwrite: "auto",
            ease: "power2"
          });
          this.x = this.x + (distance + 30);
        } else if(e.srcElement.classList.contains("arrowNext")){
          if(getTranslateX(slider) <= (-container.clientWidth+((distance) * 2))) return ''
          gsap.to(slider, {
            duration: 0.35,
            x: "-=" + (distance + 30),
            skewX: function (v) {
              var skew = InertiaPlugin.getVelocity(proxy, "x") / 200;
              return gsap.utils.clamp(-10, 10, skew);
            },
            overwrite: "auto",
            ease: "power2"
          });
          this.x = this.x - (distance + 30);
        } else {
          //keep track of how far apart the proxy is from the slider because when the user presses down, we want to IMMEDIATELY stop any motion, thus this offset value becomes baked in until release.
          // offset = this.x - slider._gsTransform.x;
          offset = this.x - gsap.getProperty(proxy, "x");

          gsap.killTweensOf(slider); //in case it's moving
          gsap.to(slider, { skewX: 0, duration: 0.2 });
        }
      },
      onDrag: function () {
        gsap.to(slider, {
          duration: 0.8,
          x: () => this.x - offset,
          skewX: function (v) {
            var skew = InertiaPlugin.getVelocity(proxy, "x") / 200;

            // return pressedTop ? -skew : skew;
            return gsap.utils.clamp(-10, 10, skew);
          },
          overwrite: "auto",
          ease: "power2"
        });
      },
      onRelease: function () {
        // if the user just presses down and releases without really moving much at all, there's no need to do a throwProps tween.

        let velocity = InertiaPlugin.getVelocity(proxy, "x");

        if (this.tween && Math.abs(velocity) > 20) {
          gsap.to(slider, {
            overwrite: "auto",
            inertia: { x: { velocity, end: this.endX } }
          });
        }

        gsap.to(slider, { skewX: 0, duration: 0.5, overwrite: "auto" });
      }
    });
  }
}
</script>

<style scoped lang="scss">
.c-exp-gallery__slider {
  position: relative;
  width: calc(100vw - 12.5vw);
  margin-left: 12.5vw;
}
.proxy {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
html, body {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  overflow: hidden;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
.c-exp-gallery {
  padding-bottom: calc(500 * (100vw / 1440));
}
.c-exp-gallery__content {
  display: flex;
}
.c-exp-gallery__inner {
  white-space: nowrap;
}
.c-exp-gallery-slide {
  display: inline-block;
  position: relative;
  margin: 0 15px;
  padding: 60px 40px;
}
.c-exp-gallery-slide__card.testimonials {
  width: 380px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.c-exp-gallery-slide__card.indexed {
  width: 600px;
  height: unset;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.c-exp-gallery-slide__card.image {
  width: 400px;
  height: unset;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.c-exp-gallery-slide__content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding-top: calc(35 * (100vw / 1440));
}
.testimonial{
  position: absolute;
  bottom:0;
  left: 0;
}
.testimonialBorder{
  margin-left: 0px;
  width: 100px;
  border: 2px solid #88F332;
}
.slideBg{
  background: black;
}
.slideBg0{
  padding: 0px;
  background: transparent;
}
.sliderArrow{
  width: 60px;
  height: 60px;
  border-radius: 100px;
  position: absolute;
  display: inline-block;
  top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sliderArrow svg{
  width: 40px;
  height: 40px;
}
div.arrowNext{
  right: 12.5vw;
}
div.arrowPrev{
  right: calc(12.5vw + 70px);
}
.arrowPrev svg{
  left: 0;
  transform: rotate(180deg);
}
@media only screen and (max-width: 1024px){
  .c-exp-gallery__slider {
    position: relative;
    width: 90vw;
    margin-left: 0vw;
  }
  .c-exp-gallery-slide {
    padding: 30px 0%;
    margin: 0 5vw;
  }
  .c-exp-gallery-slide__card {
    width: 82vw;
    max-width: 800px;
  }
  .testimonial{
    left: 20px;
  }
  .c-exp-gallery-slide__card.testimonials {
    width: calc(90vw - 40px);
    height: 300px;
    padding: 20px;
  }
  .c-exp-gallery-slide__card.image {
    width: 90vw;
  }
  .c-exp-gallery-slide__card.indexed {
    width: calc(90vw - 40px);
    padding: 20px;
  }
  .sliderArrow{
    width: 30px;
    height: 30px;
    border-radius: 100px;
    position: absolute;
    display: inline-block;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sliderArrow svg{
    width: 20px;
    height: 20px;
  }
  div.arrowPrev{
    left: 1vw;
  }
  div.arrowNext{
    right: -9vw;
  }
}
@media only screen and (min-width: 1920px){
  .c-exp-gallery-slide__card {
    height: 480px;
  }
}

</style>