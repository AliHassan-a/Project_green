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
    HeroTitle,
    BaseButton,
    BaseTitle,
    BaseText,
  },
  data() {
    return {
      hero: {
        mainTitle: "Unsere digitalen Dienstleistungen",
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
  }
}
</script>

