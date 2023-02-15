<template>
  <div class="c-exp-gallery__slider js-experience-slider">
    <div class="proxy"></div>
    <div class="c-exp-gallery__inner js-experience-slider__inner">
      <div class="c-exp-gallery__content js-experience-slider__content toDirectionHover">
        <div class="c-exp-gallery-slide js-experience-slide" v-for="(slide, index, key) in slideContent" :key="key">
          <div class="c-exp-gallery-slide__card">
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
    slideWidth: Number,
    hasNumber: Boolean,
    hasTestimonial: Boolean,
  },
  mounted(){
    gsap.registerPlugin(Draggable, InertiaPlugin);

    const container = document.querySelector(".js-experience-slider");
    const proxy = container.querySelector(".proxy");
    const slider = document.querySelector(".js-experience-slider__inner");
    const sliderContent = document.querySelector(".js-experience-slider__content");
    const slides = [...container.querySelectorAll(".js-experience-slide")];

    let sliderWidth = 0;
    let prevSliderWidth = 0;
// let pressedTop = false;
    let offset = 0;

    const setBounds = () => {
      prevSliderWidth = sliderWidth;

      sliderWidth = slides[0].offsetWidth * slides.length + ((slides.length + 1) * window.innerWidth / 30);

      const newX =
          (sliderWidth / 100) *
          (gsap.getProperty(proxy, "x") / (prevSliderWidth / 100));

      gsap.to([slider, proxy], { width: sliderWidth, x: newX });
    };

    setBounds();
    window.addEventListener("resize", setBounds, false);

    const draggable = Draggable.create(proxy, {
      type: "x",
      trigger: container,
      bounds: container,
      zIndexBoost: false,
      throwProps: true,
      edgeResistance: 0.75,
      // edgeResistance: 1,
      dragResistance: 0.4,
      onPress: function (e) {
        var bounds = this.target.getBoundingClientRect();
        // pressedTop = e.clientY < bounds.y + bounds.height / 2;

        //keep track of how far apart the proxy is from the slider because when the user presses down, we want to IMMEDIATELY stop any motion, thus this offset value becomes baked in until release.
        // offset = this.x - slider._gsTransform.x;
        offset = this.x - gsap.getProperty(proxy, "x");

        gsap.killTweensOf(slider); //in case it's moving
        gsap.to(slider, { skewX: 0, duration: 0.2 });
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
  background: black;
}
.c-exp-gallery-slide__card {
  width: 380px;
  height: 350px;
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
@media only screen and (max-width: 1024px){
  .c-exp-gallery__slider {
    position: relative;
    width: 100vw;
    margin-left: 0vw;
  }
  .c-exp-gallery-slide {
    padding: 60px 1%;
  }
  .c-exp-gallery-slide__card {
    width: 82vw;
    max-width: 800px;
  }
}
</style>