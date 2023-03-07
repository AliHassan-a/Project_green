<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="innerContentContainer head animateBlockHero">
          <BaseTitle :align="'center'" :tag="'h1'" :addClass="'greenColor'" :addStyle="'font-size: 14px; font-weight: 700;'" >WEBDESIGN HILDESHEIM</BaseTitle>
          <BaseTitle :align="'center'" :tag="'h2'" :addStyle="'margin: 20px 0px 40px 0px'">Deine Website, perfekt designed für deinen Erfolg in Hildesheim - mit unserem professionellen Webdesign</BaseTitle>
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
            <BaseText class="animateBlockText">Unser Webdesign-Service ist professionell und bietet dir alles, was du brauchst, um eine großartige Website zu erstellen, die deine Marke und deine Kunden optimal präsentiert. Wir begleiten dich von der Idee bis zum Online-Gang und arbeiten eng mit dir zusammen, um sicherzustellen, dass die Website genau deinen Wünschen entspricht. Wenn du bereit bist, eine Website zu haben, die deine Kunden begeistert und deinem Unternehmen zum Erfolg verhilft, dann kontaktiere uns für ein kostenloses Erstgespräch. Wir helfen dir gerne und freuen uns auf deine Anfrage!</BaseText>
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
  name: "Webdesign-Hildesheim",
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
      faq: [
        {
          title: "Modernes Webdesign in Hildesheim",
          content: "Wenn Design und Trends für dich wichtig sind, dann habe ich hier etwas, das dich interessieren könnte! Mit einer hochwertigen Webseite ab nur 1899 Euro kannst du zukunftsorientiert durchstarten und dich von der Konkurrenz abheben. Unsere erfahrenen Webdesigner kümmern sich darum, dass deine Seite auf allen gängigen Plattformen optimal dargestellt wird (responsive) und dir auch ein CMS zur Verfügung steht. Das bedeutet, dass du selbst die volle Kontrolle über deine Webseite hast, ohne auf eine Internetagentur angewiesen zu sein."
        },
        {
          title: "Einfache Verwaltung deiner Webseite",
          content: "Die Gestaltung deiner Webseite ist nicht nur wichtig für ein eindrucksvolles Erscheinungsbild, sondern auch für die Möglichkeit, sie selbstständig und unabhängig des Designers verwalten zu können. Dank unseres CMS (content-management-system) brauchst du keine Vorkenntnisse, um deine Seite zu aktualisieren oder Ankündigungen und Neuerscheinungen sofort zu integrieren. So bleibst du nah an deinen Kunden und kannst ihnen immer die neuesten Infos auf deiner Webseite präsentieren.",
        },
        {
          title: "Wir modernisieren Dein Unternehmen",
          content: "Deine Webseite unterstützt dein Unternehmen schon seit vielen Jahren, aber du merkst, dass sie nicht mehr zeitgemäß ist und dich nicht mehr dabei unterstützt, neue Kunden zu gewinnen? Dann solltest du unbedingt auf den Plan der Greenstein Designagentur setzen. Wir entwickeln unsere Projekte vollkommen responsive und sorgen dafür, dass deine Webseite modern und ansprechend aussieht!\n" +
              "Wir sind überzeugt davon, dass kaum eine andere Webagentur in Hildesheim dir mehr Leistung bei so fairen Konditionen bieten kann wie wir. Deshalb lohnt es sich, mit uns zusammenzuarbeiten, um dein Unternehmen wieder auf die Überholspur zu bringen!",
        },
        {
          title: "SEO-Lösung mit WordPress",
          content: "Wenn du die beste SEO-Lösung mit Content-Management-System aus Hildesheim suchst, dann solltest du unbedingt auf die einzigartige Webseiten-Erstellung durch eine Webagentur Hildesheim setzen, die dir weit mehr als nur die beste Gestaltung bietet. Mit einem integrierten Content-Management-System (CMS), erfolgreicher Werbung und moderner Suchmaschinenoptimierung ist deine Seite für die Zukunft gerüstet.\n" +
              "Unsere erfahrenen Entwickler sorgen dafür, dass dein Online-Auftritt auch von sämtlichen Suchmaschinen im Netz gefunden wird. Das bedeutet, dass deine Werbung präzise am Endkunden ankommt. Vertraue uns und lass uns dir helfen, deine Seite zu optimieren und noch erfolgreicher zu machen!\n" +
              "Klingt gut, oder? Wir sind überzeugt davon, dass kaum eine andere Webagentur in Hildesheim dir mehr Leistung bei so fairen Konditionen bieten",
        },
        {
          title: "Onlineshop Hildesheim",
          content: " Du bist also auf der Suche nach einer Webagentur, die dich beim Start in den Onlineverkauf unterstützt? Das klingt nach einer tollen Idee - schließlich erreicht man heutzutage mit einem Onlineshop eine viel größere Zielgruppe als mit einem Ladengeschäft.\n" +
              "Und damit dein Shop auch so richtig durchstartet, brauchst du eine Agentur, die nicht nur Ahnung von Gestaltung hat, sondern auch die richtigen Werbemaßnahmen plant. Aber keine Sorge, bei uns bist du genau richtig! Wir haben jede Menge Fingerspitzengefühl und wissen genau, wie man deine Produkte gekonnt in Szene setzt.\n" +
              "Und das Beste: Wir sind nicht nur Profis im Webdesign, sondern kennen uns auch bestens in Hildesheim und Umgebung aus. So können wir dir den perfekten Onlineshop maßschneidern, der genau zu dir und deinem Unternehmen passt.\n" +
              "Und was passiert dann? Deine Webpräsenz wird zum absoluten Highlight im Netz! Da können sich die anderen Shops warm anziehen, denn dein Shop wird der neue Stern am Online-Himmel sein. Wir versprechen dir: Niemand wird sich deinem Angebot entziehen können!\n" +
              "Also worauf wartest du noch? Lass uns gemeinsam dein perfektes Webdesign in Hildesheim erschaffen und deinen Onlineshop zum Erfolg führen!",
        },
        {
          title: "Welche Unternehmen in Hildesheim benötigen eine Homepage?",
          content: "heutzutage kommt man nicht mehr um eine ansprechende Webseite herum - das ist einfach das A und O für jedes Unternehmen. Sie steigert nicht nur den Umsatz, sondern macht das Unternehmen auch für potenzielle Kunden zugänglicher und präsenter.\n" +
              "Aber Vorsicht: Bei der Gestaltung der Homepage sollte man gut überlegen, wer dafür verantwortlich ist. Ein Computerfachmann kann schnell hohe Kosten verursachen oder sogar Lizenzen verletzen. Und wenn die Seite dann noch Fehler enthält, kann das Kunden kosten.\n" +
              "Wir bieten dir eine Lösung! Seit 2009 sind wir spezialisiert auf Webdesign in Hildesheim. Wir setzen auf WordPress als Content Management System, damit du selbst alles verwalten kannst. Dabei achten wir darauf, dass das Design individuell auf dein Unternehmen abgestimmt ist und die Corporate Identity berücksichtigt wird.\n" +
              "Selbst komplizierte Webprojekte setzen wir problemlos um und binden auf Wunsch verschiedene Schnittstellen ein. Und das Beste: Wir halten dich immer auf dem Laufenden und berücksichtigen auch aktuelle Trends aus dem World Wide Web. Soziale Netzwerke werden selbstverständlich auch mit eingebunden.\n" +
              "Du hast jederzeit einen Ansprechpartner zur Verfügung und wir bieten sogar Mitarbeiterschulungen an. Also, worauf wartest du? Lass uns gemeinsam eine ansprechende Webseite für dein Unternehmen gestalten!\n",
        }
      ],
      hoverSection: [
        {
          title: "Mehr Kunden",
          icon: "",
          content: "Webdesign umfasst mehr als nur das Erscheinungsbild deiner Website. Da geht es nicht nur um die schöne Optik, sondern um den großen Plan: Du willst mit deiner Website viele Leute erreichen und abholen,? Und genau dafür gibt's uns hier in Hildesheim: Wir machen aus deiner Homepage einen total innovativen Hingucker, der die Kunden anlockt! Je mehr potenzielle Kunden auf deiner Seite abhängen, desto besser ist das für dein Business. Und wir sind hier, um dir dabei zu helfen, also meld dich bei uns, wir machen deine Firma zusammen Groß!"
        },
        {
          title: "Mehr Verkäufe",
          icon: "",
          content: "Eine gut gestaltete Website kann dazu beitragen, dass dein Unternehmen mehr Produkte verkauft und positiv wahrgenommen wird. Im Internet gibt es viele Tools, mit denen man eine Webseite erstellen kann. Aber Vorsicht: Eine Website zu erstellen, die den Erwartungen der Kunden entspricht, ist nicht einfach. Dazu gehört mehr als nur ein paar Bilder und Texte. Eine Website muss die Philosophie und die Marketingstrategie des Unternehmens widerspiegeln. Wenn du Produkte online verkaufen möchtest, müssen diese besonders hervorgehoben und potenziellen Kunden ins Auge fallen."
        },
        {
          title: "Höhere Sichtbarkeit",
          icon: "",
          content: "Damit deine Webseite erfolgreich ist, muss sie auch in Suchmaschinen gefunden werden können. Eine Webagentur kann dir dabei helfen, deine Marketing- und Verkaufsbemühungen über deine Website zu verbessern. Als dein Team für Webdesign in Hildesheim bieten wir verschiedene Dienstleistungen an, um dir zu helfen, eine großartige Webseite zu erstellen und deine Online-Präsenz zu verbessern."
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
      title: "Webdesign Hildesheim",
      meta: [
        { name: 'title', content: "Designagentur" },
        { name: 'description', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'og:title', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'og:description', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'twitter:title', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'twitter:description', content: "Strategie & Marketing - Entwicklung - Performance" },
      ]
    }
  }
}
</script>