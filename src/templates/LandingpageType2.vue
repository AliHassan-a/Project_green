<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="innerContentContainer head animateBlockHero">
          <BaseTitle :align="'center'" :tag="'h1'" :addClass="'greenColor'" :addStyle="'font-size: 14px; font-weight: 700; text-transform: uppercase;'" >{{ $context.acf.title }}</BaseTitle>
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
  min-height: 100vh;
}

@media only screen and (max-width:1024px){
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
    BaseTitle,
  },
  data(){
    return {}
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