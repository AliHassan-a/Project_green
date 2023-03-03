<template>
  <Layout>
    <div id="page" class="site">
      <StickySection :hero="hero" :stickyContent="'hero'" />
    </div>
  </Layout>
</template>

<script>
import BaseButton from "../components/BaseButton";
import BaseTitle from "../components/BaseTitle";
import initGsap from "../misc/gsapBase";
import HeroTitle from "../components/HeroTitle";
import BaseText from "../components/BaseText";
import StickySection from "../components/StickySection";

export default {
  components: {
    StickySection,
  },
  data() {
    return {
      hero: {
        mainTitle: "Unsere Leistungen",
        mainTitleSecond: "helfen Ihrem Unternehmen",
        secondTitle: "groß & mutig zu werden"
      },
    }
  },
  mounted() {
    new initGsap({
      heroAnimation: true,
      stickySection: true,
    }, this);
  },
  metaInfo() {
    return {
      title: "Leistungen",
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

