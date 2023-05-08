<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="innerContentContainer head animateBlockHero">
          <BaseTitle :align="'center'" :tag="'h1'" :addClass="'greenColor'" :addStyle="'font-size: 14px; font-weight: 700; text-transform: uppercase;'" >{{ $context.acf.title }}</BaseTitle>
          <BaseTitle :align="'center'" :tag="'h2'" :addStyle="'margin: 20px 0px 40px 0px'">{{ $context.acf.subtitle }}</BaseTitle>
          <BaseButton :linkTo="'jetzt-anfragen'" class="animateBlockHeroArrow" :align="'center'" :theme="'light'" :title="'Jetzt anfragen'"/>
        </div>
      </div>
      <div id="two" class="mainSection section-two">
        <div class="contentContainer">
          <SliderIndex>
            <div class="box">
              <g-image src="@/assets/entwicklung/chartexperten.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/entwicklung/dz.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/entwicklung/hilde-gastro.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/entwicklung/petersilien-marketing.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/entwicklung/sv-alfeld.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/entwicklung/tv-plus.webp"></g-image>
            </div>
          </SliderIndex>
        </div>
      </div>
      <div id="three" class="mainSection section-three">
        <div class="contentContainer">
          <div>
            <h2 class="animateBlockHead"> Kreatives Webdesign, </h2>
            <h2 class="animateBlockHead"> das deine Marke </h2>
            <h2 class="animateBlockHead greenColor" style="text-align: left;"><b>repräsentiert</b></h2>
            <g-image class="animateBlockItem heroArrow" src="@/assets/Pfeile.svg"></g-image>
          </div>
          <div>
            <BaseText class="animateBlockText">Unser professioneller Webdesign-Service bietet dir alles, was du brauchst, um eine Website zu erstellen, die deine Marke perfekt repräsentiert und deine Kunden begeistert. Vom Entwurf bis zum Go-Live sind wir bei jedem Schritt an deiner Seite und setzen auf eine enge Zusammenarbeit, um sicherzustellen, dass das Ergebnis deinen Vorstellungen entspricht. Bist du bereit für eine Website, die deine Kunden begeistert und deinem Unternehmen zum Erfolg verhilft? Dann kontaktiere uns für ein kostenloses Erstgespräch und erfahre, wie wir dich unterstützen können. Wir freuen uns auf dich!</BaseText>
          </div>
        </div>
        <CustomerLogoGlider class="logoGlider" :hasAni="false"/>
      </div>
      <div id="four" class="mainSection section-four">
        <div class="innerContentContainer">
          <HoverSection :content="hoverSection" />
        </div>
      </div>
      <div id="five" class="mainSection section-five">
        <StickyProjects :projects="projectsMain" />
      </div>
      <div id="six" class="mainSection section-six">
        <div class="innerContentContainer">
          <BaseTitle style="margin-bottom: 20px;" :align="'left'" :tag="'h2'">Häufig gestellte Fragen</BaseTitle>
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
.section-one{
  min-height: 70vh;
}
.section-two{
  min-height: 0px;
  min-width: 100vw;
  margin: 100px 0px;
}
.section-three{
  min-height: 70vh;
}
.section-three .contentContainer{
  gap: 30px;
  align-items: flex-start;
}
.section-three .contentContainer div:first-child{
  width: 100%;
  min-width: 35em;
}
.section-three .logoGlider{
  position: relative;
  bottom: unset;
  margin-top: 10%;
}
.section-four{
  min-height: 70vh;
}
.section-five{
  min-height: 0px;
}

@media only screen and (max-width:1024px){
  .section-five .contentContainer{
    gap: 100px;
    flex-direction: column;
    min-width: unset;
  }
  .section-five .contentContainer div:first-child{
    width: 100%;
    min-width: unset;
  }
  .section-five .contentContainer div:nth-child(2){
    min-width: unset;
  }
  .section-six{
    margin-top: 100px;
  }
}
</style>

<script>
import Dropdown from "../components/Dropdown";
import HoverSection from "../components/HoverSection"
import initGsap from "../misc/gsapBase";
import BaseTitle from "../components/BaseTitle";
import BaseButton from "../components/BaseButton";
import HeroTitle from "../components/HeroTitle";
import BaseText from "../components/BaseText";
import CustomerLogoGlider from "../components/CustomerLogoGlider";
import StickyProjects from "../components/StickyProjects";
import SliderIndex from "../components/SliderIndex";

export default {
  name: "LandingpageType1",
  components: {
    CustomerLogoGlider,
    BaseText,
    HeroTitle,
    BaseButton,
    BaseTitle,
    Dropdown,
    HoverSection,
    SliderIndex,
    StickyProjects,
  },
  data(){
    return {
      projectsMain: [
        {
          title: "chartexperten",
          color: "#1A102E",
          text: "Web App & Branding für Chartexperten",
          hover: "Design & Strategie - Entwicklung",
          link: "/projekte/chartexperten",
          logo: require("@/assets/projects/chartexperten/chartexperten-logo.svg"),
          mockup: require("@/assets/projects/chartexperten/chartexperten-mockup.webp"),
        },
        {
          title: "Eintracht Hildesheim",
          color: "#406B2B",
          text: "Branding & Webdesign für Eintracht Hildesheim",
          hover: "Design & Strategie - Branding - Entwicklung",
          link: "/projekte/eintracht-hildesheim",
          logo: require("@/assets/projects/eintracht-hildesheim/eintracht-hildesheim-logo.svg"),
          mockup: require("@/assets/projects/eintracht-hildesheim/eintracht-hildesheim-mockup.webp"),
        },
        {
          title: "Kematherm",
          color: "#1A4C7D",
          text: "Performance + für Kematherm",
          hover: "Design & Strategie - Entwicklung",
          link: "/projekte/kematherm",
          logo: require("@/assets/projects/kematherm/kematherm-logo.svg"),
          mockup: require("@/assets/projects/kematherm/kematherm-mockup.webp"),
        },
        {
          title: "Schweizer Immobilienmanufaktur",
          color: "#000000",
          text: "Branding & Webdesign für die Schweizer Immobilienmanufaktur",
          hover: "Design & Strategie - Entwicklung",
          link: "/projekte/schweizer-immobilienmanufaktur",
          logo: require("@/assets/projects/schweizer-immobilienmanufaktur/schweizer-immobilienmanufaktur-logo.svg"),
          mockup: require("@/assets/projects/schweizer-immobilienmanufaktur/schweizer-immobilienmanufaktur-mockup.webp"),
        },
      ],
    }
  },
  mounted() {
    if (initGsap != false) {
      new initGsap({}, this);
    }
  },
  metaInfo() {
    return {
      title: this.$context.title,
      meta: [
        { name: 'title', content: this.$context.acf.metaTitle },
        { name: 'description', content: this.$context.acf.metaDescription},
        { name: 'og:title', content: this.$context.acf.metaTitle },
        { name: 'og:description', content: this.$context.acf.metaDescription },
        { name: 'og:image', content: "https://greenstein.design/Teambesprechung-Greenstein.webp"},
        { name: 'twitter:title', content: this.$context.acf.metaTitle },
        { name: 'twitter:description', content: this.$context.acf.metaDescription },
      ],
      script: [
        { innerHTML: '{"@context":"https://schema.org/","@type":"Product","name":"Greenstein Designagentur","description":"Branding, Entwicklung, Strategie","aggregateRating":{"@type":"AggregateRating","reviewCount":56,"ratingValue":4.95,"bestRating":5,"worstRating":1}}', type: 'application/ld+json' }
      ]
    }
  }
}
</script>