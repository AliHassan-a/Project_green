<template>
  <Layout>
    <div class="mainSection section-one">
      <div class="innerContentContainer">
        <BaseTitle class="animateBlockHero" :tag="'h1'">{{ $context.acf.titel }}</BaseTitle>
        <g-image class="heroArrow animateBlockHeroArrow" src="@/assets/Pfeile.svg"></g-image>
      </div>
    </div>
    <div class="mainSection section-two">
      <div class="contentContainer">
        <g-image :src="$context.acf.mockup"></g-image>
        <div class="projectInfo">
          <div>
            <BaseTitle :tag="'h2'" :addStyle="'font-size: 14px;text-transform: uppercase;font-weight: 700;'" :addClass="'lightGreenColor'">Projekt</BaseTitle>
            <BaseTitle :tag="'h4'">{{ $context.acf.zeitraum }}</BaseTitle>
          </div>
          <div>
            <BaseTitle :tag="'h2'" :addStyle="'font-size: 14px;text-transform: uppercase;font-weight: 700;'" :addClass="'lightGreenColor'">Leistungen</BaseTitle>
            <BaseTitle :tag="'h4'" v-for="(leistung, index, key) in $context.acf.leistungen" :key="key">{{ leistung }}</BaseTitle>
          </div>
          <div>
            <BaseTitle :tag="'h2'" :addStyle="'font-size: 14px;text-transform: uppercase;font-weight: 700;'" :addClass="'lightGreenColor'">Technologien</BaseTitle>
            <div style="display: flex;">
              <g-image v-if="$context.acf.technologien.includes('Miro')" src="@/assets/miro.svg"></g-image>
              <g-image v-if="$context.acf.technologien.includes('Photoshop')" src="@/assets/photoshop.svg"></g-image>
              <g-image v-if="$context.acf.technologien.includes('Illustrator')" src="@/assets/illustrator.svg"></g-image>
              <g-image v-if="$context.acf.technologien.includes('Xd')" src="@/assets/xd.svg"></g-image>
              <g-image v-if="$context.acf.technologien.includes('Vue')" src="@/assets/vue.svg"></g-image>
              <g-image v-if="$context.acf.technologien.includes('Wordpress')" src="@/assets/wordpress.svg"></g-image>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mainSection section-three">
    </div>
    <div class="mainSection section-four">
    </div>
    <div class="mainSection section-five">
    </div>
    <div class="mainSection section-six">
    </div>
  </Layout>
</template>

<style>
.section-two{
  max-width: 100vw;
}
.section-two .contentContainer{
  justify-content: flex-start;
}
</style>

<script>
import initGsap from "../misc/gsapBase";
import BaseTitle from "../components/BaseTitle";

export default {
  name: "SingleProject",
  components: {BaseTitle},
  mounted() {
    setTimeout( () => {
      this.$root.$emit("repaint-bg", 150);
    }, 10);
    this.pageGsap = new initGsap({
      heroAnimation: true,
    }, this);
  },
  methods: {
    getFormattedDate(date){
      const newDate = new Date(date);
      return newDate.toLocaleDateString('de-de');
    },
    getFeaturedTitle(){
      return this.$context.title;
    }
  },
  metaInfo() {
    return {
      title: this.$context.title,
      meta: [
        { name: 'title', content: this.$context.acf.metaTitle },
        { name: 'description', content: this.$context.acf.metaDescription },
      ]
    }
  }
}
</script>

<style scoped>
</style>