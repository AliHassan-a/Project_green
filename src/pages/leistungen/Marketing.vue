<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="innerContentContainer head animateBlockHero">
          <BaseTitle :align="'center'" :tag="'h1'" :addClass="'greenColor'" :addStyle="'font-size: 14px; font-weight: 700;'" >MARKETING</BaseTitle>
          <BaseTitle :align="'center'" :tag="'h2'" :addStyle="'margin: 20px 0px 40px 0px'">Ob Google Ads, Social Media oder SEO - wir bringen Deinem Unternehmen nachhaltig mehr Sichtbarkeit, Kunden und Umsätze</BaseTitle>
          <BaseButton :linkTo="'jetzt-anfragen'" class="animateBlockHeroArrow" :align="'center'" :theme="'light'" :title="'Jetzt anfragen'"/>
        </div>
      </div>
      <div id="two" class="mainSection section-two">
        <div class="contentContainer">
          <SliderIndex>
            <div class="box">
              <g-image src="@/assets/marketing/easy-fitness.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/marketing/eintracht.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/marketing/kehr.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/marketing/mivida.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/marketing/kema.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/marketing/mondrowski.webp"></g-image>
            </div>
          </SliderIndex>
        </div>
      </div>
      <div id="three" class="mainSection section-three">
        <div class="contentContainer">
          <div>
            <h2 class="animateBlockHead"> Wir machen Dein </h2>
            <h2 class="animateBlockHead"> Unternehmen sichtbar </h2>
            <h2 class="animateBlockHead greenColor" style="text-align: left;"><b>auf allen Plattformen</b></h2>
            <g-image class="animateBlockItem heroArrow" src="@/assets/Pfeile.svg"></g-image>
          </div>
          <div>
            <BaseText class="animateBlockText">Unsere Leistungsbereich für Online-Marketing umfasst die Erstellung von Online-Kampagnen zur Steigerung der Sichtbarkeit und Bekanntheit von Unternehmen und Produkten. Dabei werden geeignete Kanäle wie Social Media, Suchmaschinenmarketing und Display Advertising genutzt, um gezielte Werbebotschaften an die Zielgruppe zu kommunizieren. Die Erfolgsmessung erfolgt durch die Analyse von Klickzahlen, Conversion-Raten und weiteren Kennzahlen. Ziel ist es, die Reichweite und den Umsatz zu steigern sowie die Kundenbindung zu erhöhen. Der Fokus liegt auf einer zielgerichteten Strategie und einer kontinuierlichen Optimierung der Kampagnen.</BaseText>
          </div>
        </div>
        <CustomerLogoGlider class="logoGlider" :hasAni="false"/>
      </div>
      <div id="four" class="mainSection section-four">
        <div class="innerContentContainer">
          <BaseTitle :align="'left'" :tag="'h2'" :addClass="'greenColor'" :addStyle="'font-size: 14px; font-weight: 700;'" >UNSER ABLAUF</BaseTitle>
          <HoverSection :content="hoverSection" :type="'ablauf'" />
        </div>
      </div>
      <div id="five" class="mainSection section-five">
        <div class="innerContentContainer">
          <BaseTitle class="fullWidthInnerHead" :align="'left'" :tag="'h2'">Unsere Leistungen</BaseTitle>
          <BaseText class="fullWidthInnerHead text">Wir bieten dir eine verschiedene Bandbreite an Strategie und Designleistungen.</BaseText>
          <SliderIndex>
            <div class="box blackBg steps" v-for="(slide, index, key) in steps" :key="key">
              <BaseTitle :class="'greenColor'" :tag="'h3'"><span style="font-weight: 800;">{{index+1}}.</span></BaseTitle>
              <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.title}}</b></BaseTitle>
              <BaseText :addStyle="'white-space: normal'">{{slide.description}}</BaseText>
            </div>
          </SliderIndex>
        </div>
      </div>
      <div id="last" class="mainSection section-last">
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
.section-five .fullWidthInnerHead{
  padding-bottom: 15px;
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
  margin: 200px auto;
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
import HeroTitle from "../../components/HeroTitle";
import BaseText from "../../components/BaseText";
import CustomerLogoGlider from "../../components/CustomerLogoGlider";
import SliderIndex from "../../components/SliderIndex";

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
    SliderIndex,
  },
  data(){
    return {
      steps: [
        {
          title: 'SEO',
          description: 'Durch Suchmaschinenoptimierung (SEO) wird die Sichtbarkeit von Webseiten in Suchmaschinen verbessert. Keyword-Recherche, On-Page-Optimierung und Backlink-Strategien sorgen für ein höheres Ranking und mehr Traffic.',
        },
        {
          title: 'Google Ads',
          description: 'Mit Google Ads (früher AdWords) schalten wir für Dich gezielt Werbung. Keyword-basierte Anzeigen erscheinen in den Suchergebnissen oder auf anderen Webseiten. Budget, Zielgruppe und Werbeformate werden individuell definiert angepasst.',
        },
        {
          title: 'Social Media Ads',
          description: 'Soziale Netzwerke wie Facebook, Instagram oder LinkedIn bieten vielfältige Möglichkeiten zur Schaltung von Anzeigen. Zielgruppen-Targeting und kreative Werbeformate sorgen für Aufmerksamkeit und Interaktionen.',
        },
        {
          title: 'Display Advertising',
          description: 'Durch gezieltes Schalten von Bannerwerbung auf verschiedenen Webseiten wird die Reichweite gesteigert. Targeting-Optionen und ansprechende Werbeformate sorgen für eine hohe Wahrnehmung.',
        },
        {
          title: 'YouTube Ads',
          description: 'Video-Werbung auf YouTube bietet eine hohe Reichweite und Interaktionen. Verschiedene Anzeigenformate und Targeting-Möglichkeiten sorgen für eine zielgruppenspezifische Ausrichtung.\n',
        },
      ],
      hoverSection: [
        {
          title: "Kostenloses Erstgespräch",
          content: "In einem ersten Gespräch werden deine Ziele, Wünsche und Bedürfnisse besprochen. Dabei werden auch mögliche Leistungen und Kosten erläutert, um eine Basis für eine erfolgreiche Zusammenarbeit zu schaffen."
        },
        {
          title: "Analyse",
          content: "Eine umfassende Analyse deines Unternehmens und Konkurrenten bildet die Basis für eine erfolgreiche Online-Marketing-Strategie. Dazu gehören die Konkurrenzanalyse, Zielgruppenanalyse sowie die Analyse von bestehenden Online-Kanälen."
        },
        {
          title: "Konzeptionierung",
          content: "Auf Basis der Analyse werden die Online-Marketing-Maßnahmen konzipiert. Dabei werden Ziele, Zielgruppen, Budget und KPIs definiert. Ein detaillierter Maßnahmenplan wird erstellt, um eine erfolgreiche Umsetzung zu garantieren."
        },
        {
          title: "Umsetzung",
          content: "Die Umsetzung umfasst die Erstellung von Werbemitteln, die Schaltung von Anzeigen und die Optimierung der Online-Kanäle. Dabei wird auf eine hohe Zielgruppenspezifität und die Einhaltung des Budgets geachtet."
        },
        {
          title: "Monitoring & Reporting",
          content: "Um den Erfolg der Online-Marketing-Maßnahmen zu überprüfen, werden Kennzahlen wie Klickrate, Conversion Rate und ROI überwacht und analysiert. Die Ergebnisse werden in regelmäßigen Reportings aufbereitet und Optimierungspotenziale werden aufgezeigt."
        },
      ],
      faq: [
        {
          title: "Was ist SEO?",
          content: "SEO steht für Search Engine Optimization und bezieht sich auf die Optimierung von Websites für Suchmaschinen wie Google. Ziel ist es, das Ranking der Website in den Suchergebnissen zu verbessern und so mehr Traffic und potenzielle Kunden zu gewinnen."
        },
        {
          title: "Was ist SEA?",
          content: "SEA steht für Search Engine Advertising und bezieht sich auf das Schalten von Anzeigen in Suchmaschinen wie Google. Ziel ist es, gezielt Traffic auf die Website zu lenken und potenzielle Kunden zu gewinnen."
        },
        {
          title: "Was sind die Vorteile von Google Ads?",
          content: "Google Ads ermöglicht es, gezielt und effektiv für bestimmte Keywords und Zielgruppen zu werben. Die Anzeigen können schnell geschaltet werden und bieten eine hohe Reichweite, um potenzielle Kunden zu erreichen. Außerdem kann man die Kampagnen kontrollieren und das Budget flexibel anpassen."
        },
        {
          title: "Wie sollte ein modernes digitales Marketing aufgebaut sein?",
          content: "Ein modernes digitales Marketing sollte aus verschiedenen Elementen bestehen, wie SEO, SEA, Social Media Marketing, Content Marketing und E-Mail-Marketing. Die Strategie sollte auf die Zielgruppe abgestimmt sein und verschiedene Kanäle und Technologien nutzen, um eine maximale Reichweite und Wirkung zu erzielen."
        },
        {
          title: "Welche Plattformen für digitale Werbung gibt es?",
          content: "Es gibt viele verschiedene Plattformen für digitale Werbung, wie Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, YouTube Ads und weitere. Jede Plattform hat ihre eigenen Stärken und Schwächen und sollte entsprechend der Zielgruppe und der Kampagnenziele ausgewählt werden."
        },
      ],
    }
  },
  mounted() {
    this.pageGsap = new initGsap({
      heroAnimation: true,
      marquee: true,
    }, this);
  },
  metaInfo() {
    return {
      title: "Marketing",
      meta: [
        { name: 'title', content: "Online-Marketing in Hannover" },
        { name: 'description', content: "Unsere Online-Marketing-Experten haben das Wissen und die Erfahrung, um dabei zu helfen, Deine Online-Präsenz zu maximieren. Entdecke noch heute, wie wir Dir helfen können, dein Unternehmen erfolgreich zu machen." },
      ],
      script: [
        { innerHTML: '{"@context":"https://schema.org/","@type":"Product","name":"Greenstein Designagentur","description":"Branding, Entwicklung, Strategie","aggregateRating":{"@type":"AggregateRating","reviewCount":56,"ratingValue":4.95,"bestRating":5,"worstRating":1}}', type: 'application/ld+json' }
      ]
    }
  }
}
</script>