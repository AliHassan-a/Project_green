<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="innerContentContainer head animateBlockHero">
          <BaseTitle :align="'center'" :tag="'h1'" :addClass="'greenColor'" :addStyle="'font-size: 14px; font-weight: 700;'" >DESIGN & STRATEGIE</BaseTitle>
          <BaseTitle :align="'center'" :tag="'h2'" :addStyle="'margin: 20px 0px 40px 0px'">Boosten Sie Ihr Business mit kreativem Design und durchdachter Strategie - die perfekte Kombination für Ihren Unternehmenserfolg!</BaseTitle>
          <BaseButton :linkTo="'jetzt-anfragen'" class="animateBlockHeroArrow" :align="'center'" :theme="'light'" :title="'Jetzt anfragen'"/>
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
            <h2 class="animateBlockHead"> Wirksame Strategien & </h2>
            <h2 class="animateBlockHead"> kreatives Design für </h2>
            <h2 class="animateBlockHead greenColor" style="text-align: left;"><b>dein Business</b></h2>
            <g-image class="animateBlockItem heroArrow" src="@/assets/Pfeile.svg"></g-image>
          </div>
          <div>
            <BaseText class="animateBlockText">Wir bringen dein Unternehmen mit einer kreativen Strategie und soliden Design nach vorne und unterstützen dich dabei, dein Business auf das nächste Level zu bringen. Unser erfahrenes Team aus Designern, Entwicklern und Strategen bietet dir ein umfassendes Leistungspaket. Wir entwickeln eine starke Markenidentität und eine erfolgreiche Online-Strategie. Wir bieten dir ein exklusives Branding Design, die Umsetzung einer individuellen Website inklusive UI/UX Design sowie die Erstellung einer Social-Media-Strategie. Wir setzen auf modernste Technologien und eine offene Kommunikation mit dir. Lass uns gemeinsam dein Business auf das nächste Level bringen!</BaseText>
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
          description: 'Gemeinsam entwickeln wir eine erfolgreiche Online-Strategie, die dein Business voranbringt. Wir setzen auf eine fundierte Analyse deiner Zielgruppe und passen die Strategie an deine individuellen Ziele an.',
        },
        {
          title: "Branding Design",
          description: "Mit einem starken Corporate Design inklusive Logo-Entwicklung und Branding Design schaffen wir eine unverwechselbare Marke, die sich von der Konkurrenz abhebt. Wir setzen auf ein Design, das zu deinem Unternehmen passt und deine Werte und Botschaften optimal vermittelt.",
        },
        {
          title: "Webdesign",
          description: "Wir setzen auf individuelle Website-Lösungen, die auf deine Bedürfnisse zugeschnitten sind. Dabei legen wir besonderen Wert auf ein benutzerfreundliches UI/UX Design, das ein positives Nutzererlebnis garantiert.",
        },
        {
          title: "UI/UX Design",
          description: "Ein ansprechendes und benutzerfreundliches Design ist entscheidend für den Erfolg deiner Website oder App. Wir setzen auf UI/UX Design, das begeistert und deine Nutzer überzeugt. Dabei achten wir darauf, dass das Design zu deiner Marke und deinen Zielen passt.",
        },
        {
          title: "Social Media",
          description: "Wir helfen dir dabei, eine erfolgreiche Social-Media-Strategie zu entwickeln und deine Marke optimal auf den gängigen Plattformen zu präsentieren. Dabei setzen wir auf eine maßgeschneiderte Strategie, die zu deinen Zielen und Bedürfnissen passt.",
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
          title: "Kostenloses Erstgespräch",
          content: "Wir bieten dir ein kostenloses Erstgespräch, um deine Bedürfnisse und Ziele kennenzulernen. Dabei besprechen wir auch unser Leistungsangebot und wie wir dir dabei helfen können, dein Business auf das nächste Level zu bringen."
        },
        {
          title: "Konzept",
          content: "Auf Basis des Erstgesprächs entwickeln wir ein individuelles Konzept, das auf deine Bedürfnisse und Ziele abgestimmt ist. Dabei setzen wir auf eine enge Zusammenarbeit mit dir, um sicherzustellen, dass das Konzept deinen Vorstellungen entspricht."
        },
        {
          title: "Gestaltung",
          content: "In der Gestaltungsphase setzen wir das Konzept in die Tat um. Wir setzen auf modernste Technologien und ein kreatives Design, das deine Marke optimal präsentiert und deine Kunden begeistert. Dabei achten wir darauf, dass das Design zu deinen Zielen und Bedürfnissen passt."
        },
        {
          title: "Korrekturen",
          content: "Nach der Gestaltung hast du die Möglichkeit, Korrekturen und Anpassungen vorzunehmen. Wir arbeiten eng mit dir zusammen, um sicherzustellen, dass das Ergebnis deinen Vorstellungen entspricht und perfekt auf deine Bedürfnisse abgestimmt ist."
        },
        {
          title: "Go-Live",
          content: "Nachdem alle Anpassungen vorgenommen wurden, ist es Zeit für den Go-Live. Wir stellen sicher, dass alles reibungslos funktioniert und begleiten dich auch danach weiter, um sicherzustellen, dass deine Online-Präsenz ein voller Erfolg wird."
        },
      ]
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
      title: "greenstein.design",
      meta: [
        { name: 'title', content: "Designagentur" },
        { name: 'description', content: "Strategie & Marketing - Entwicklung - Performance" },
      ]
    }
  }
}
</script>