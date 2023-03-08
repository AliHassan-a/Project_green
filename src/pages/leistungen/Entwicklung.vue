<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="innerContentContainer head animateBlockHero">
          <BaseTitle :align="'center'" :tag="'h1'" :addClass="'greenColor'" :addStyle="'font-size: 14px; font-weight: 700;'" >ENTWICKLUNG</BaseTitle>
          <BaseTitle :align="'center'" :tag="'h2'" :addStyle="'margin: 20px 0px 40px 0px'">Perfekte Symbiose aus Design und Technik - unsere Web-Entwicklung mit modernsten Technologien für Deinen Erfolg</BaseTitle>
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
            <h2 class="animateBlockHead"> Individuelle Webseiten & </h2>
            <h2 class="animateBlockHead"> Apps für </h2>
            <h2 class="animateBlockHead greenColor" style="text-align: left;"><b>deine Marke</b></h2>
            <g-image class="animateBlockItem heroArrow" src="@/assets/Pfeile.svg"></g-image>
          </div>
          <div>
            <BaseText class="animateBlockText">Als erfahrener Dienstleister für Web- und App-Entwicklung bieten wir dir maßgeschneiderte Lösungen, die auf deine individuellen Bedürfnisse zugeschnitten sind. Wir entwickeln moderne und benutzerfreundliche Webseiten und Apps, die auf allen Geräten eine optimale Darstellung und Funktionalität gewährleisten. Dabei setzen wir auf neueste Technologien und Methoden, um dir eine zukunftssichere Lösung zu bieten. Wir begleiten dich von der Konzeption bis hin zur Umsetzung und bieten dir auch anschließend einen zuverlässigen Support. Lass uns gemeinsam deine Online-Präsenz auf das nächste Level bringen.</BaseText>
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
          title: 'WordPress Webseiten',
          description: 'Wir erstellen moderne und benutzerfreundliche WordPress Webseiten, die individuell auf deine Bedürfnisse zugeschnitten sind. Von der Konzeption bis zur Umsetzung begleiten wir dich und setzen dabei auf neueste Technologien.\n',
        },
        {
          title: "Individuelle Webseiten",
          description: 'Mit viel Kreativität und Know-how entwickeln wir individuelle Webseiten, die sich von der Masse abheben. Dabei setzen wir auf moderne Technologien und Methoden, um eine optimale Darstellung und Benutzerfreundlichkeit zu gewährleisten.\n',
        },
        {
          title: "App-Entwicklung",
          description: 'Wir entwickeln professionelle und maßgeschneiderte Apps für Android und iOS, die deinen Anforderungen entsprechen. Dabei setzen wir auf neueste Technologien und sorgen für eine optimale Darstellung und Funktionalität.',
        },
        {
          title: "PWA-Entwicklung",
          description: 'Wir bieten auch die Entwicklung von Progressive Web Apps (PWA) an, die sowohl als Website als auch als App fungieren können. Dabei setzen wir auf die neuesten Technologien und Methoden, um eine optimale Performance und Benutzerfreundlichkeit zu gewährleisten.',
        },
        {
          title: "Wartung",
          description: 'Wir bieten dir auch die Wartung und Pflege deiner Webseiten und Apps an, um eine reibungslose Funktionalität sicherzustellen. Dabei kümmern wir uns um Updates, Backups und Fehlerbehebungen und stehen dir auch für Supportanfragen zur Verfügung.',
        },
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
      ],
      faq: [
        {
          title: "Was ist ein CMS?",
          content: "Ein Content-Management-System (CMS) ist eine Software, die es Nutzern ermöglicht, Inhalte auf einer Website zu erstellen, zu bearbeiten und zu verwalten, ohne umfangreiche Programmierkenntnisse zu benötigen.\n"
        },
        {
          title: "Was ist WordPress?",
          content: "WordPress ist ein beliebtes Open-Source-CMS, das es Nutzern ermöglicht, eine Website zu erstellen und Inhalte zu verwalten, ohne tiefgreifende Kenntnisse in Webentwicklung zu haben. Es bietet eine Vielzahl von Vorlagen und Plugins, die es einfach machen, eine Website zu erstellen."
        },
        {
          title: "Was sind die Vorteile eines CMS?",
          content: "Ein CMS erleichtert es dir Inhalte zu verwalten, ohne umfangreiche Programmierkenntnisse zu benötigen. Es ermöglicht eine schnelle und einfache Veröffentlichung von Inhalten und kann die Effizienz von Website-Updates und -Wartung verbessern."
        },
        {
          title: "Was sind die Nachteile eines CMS?",
          content: "Ein CMS kann unter Umständen die Flexibilität bei der Erstellung von Websites einschränken und erfordert in einigen Fällen zusätzliche Kosten für Vorlagen oder Plugins. Es kann auch Sicherheitsprobleme verursachen, wenn es nicht ordnungsgemäß aktualisiert oder gewartet wird."
        },
        {
          title: "Wann kommt eine PWA zum Einsatz?",
          content: "Eine Progressive Web App (PWA) kann in Fällen eingesetzt werden, in denen eine native App nicht erforderlich ist, aber dennoch eine App-ähnliche Benutzererfahrung gewünscht ist. PWAs können auf allen Geräten über den Browser installiert werden und bieten Funktionen wie Offline-Unterstützung und Push-Benachrichtigungen."
        },
        {
          title: "Kann ich eine Webseite mit WordPress selbst verwalten?",
          content: "Ja, WordPress ist so konzipiert, dass es Nutzern ohne Programmierkenntnisse ermöglicht, Inhalte auf einer Website zu erstellen, zu bearbeiten und zu verwalten. Sie können die Inhalte deiner Website selbst aktualisieren, ohne uns kontaktieren zu müssen."
        },
        {
          title: "Was ist der Unterschied zwischen einer nativen App und einer PWA?",
          content: "Eine native App muss für jedes Betriebssystem (z.B. iOS und Android) separat entwickelt werden und wird aus einem App-Store heruntergeladen. Eine PWA ist eine Webanwendung, die auf allen Geräten über den Browser installiert werden kann und Funktionen bietet, die normalerweise mit nativen Apps verbunden sind, wie z.B. Offline-Unterstützung und Push-Benachrichtigungen."
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
      title: "Entwicklung",
      meta: [
        { name: 'title', content: "Web-Entwicklung in Hannover - Greenstein Designagentur" },
        { name: 'description', content: "Wir bieten individuelle Web-Lösungen an. Ob neue Website erstellen oder eine bestehende verbessern - wir haben die perfekte Lösung für Dich" },
      ],
      script: [
        { innerHTML: '{"@context":"https://schema.org/","@type":"Product","name":"Greenstein Designagentur","description":"Branding, Entwicklung, Strategie","aggregateRating":{"@type":"AggregateRating","reviewCount":56,"ratingValue":4.95,"bestRating":5,"worstRating":1}}', type: 'application/ld+json' }
      ]
    }
  }
}
</script>