<template>
  <div class="mainSection footerWrapper greenBg">
    <div class="footer-overlay greenBg"></div>
    <p class="footer">Du hast ein spannendes Projekt?</p>
    <h2 class="footer">Lass uns sprechen!</h2>
    <div class="footer-content greenColor">
      <div class="footer-inner-content">
        <p class="footer-small">E-MAIL</p>
        <a href="mailto:hallo@greenstein.design" class="footer-link">hallo@greenstein.design</a>
        <p class="footer-small">TELEFON</p>
        <a href="tel:051216729003" class="footer-link">05121 - 672 900 3</a>
      </div>
      <div class="footer-inner-content">
        <p class="footer-small">LEISTUNGEN</p>
        <g-link to="/design-strategie" class="footer-link-small">Design & Strategie</g-link>
        <g-link to="/entwicklung" class="footer-link-small">Entwicklung</g-link>
        <g-link to="/marketing" class="footer-link-small">Marketing</g-link>
      </div>
      <div class="footer-inner-content">
        <p class="footer-small">ÜBER UNS</p>
        <g-link to="/agentur" class="footer-link-small">Unsere Agentur</g-link>
        <g-link to="/kontakt" class="footer-link-small">Kontakt</g-link>
      </div>
    </div>
    <div class="footerBottom" style="z-index: 1;">
      <div class="contentContainer">
        <div style="display: flex;">
          <p style="color:#011713; margin-right: 20px; font-size: 22px;">Impressum</p>
          <p style="color:#011713; font-size: 22px;">Datenschutz</p>
        </div>
        <div style="dispaly: flex; justify-items: flex-end">
          <g-image title="facebook-logo-greenstein" alt="facebook-logo-greenstein" src="@/assets/facebook-f.png" />
          <g-image title="instagram-logo-greenstein" alt="instagram-logo-greenstein" style="margin: 0px 20px;" src="@/assets/instagram.png" />
          <g-image title="linkedIn-logo-greenstein" alt="linkedIn-logo-greenstein" src="@/assets/linkedin.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
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

/* RESPONSIVE */

@media only screen and (max-width: 1024px) {
  .footer-overlay{
    border-radius: 0px;
  }
  p.footer, h2.footer{
    color: #011713;
  }
  h2.footer{
    font-size: 70px;
  }
}
</style>