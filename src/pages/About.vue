<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="contentContainer">
          <HeroTitle
              :main-title="hero.mainTitle"
              :second-title="hero.secondTitle" />
        </div>
      </div>
      <div id="two" class="mainSection section-two">
        <Slider :slideContent="steps" class="animateBlockItem" />
      </div>
      <div id="three" class="mainSection section-three">
        <g-image class="animateBlockItem" src="@/assets/Teambesprechung-Greenstein.webp"></g-image>
        <div class="contentContainer" style="margin: 80px 0px; gap: 50px; align-items: flex-start">
          <div class="innerContentContainer" style="align-items: flex-start">
            <BaseTitle :addClass="'animateBlockHead'" :align="'left'" :tag="'h3'" ><b>Unsere Mission</b></BaseTitle>
            <BaseText :addClass="'animateBlockText'">Digitalisierung zukunftssicher integrieren und umsetzen, durch ehrliche Beratung und individuelle, zeitgemäße Lösungen.</BaseText>
          </div>
          <div class="innerContentContainer">
            <BaseTitle :addClass="'animateBlockHead'" :align="'left'" :tag="'h3'" ><b>Unsere Vision</b></BaseTitle>
            <BaseText :addClass="'animateBlockText'">Durch skalierbaren und nachhaltigen Erfolg gemeinsam groß wachsen.</BaseText>
          </div>
        </div>
      </div>
      <div id="four" class="mainSection section-four greenBg" style="padding: 100px 0px;">
        <div class="mainSection">
          <CardGrid :content="$static.employees" />
        </div>
      </div>
      <StickyImages />
    </div>
  </Layout>
</template>

<script>
import BaseButton from "../components/BaseButton";
import BaseTitle from "../components/BaseTitle";
import ProjectSlider from "../components/ProjectSlider";
import BlogSlider from "../components/BlogSlider";
import Seperator from "../components/Seperator";
import CustomerLogoGlider from "../components/CustomerLogoGlider";
import initGsap from "../misc/gsapBase";
import HeroTitle from "../components/HeroTitle";
import Slider from "../components/Slider";
import StickyImages from "../components/StickyImages";
import CardGrid from "../components/cardGrid";
import BaseText from "../components/BaseText";

export default {
  components: {
    CardGrid,
    StickyImages,
    Slider,
    HeroTitle,
    BaseButton,
    BaseTitle,
    BaseText,
    Seperator,
    ProjectSlider,
    BlogSlider,
    CustomerLogoGlider,
  },
  data() {
    return {
      hero: {
        mainTitle: "Wir sorgen dafür, dass dein Unternehmen gehört wird.",
        secondTitle: "Laut & deutlich"
      },
      steps: [
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
      pageGsap: null,
    }
  },
  beforeDestroy() {
    this.pageGsap.killGsap();
  },
  mounted() {
    this.pageGsap = new initGsap({
      stickyImages: true,
      heroAnimation: true,
    }, this);
  }
}
</script>

<style>
.section-two, .section-four{
  max-width: 100vw;
}
</style>

<static-query>
query{
  employees: allWordPressMitarbeiter{
    edges{
      node{
        title,
        content,
        featuredMedia{
          sourceUrl,
          title,
          altText
        }
      }
    }
  }
}
</static-query>

