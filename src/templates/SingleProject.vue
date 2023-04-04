<template>
  <Layout>
    <div class="mainSection section-one">
      <div class="innerContentContainer">
        <BaseTitle class="animateBlockHero" :tag="'h1'" :addStyle="'font-size: clamp(1.5em, calc(100vw / 40), 3em)'">{{ $context.acf.titel }}</BaseTitle>
        <g-image class="heroArrow animateBlockHeroArrow" src="@/assets/Pfeile.svg"></g-image>
      </div>
    </div>
    <div class="mainSection section-two">
      <div class="contentContainer">
        <g-image class="animateBlockItem" :src="$context.acf.mockup"></g-image>
        <div class="projectInfo animateBlockItem">
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
              <img v-if="$context.acf.technologien.includes('Miro')" src="@/assets/miro.svg">
              <img v-if="$context.acf.technologien.includes('Photoshop')" src="@/assets/photoshop.svg">
              <img v-if="$context.acf.technologien.includes('Illustrator')" src="@/assets/illustrator.svg">
              <img v-if="$context.acf.technologien.includes('Xd')" src="@/assets/xd.svg">
              <img v-if="$context.acf.technologien.includes('Vue')" src="@/assets/vue.svg">
              <img v-if="$context.acf.technologien.includes('Wordpress')" src="@/assets/wordpress.svg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mainSection section-three">
      <div class="innerSteps">
        <div class="stepsSection"></div>
        <div class="stepsSection">
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
    <div class="mainSection section-four" v-if="this.$context.acf.step4Bild2 != false ">
      <div class="stepsSummary">
        <div>
          <img :src="this.$context.acf.step4Bild2" >
        </div>
        <div>
          <img :src="this.$context.acf.step4Bild3" >
        </div>
        <div>
          <img :src="this.$context.acf.step4Bild4" >
        </div>
        <div>
          <img :src="this.$context.acf.step4Bild5" >
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.section-one .innerContentContainer{
  width: 70%;
  margin-left: -30%;
}
.section-two{
  max-width: 100vw;
}
.section-two .contentContainer{
  justify-content: flex-start;
  gap: 30px;
}
.section-two .contentContainer img{
  justify-content: flex-start;
  gap: 30px;
  width: 70%;
}
.section-two .technologies{
  display: flex;
  gap: 10px;
}
.section-three{
  margin-top: 100px;
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
.section-three .stepsImageWrapper{
  border-radius: 50px;
  transform: scale(1.2) translate3d(-25%,0,0);
}
.section-three .imageSteps .imageStepsCenter{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.section-three .imageSteps .imageStepsCenter img{
  width: 100%;
  max-height: 600px;
}
.section-four .stepsSummary {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
}
.section-four .stepsSummary div{
  width: 25%;
  flex-shrink: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
  .section-one .innerContentContainer{
    width: 100%;
    margin-left: 0%;
  }
  .section-two{
    margin-top: 100px;
    max-width: 90vw;
  }
  .section-two .contentContainer{
    flex-direction: column;
  }
  .section-two .contentContainer .projectInfo{
    width: 100%;
  }
  .section-two .contentContainer .projectInfo img{
    max-width: 50px;
  }
  .section-two .contentContainer img{
    width: 100%;
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
      pages: {
        "Chartexperten": 150,
        "Eintracht Hildesheim": 333,
        "Kematherm": 100,
        "Schweizer Immobilienmanufaktur": 280,
      },
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
    this.paintBg(this.$context.title);
    this.$root.$on("changeImage", this.onChangeImage);
    if (initGsap != false){
      new initGsap({
        heroAnimation: true,
        stickySection: true,
      }, this);
    }
  },
  beforeDestroy() {
    this.$root.$emit("repaint-bg", 0);
  },
  methods: {
    paintBg(pageTitle){
      setTimeout( () => {
        this.$root.$emit("repaint-bg", this.pages[pageTitle]);
      }, 10);
    },
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
      ],
      script: [
        { innerHTML: '{"@context":"https://schema.org/","@type":"Product","name":"Greenstein Designagentur","description":"Branding, Entwicklung, Strategie","aggregateRating":{"@type":"AggregateRating","reviewCount":56,"ratingValue":4.95,"bestRating":5,"worstRating":1}}', type: 'application/ld+json' }
      ]
    }
  }
}
</script>

<style scoped>
</style>