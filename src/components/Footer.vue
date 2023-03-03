<template>
  <div class="mainSection footerWrapper greenBg">
    <div class="footer-overlay greenBg"></div>
    <p class="footer">Du hast ein spannendes Projekt?</p>
    <g-link :to="'/jetzt-anfragen'" style="z-index: 1">
      <h2 class="footer">Lass uns sprechen!</h2>
    </g-link>
    <div class="footer-content greenColor">
      <div class="footer-inner-content">
        <p class="footer-small">E-MAIL</p>
        <a href="mailto:hallo@greenstein.design" class="footer-link footer-hover">hallo@greenstein.design</a>
        <p class="footer-small">TELEFON</p>
        <a href="tel:051216729003" class="footer-link footer-hover">05121 - 672 900 3</a>
      </div>
      <div class="footer-inner-content">
        <p class="footer-small">LEISTUNGEN</p>
        <g-link to="/leistungen/design-strategie" v-reload class="footer-link-small footer-hover">Design & Strategie</g-link>
        <g-link to="/leistungen/entwicklung" v-reload class="footer-link-small footer-hover">Entwicklung</g-link>
        <g-link to="/leistungen/marketing" v-reload class="footer-link-small footer-hover">Marketing</g-link>
      </div>
      <div class="footer-inner-content">
        <p class="footer-small">ÜBER UNS</p>
        <g-link to="/agentur" v-reload class="footer-link-small footer-hover">Unsere Agentur</g-link>
        <g-link to="/nachhaltigkeit" v-reload class="footer-link-small footer-hover">Nachhaltigkeit</g-link>
        <g-link to="/kontakt" v-reload class="footer-link-small footer-hover">Kontakt</g-link>
      </div>
    </div>
    <div class="footerBottom" style="z-index: 1;">
      <div class="contentContainer">
        <div style="display: flex;">
          <g-link to="/impressum" v-reload class="imprintAndDataprot blackColor footer-hover">Impressum</g-link>
          <g-link to="/datenschutz" v-reload class="imprintAndDataprot blackColor footer-hover">Datenschutz</g-link>
          <p class="imprintAndDataprot blackColor footer-hover" @click="emitOpenCookies">Cookies</p>
        </div>
        <div class="socialWrapper">
          <a href="https://www.facebook.com/greenstein.designagentur/">
            <g-image class="footer-hover" title="facebook-logo-greenstein" alt="facebook-logo-greenstein" src="@/assets/facebook-f.webp" />
          </a>
          <a href="https://www.instagram.com/greenstein.design/">
            <g-image class="footer-hover" title="instagram-logo-greenstein" alt="instagram-logo-greenstein" src="@/assets/instagram.webp" />
          </a>
          <a href="https://de.linkedin.com/company/greenstein-designagentur">
            <g-image class="footer-hover" title="linkedIn-logo-greenstein" alt="linkedIn-logo-greenstein" src="@/assets/linkedin.webp" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Seperator from "./Seperator";
export default {
  name: "Footer",
  components: {Seperator},
  methods: {
    emitOpenCookies(){
      this.$root.$emit("openCookies");
    }
  }
}
</script>

<style scoped lang="scss">
.mainSection{
  margin-top: 20vh;
  height: 80vh;
  max-height: 80vh;
  min-height: 80vh;
  max-width: 100vw;
  margin-left: 0;
  padding: 0px 12.5vw;
}
div.footerWrapper{
  margin-top: 250px;
}
svg{
  margin-top: -200px;
  height: 200px;
  width: 100vw;
}
.footer-overlay{
  position: absolute;
  top: -150px;
  height: 300px;
  left: 0;
  left:unset;
  width: 100vw;
  border-radius: 0px;
  z-index: 0;
  clip-path: ellipse(70% 0% at 50% 50%);
}
p.footer{
  z-index: 1;
  color: black;
}
h2.footer{
  font-size: 126px;
  color: black;
  z-index: 1;
  font-weight: 700;
  font-feature-settings: 'calt' 0, 'calt' 0;
  text-align: center;
}
.footer-content{
  margin-top: 5%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.footer-inner-content{
  display: flex;
  flex-direction: column;
}
.footer-small{
  color: black;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 20px;
}
.footer-link{
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 60px;
  text-decoration: underline;
  text-underline-offset: 20px;
  text-decoration-thickness: 1px;
  color: black;
}
.footer-link-small{
  font-size: 22px;
  font-weight: 600;
  text-decoration: underline;
  color: black;
  text-underline-offset: 10px;
  text-decoration-thickness: 1px;
  margin-bottom: 20px;
}
.footerBottom{
  width: 100%;
  z-index: 1;
  align-self: flex-end;
}
.footerBottom .contentContainer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.imprintAndDataprot{
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;
}
.socialWrapper img{
  margin-left: 20px;
}
.footer-hover{
  transform-origin: center;
  transition: transform 0.3s ease-out;
}
.footer-hover:hover{
  transform: scale(0.96);
}

/* RESPONSIVE */

@media only screen and (max-width: 1024px) {
  .mainSection{
    height: unset;
    max-height: unset;
    padding: 0px 5vw;
  }
  div.footerWrapper{
    margin-top: 100px;
  }
  .footer-overlay{
    border-radius: 0px;
  }
  p.footer, h2.footer{
    color: #011713;
  }
  h2.footer{
    font-size: 70px;
    line-height: 70px;
    margin-bottom: 50px;
  }
  .footer-content{
    flex-direction: column;
    gap: 20px;
  }
  .footer-small{
    font-size: 12px;
    margin-bottom: 10px;
  }
  .footer-link{
    font-size: 24px;
    margin-bottom: 20px;
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-thickness: 1px;
    color: black;
  }
  .footer-link-small {
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline;
    color: black;
    text-underline-offset: 10px;
    text-decoration-thickness: 1px;
  }
  .imprintAndDataprot{
    font-size: 15px;
    margin-right: 15px;
  }
  .socialWrapper img{
    margin-left: 10px;
    width: 10px;
  }
  .footer-hover{
    transform-origin: center;
    transition: unset;
    transform: unset !Important;
  }
  .footer-hover:hover{
    transform: scale(1);
  }
  .footerBottom{
    margin-bottom: 30px;
  }
}
</style>