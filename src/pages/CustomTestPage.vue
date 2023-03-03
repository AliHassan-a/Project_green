<template>
  <div id="page">
    <div id="one" class="mainSection section-one">
      <div class="contentContainer">
        <SliderIndex>
          <div class="box">
            <img src="@/assets/Bilder.webp">
          </div>
          <div class="box">
            <img src="@/assets/Bilder0.webp">
          </div>
          <div class="box">
            <img src="@/assets/Bilder1.webp">
          </div>
          <div class="box">
            <img src="@/assets/Bilder2.webp">
          </div>
          <div class="box">
            <img src="@/assets/Bilder3.webp">
          </div>
          <div class="box">
            <img src="@/assets/Bilder4.webp">
          </div>
        </SliderIndex>
      </div>
    </div>
    <div id="two" class="mainSection section-one">
      <div class="contentContainer">
        <SliderIndex>
          <div class="box testimonials bgBg" v-for="(slide, index, key) in testimonials" :key="key">
            <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.title}}</b></BaseTitle>
            <BaseText :addStyle="'white-space: normal'">{{slide.description}}</BaseText>
            <div class="testimonial">
              <hr class="testimonialBorder">
              <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.testimonialAuthor}}</b></BaseTitle>
              <BaseText :addStyle="'white-space: normal'" :addClass="'greenColor'">{{slide.testimonialPosition}}</BaseText>
            </div>
          </div>
        </SliderIndex>
      </div>
    </div>
  </div>
</template>

<script>
import SliderIndex from "../components/SliderIndex";
import BaseTitle from "../components/BaseTitle";
import BaseText from "../components/BaseText";
export default {
  name: "customTestPage",
  components: {SliderIndex, BaseTitle, BaseText},
  data: function(){
    return {
      testimonials: [
        {
          title: "qwe",
          description: "qe",
          testimonialAuthor: "qwew",
          testimonialPosition: "weq",
        },
        {
          title: "qwe",
          description: "qe",
          testimonialAuthor: "qwew",
          testimonialPosition: "weq",
        },
        {
          title: "qwe",
          description: "qe",
          testimonialAuthor: "qwew",
          testimonialPosition: "weq",
        },
        {
          title: "qwe",
          description: "qe",
          testimonialAuthor: "qwew",
          testimonialPosition: "weq",
        },
        {
          title: "qwe",
          description: "qe",
          testimonialAuthor: "qwew",
          testimonialPosition: "weq",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>