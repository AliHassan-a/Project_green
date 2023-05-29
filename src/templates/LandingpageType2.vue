<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="innerContentContainer head animateBlockHero">
          <BaseTitle :align="'center'" :tag="'h1'" :addClass="'greenColor'" :addStyle="'font-size: 14px; font-weight: 700; text-transform: uppercase;'" >VARIABLE SEITENNAME - hat für Error gesorgt</BaseTitle>
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

<!--- HIER Blog export default  erneut integrieren, hat für error gesorgt -->