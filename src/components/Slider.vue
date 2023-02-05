<template>
  <div id="slider" class="slider" @mousemove="mouseMoving" @mouseLeave="stopDrag">
    <div class="slider-cards" :style="`transform: translate3d(${cardsX}px,0,0)`">
      <div @mousedown="startDrag"
           @touchstart="startDrag"
           @mouseup="stopDrag"
           @touchend="stopDrag"
           v-for="(slide, index, key) in slides"
           :key="key"
           class="slider-card">
        <BaseTitle :class="'greenColor'" class="greenIndex" :tag="'h3'"><span style="font-weight: 800;">{{index+1}}.</span></BaseTitle>
        <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.title}}</b></BaseTitle>
        <BaseText>{{slide.description}}</BaseText>
      </div>
    </div>
  </div>

</template>

<script>
import gsap from "gsap/all"
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
  },
  data: function(){
    return {
      config: {
        hasInfo: false,
        hasImage: false
      },
      slides: [
        {
          title: 'Wir sind selbstbewusst',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Wir sind selbstbewusst',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Wir sind selbstbewusst',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Wir sind selbstbewusst',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Wir sind selbstbewusst',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Wir sind selbstbewusst',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
      ],
          selectedIndex: 0,
        dragging: false,
        initialMouseX: 0,
        initialCardsX: 0,
        cardsX: 0
    }
  },
  computed: {
    selectedSlide () {
      return this.slides[this.selectedIndex]
    }
  },
  methods: {
    startDrag (e) {
      this.dragging = true
      this.initialMouseX = e.pageX
      this.initialCardsX = this.cardsX
    },
    stopDrag () {
      this.dragging = false
      let cardEl = document.querySelector(".slider-card");
      const cardWidth = cardEl.clientWidth + 30;
      const nearestSlide = -Math.round(this.cardsX / cardWidth)
      this.selectedIndex = Math.min(Math.max(0, nearestSlide), this.slides.length -2)
      gsap.to(this, 0.3, {cardsX: -this.selectedIndex * cardWidth})
    },
    mouseMoving (e) {
      if(this.dragging) {
        const dragAmount = e.pageX - this.initialMouseX
        const targetX = this.initialCardsX + dragAmount
        this.cardsX = targetX
      }
    }
  }
}

</script>

<style scoped lang="scss">
.slider {
  overflow: hidden;
  width: 100%;
}

.slider-cards {
  position: relative;
  width: 5000px;
  margin: 20px 50px;
  z-index: 1;
}

.slider-card {
  display: inline-block;
  overflow: hidden;
  width: 500px;
  margin-right: 30px;
  background: black;
  padding: 60px 2%;
}
.slider-card img {
  width: 100%;
}

.slider-button {
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  border: none;
  color: white;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}

.greenIndex{
  position: absolute;
  left: 7%;
}
</style>