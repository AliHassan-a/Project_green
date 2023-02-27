<template>
  <Layout>
    <div class="mainSection section-one">
      <div class="innerContentContainer">
        <BaseTitle class="animateBlockHero" :tag="'h1'">{{ $context.acf.titel }}</BaseTitle>
        <g-image class="heroArrow animateBlockHeroArrow" src="@/assets/Pfeile.svg"></g-image>
      </div>
    </div>
    <div class="mainSection section-two">
      <div class="contentContainer">
        <g-image :src="$context.acf.mockup"></g-image>
        <div class="projectInfo">
          <div>
            <BaseTitle :tag="'h2'" :addStyle="'font-size: 14px;text-transform: uppercase;font-weight: 700; margin: 30px 0px 5px;'" :addClass="'lightGreenColor'">Projekt</BaseTitle>
            <BaseTitle :tag="'h4'">{{ $context.acf.zeitraum }}</BaseTitle>
          </div>
          <div>
            <BaseTitle :tag="'h2'" :addStyle="'font-size: 14px;text-transform: uppercase;font-weight: 700; margin: 30px 0px 5px;'" :addClass="'lightGreenColor'">Leistungen</BaseTitle>
            <BaseTitle :tag="'h4'" v-for="(leistung, index, key) in $context.acf.leistungen" :key="key">{{ leistung }}</BaseTitle>
          </div>
          <div>
            <BaseTitle :tag="'h2'" :addStyle="'font-size: 14px;text-transform: uppercase;font-weight: 700; margin: 30px 0px 15px;'" :addClass="'lightGreenColor'">Technologien</BaseTitle>
            <div class="technologies">
              <g-image v-if="$context.acf.technologien.includes('Miro')" src="@/assets/miro.svg"></g-image>
              <g-image v-if="$context.acf.technologien.includes('Photoshop')" src="@/assets/photoshop.svg"></g-image>
              <g-image v-if="$context.acf.technologien.includes('Illustrator')" src="@/assets/illustrator.svg"></g-image>
              <g-image v-if="$context.acf.technologien.includes('Xd')" src="@/assets/xd.svg"></g-image>
              <g-image v-if="$context.acf.technologien.includes('Vue')" src="@/assets/vue.svg"></g-image>
              <g-image v-if="$context.acf.technologien.includes('Wordpress')" src="@/assets/wordpress.svg"></g-image>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mainSection section-three">
      <div class="innerSteps">
        <div class="stepsSection"></div>
        <div class="stepsSection">
          <g-image :src="getImagesArray[0]" class="md-hide" />
          <BaseTitle class="animateBlockHead" :tag="'h3'">Ausgangslage</BaseTitle>
          <BaseText class="animateBlockText">{{ $context.acf.step1Text }}</BaseText>
        </div>
        <div class="stepsSection">
          <g-image :src="getImagesArray[1]" class="md-hide" />
          <BaseTitle class="animateBlockHead" :tag="'h3'">Herausforderung</BaseTitle>
          <BaseText class="animateBlockText">{{ $context.acf.step2Text }}</BaseText>
        </div>
        <div class="stepsSection">
          <g-image :src="getImagesArray[2]" class="md-hide" />
          <BaseTitle class="animateBlockHead" :tag="'h3'">Lösung</BaseTitle>
          <BaseText class="animateBlockText">{{ $context.acf.step3Text }}</BaseText>
        </div>
      </div>
      <div class="imageSteps stickySection m-hide">
        <div class="imageStepsCenter">
          <div class="stepsImageWrapper">
            <transition name="fadeStep" mode="out-in">
              <img :src="currentImage" :key="currentImage">
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="mainSection section-four">
      <div class="stepsSummary">
        <img :src="this.$context.acf.step4Bild2" >
        <img :src="this.$context.acf.step4Bild3" >
        <img :src="this.$context.acf.step4Bild4" >
        <img :src="this.$context.acf.step4Bild5" >
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.section-two{
  max-width: 100vw;
}
.section-two .contentContainer{
  justify-content: flex-start;
  gap: 30px;
}
.section-two .technologies{
  display: flex;
  gap: 10px;
}
.section-three{
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 50px;
}
.section-three .stepsSection{
  height: 100vh;
}
.section-three .stepsSection:first-child, .section-three .stepsSection:last-child{
  height: 50vh;
}
.section-three .innerSteps{
  width: 50%;
}
.section-three .innerSteps div:not(.titleWrapper, .textWrapper){
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section-three .imageSteps{
  width: 100%;
  height: 300vh;
}
.section-three .imageSteps .imageStepsCenter{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.section-three .imageSteps .imageStepsCenter img{
  width: 100%;
}
.section-four .stepsSummary {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
}
.section-four .stepsSummary img{
  width: 50%;
  flex-shrink: 2;
}
.fadeStep-enter-active,
.fadeStep-leave-active {
  transition: opacity 0.2s ease;
}
.fadeStep-enter-from{
  opacity: 0;
}
.fadeStep-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 1024px){
  .section-two{
    margin-top: 100px;
  }
  .section-two .contentContainer{
    flex-direction: column;
  }
  .section-three {
    flex-direction: column;
  }
  .section-three .imageSteps{
    height: unset;
  }
  .section-three .innerSteps{
    width: 100%;
  }
  .section-three .stepsSection{
    margin: 100px 0px;
    height: unset !important;
  }
}
</style>

<script>
import initGsap from "../misc/gsapBase";
import BaseTitle from "../components/BaseTitle";
import BaseText from "../components/BaseText";

export default {
  name: "SingleProject",
  components: {BaseText, BaseTitle},
  data(){
    return {
      currentImage: null,
    }
  },
  computed: {
    getImagesArray(){
      if(this.$context != undefined){
        return [this.$context.acf.step1Image, this.$context.acf.step1Image, this.$context.acf.step2Image, this.$context.acf.step3Image]
      }
    }
  },
  mounted() {
    this.currentImage = this.$context.acf.step1Image;
    this.$root.$on("changeImage", this.onChangeImage);
    setTimeout( () => {
      this.$root.$emit("repaint-bg", 150);
    }, 10);
    new initGsap({
      heroAnimation: true,
      stickySection: true,
    }, this);
  },
  methods: {
    onChangeImage(no){
      this.getImagesArray[no] != undefined ? this.currentImage = this.getImagesArray[no] : this.currentImage = this.currentImage;
    },
    getFormattedDate(date){
      const newDate = new Date(date);
      return newDate.toLocaleDateString('de-de');
    },
    getFeaturedTitle(){
      return this.$context.title;
    }
  },
  metaInfo() {
    return {
      title: this.$context.title,
      meta: [
        { name: 'title', content: this.$context.acf.metaTitle },
        { name: 'description', content: this.$context.acf.metaDescription },
      ]
    }
  }
}
</script>

<style scoped>
</style>