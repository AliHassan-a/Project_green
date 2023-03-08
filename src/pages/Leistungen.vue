<template>
  <Layout>
    <div id="page" class="site">
      <StickySection :hero="hero" :stickyContent="'hero'" />
    </div>
  </Layout>
</template>

<script>
import initGsap from "../misc/gsapBase";
import StickySection from "../components/StickySection";

export default {
  components: {
    StickySection,
  },
  data() {
    return {
      hero: {
        mainTitle: "Unsere Leistungen",
        mainTitleSecond: "helfen deinem Unternehmen",
        secondTitle: "groß & mutig zu werden"
      },
    }
  },
  mounted() {
    new initGsap({
      heroAnimation: true,
      simpleStickySection: true,
    }, this);
  },
  metaInfo() {
    return {
      title: "Leistungen | Greenstein Designagentur",
      meta: [
        { name: 'title', content: "Leistungen | Greenstein Designagentur" },
        { name: 'description', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'og:title', content: "Leistungen | Greenstein Designagentur" },
        { name: 'og:description', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'twitter:title', content: "Leistungen | Greenstein Designagentur" },
        { name: 'twitter:description', content: "Strategie & Marketing - Entwicklung - Performance" },
      ],
      script: [
        { innerHTML: '{"@context":"https://schema.org/","@type":"Product","name":"Greenstein Designagentur","description":"Branding, Entwicklung, Strategie","aggregateRating":{"@type":"AggregateRating","reviewCount":56,"ratingValue":4.95,"bestRating":5,"worstRating":1}}', type: 'application/ld+json' }
      ]
    }
  }
}
</script>

