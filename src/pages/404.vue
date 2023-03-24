<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="notFoundContainer animateBlockHero">
          <BaseTitle :tag="'h1'" :align="'center'" :addStyle="'font-weight: 700; font-size: 10em;'" :addClass="'greenColor'">404</BaseTitle>
          <BaseTitle :tag="'h3'" :align="'center'" :addStyle="'font-weight: 600;'">Diese Seite wurde nicht gefunden</BaseTitle>
          <BaseText style="margin: 20px 0px 50px;" :addStyle="'text-align: center;'">Es tut uns leid, die von dir gesuchte Seite existiert nicht. Suchst du etwas bestimmtes? <a class="greenColor" href="/kontakt">Wir helfen dir</a> bei deiner Suche! </BaseText>
          <BaseButton :linkTo="''" class="animateBlockHeroArrow" :theme="'light'" :title="'Zurück zum Start'"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BaseTitle from "../components/BaseTitle";
import BaseText from "../components/BaseText";
import BaseButton from "../components/BaseButton";
import initGsap from "../misc/gsapBase";
export default {
  name: "404",
  components: {
    BaseButton,
    BaseText,
    BaseTitle
  },
  mounted() {
    this.pageGsap = new initGsap({
      heroAnimation: true,
    }, this);
  },
  metaInfo() {
    return {
      title: "404 - nicht gefunden - Greenstein Designagentur"
    }
  }
}
</script>

<style scoped>
.mainSection{
  min-height: 100vh;
}
.notFoundContainer{
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>