<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="contentContainer">
          <HeroTitle
              :main-title="hero.mainTitle"
              :second-title="hero.secondTitle" />
          <g-image src="@/assets/3guys.png"></g-image>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BaseButton from "../components/BaseButton";
import BaseTitle from "../components/BaseTitle";
import ProjectSlider from "../components/ProjectSlider";
import BlogSlider from "../components/BlogSlider";
import Testimonials from "../components/SimpleSlider";
import Seperator from "../components/Seperator";
import CustomerLogoGlider from "../components/CustomerLogoGlider";
import initGsap from "../misc/gsapBase";
import HeroTitle from "../components/HeroTitle";

export default {
  components: {
    HeroTitle,
    BaseButton,
    BaseTitle,
    Seperator,
    Testimonials,
    ProjectSlider,
    BlogSlider,
    CustomerLogoGlider,
  },
  data() {
    return {
      hero: {
        mainTitle: "Wir sorgen dafür, dass dein Unternehmen gehört wird.",
        secondTitle: "Laut & deutlich"
      },
      testimonialsContent: [
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
        {
          text: "Weißt dus? Weißt dus? Weißt du es?",
          customer: "Celin",
          position: "Netto Dauerkunde"
        },
      ],
      pageGsap: null,
    }
  },
  beforeDestroy() {
    this.pageGsap.killGsap();
  },
  mounted() {
    this.pageGsap = new initGsap({
      sideScroller:true,
      stickyImages: true,
    }, this);
  }
}
</script>

<style>
/*// content //*/
.pinnedContainerWrapper{
  display: flex;
  width: 100%;
}

.pinnedContainer{
  position: relative;
  top:0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transform-origin: left;
}

div.logos img{
  object-fit: contain;
}

.whirlImage{
  transform-origin: top;
  will-change: transform;
}

.quote{
  background: black;
  width: calc(100% - 100%/6);
  padding: 10%;
}


.leistungWrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 30px 0px;
}
.leistungWrapper img{
  object-fit: contain;
  width: 82px;
}
.leistungWrapper base-button{
  justify-content: flex-end;
}

.lineWrapper{
  width: 100%;
}

/* RESPONSIVE */

@media only screen and (max-width: 1024px) {
  .pinnedContainer{
    margin-top: -50%;
  }
  .leistungWrapper{
    flex-direction: column;
  }
  .leistungText{
    text-align: center;
  }
  div.footerWrapper{
    padding: 0px;
  }
}
</style>

