<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="innerContentContainer head">
          <BaseTitle :align="'center'" :tag="'h1'" :addClass="'greenColor'" :addStyle="'font-size: 14px; font-weight: 700;'" >DESIGN & STRATEGIE</BaseTitle>
          <BaseTitle :align="'center'" :tag="'h2'" :addStyle="'margin: 20px 0px 40px 0px'">Est ante in nibh mauris cursus. Nunc faucibus a pellentesque amet porttitor eget dolor. Eget gravida cum sociis natoque. </BaseTitle>
          <BaseButton :align="'center'" :theme="'light'" :title="'Button'"/>
        </div>
      </div>
      <div id="two" class="mainSection section-two">
        <div class="contentContainer">
          <Slider :slideType="'image'" :slideContent="sliderImages" />
        </div>
      </div>
      <div id="three" class="mainSection section-three">
        <div class="contentContainer">
          <div>
            <h2 class="animateBlockHead"> Designer, Programmierer </h2>
            <h2 class="animateBlockHead"> Marketing-Experten </h2>
            <h2 class="animateBlockHead greenColor" style="text-align: left;"><b>Freunde</b></h2>
            <g-image class="animateBlockItem heroArrow" src="@/assets/Pfeile.svg"></g-image>
          </div>
          <div>
            <BaseText>Nisi lacus sed viverra tellus in hac habitasse platea. Eget velit aliquet sagittis id consectetur. Mattis molestie a iaculis at. Non enim praesent elementum facilisis leo vel fringilla. Lectus mauris ultrices eros in cursus. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. In fermentum et sollicitudin ac orci phasellus egestas. Pellentesque elit eget gravida cum. Facilisis mauris sit amet massa. Donec pretium vulputate sapien nec sagittis. Sit amet risus nullam eget. Pellentesque sit amet porttitor eget dolor morbi non. Interdum velit laoreet id donec ultrices tincidunt. In massa tempor nec feugiat nisl. Lectus mauris ultrices eros in cursus.
            </BaseText>
          </div>
        </div>
        <CustomerLogoGlider class="logoGlider" :hasAni="false"/>
      </div>
      <div id="four" class="mainSection section-four">
        <div class="innerContentContainer">
          <BaseTitle :align="'left'" :tag="'h2'" :addClass="'greenColor'" :addStyle="'font-size: 14px; font-weight: 700;'" >Unser Ablauf</BaseTitle>
          <HoverSection :content="hoverSection" />
        </div>
      </div>
      <div id="five" class="mainSection section-five">
        <div class="innerContentContainer">
          <BaseTitle class="fullWidthInnerHead" :align="'left'" :tag="'h2'">Unsere Leistungen</BaseTitle>
          <BaseText class="fullWidthInnerHead text"> Tortor posuere ac ut consequat semper viverra nam libero. At auctor urna nunc id cursus metus aliquam eleifend.</BaseText>
          <Slider :slideType="'indexed'" :slideContent="steps" :hasNumber="true" :sliderIndexOnPage="1"/>
        </div>
      </div>
      <div id="last" class="mainSection section-last">
        <div class="innerContentContainer">
          <BaseTitle :align="'left'" :tag="'h2'">Häufig gestellte Fragen</BaseTitle>
          <Dropdown :content="faq" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<style scoped>
.innerContentContainer.head{
  justify-content: center;
  align-items: center;
  max-width: 1024px;
}
.mainSection{
  min-height: 50vh;
}
.section-one{
  min-height: 70vh;
}
.section-two, .section-five{
  min-height: 0px;
  min-width: 100vw;
  margin: 100px 0px;
}
.section-three{
  min-height: 70vh;
}
.section-three .contentContainer{
  gap: 30px;
}
.section-three .contentContainer div:first-child{
  width: 100%;
  min-width: 30rem;
}
.section-three .logoGlider{
  position: relative;
  bottom: unset;
  margin-top: 10%;
}
.section-four{
  margin-top: 100px;
}

@media only screen and (max-width:1024px){
  .section-three .contentContainer{
    gap: 100px;
    flex-direction: column;
    min-width: unset;
  }
  .section-three .contentContainer div:first-child{
    width: 100%;
    min-width: unset;
  }
  .section-three .contentContainer div:nth-child(2){
    min-width: unset;
  }
  .section-four{
    margin-top: 200px;
  }
  .section-four .innerContentContainer div:first-child{
    margin-bottom: 30px;
  }
  .section-five{
    margin: 100px 0px;
  }
  .section-five .text{
    margin-bottom: 30px;
  }
}
</style>

<script>
import Dropdown from "../../components/Dropdown";
import HoverSection from "../../components/HoverSection"
import initGsap from "../../misc/gsapBase";
import BaseTitle from "../../components/BaseTitle";
import BaseButton from "../../components/BaseButton";
import Slider from "../../components/Slider";
import HeroTitle from "../../components/HeroTitle";
import BaseText from "../../components/BaseText";
import CustomerLogoGlider from "../../components/CustomerLogoGlider";

export default {
  name: "design-strategie",
  components: {
    CustomerLogoGlider,
    BaseText,
    HeroTitle,
    BaseButton,
    BaseTitle,
    Dropdown,
    HoverSection,
    Slider,
  },
  data(){
    return {
      sliderImages: [
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
        "@/assets/3guys.webp",
      ],
      steps: [
        {
          title: 'Strategie',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Strategie',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Strategie',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Strategie',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
        {
          title: 'Strategie',
          description: 'Wir handeln mutig und nehmen große Herausforderungen an. Wir behandeln schwierige Aufgaben mit Respekt. Fehler gehören dazu, deswegen haben wir keine Angst davor, sondern lernen aus Ihnen und wachsen daran, um in der Zukunft noch erfolgreicher zu sein.',
        },
      ],
      faq: [
        {
          title: "laaaaaaange lange lange lange Frage?",
          content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          title: "Frage?",
          content: "Content!",
        }
      ],
      hoverSection: [
        {
          title: "Laaaaaaange lange lange lange Frage?",
          icon: "",
          content: "kurze Antwort"
        },
        {
          title: "Laaaaaaange lange lange lange Frage?",
          icon: "",
          content: "kurze Antwort"
        },
        {
          title: "laaaaaaange lange lange lange Frage?",
          icon: "",
          content: "kurze Antwort"
        },
        {
          title: "laaaaaaange lange lange lange Frage?",
          icon: "",
          content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
      ]
    }
  },
  mounted() {
    this.pageGsap = new initGsap({
      marquee: true,
    }, this);
  },
  metaInfo() {
    return {
      title: "greenstein.design",
      meta: [
        { name: 'title', content: "Designagentur" },
        { name: 'description', content: "Strategie & Marketing - Entwicklung - Performance" },
      ]
    }
  }
}
</script>