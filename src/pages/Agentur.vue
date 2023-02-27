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
        <div class="innerContentContainer">
          <h2 class="animateBlockHead fullWidthInnerHead"> Unsere Leitsätze </h2>
          <Slider :slideContent="steps" :slideType="'indexed'" :hasNumber="true" class="animateBlockItem" />
        </div>
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
      <StickyImages :imageSet="'about'" />
    </div>
  </Layout>
</template>

<script>
import BaseButton from "../components/BaseButton";
import BaseTitle from "../components/BaseTitle";
import Seperator from "../components/Seperator";
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
          title: 'Gemeinsam zum Ziel',
          description: 'Wir glauben, dass das Arbeiten im Team der Schlüssel zum Erfolg ist. Zusammen arbeiten wir von der Idee bis zur Umsetzung ein überwältigendes Ergebnis aus, denn die Zufriedenheit des Kunden steht an erster Stelle. Kunden sind Freunde.'
        },
        {
          title: 'Bleibe neugierig',
          description: 'Neue Technologien = neue Möglichkeiten = neue Ideen. Wir sind Denker und Macher und schauen neugierig auf alles, was um uns herum passiert. Wir wissen, wie man Innovationen effektiv nutzen kann und sind offen für Veränderung.'
        },
        {
          title: 'Ehrlichkeit',
          description: 'Wir arbeiten partnerschaftlich und auf Augenhöhe, denn gemeinsam erzielen wir die besten Ergebnisse. Dabei sind für uns klare Ansagen und ehrliche Meinung wichtig. Konstruktives Feedback hilft uns, dem Kunden und vor allem dem Projekt.'
        },
        {
          title: 'Vertrauen',
          description: 'Wir tun etwas, was unsere Kunden nicht leisten können - das geht nur mit Vertrauen. Kein „Mal eben schnell und kurz zwischendurch“. Gutes Design und gute Ideen brauchen Zeit.'
        },
      ],
      pageGsap: null,
    }
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
.section-three{
  margin-bottom: 200px;
}
@media only screen and (max-width: 1024px){
  .section-two{
    margin-bottom: 50px;
  }
  .section-three{
    margin-bottom: 50px;
  }
  .section-three .contentContainer{
    flex-direction: column;
  }
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

