<template>
  <div class="mainSection footerWrapper">
    <div class="footer-overlay greenBg"></div>
    <p class="footer">Du hast ein spannendes Projekt?</p>
    <h2 class="footer">Lass uns sprechen!</h2>
    <div class="footerBottom animateFadeInUp" style="z-index: 1;">
      <div style="width: 100%; opacity: 0.6">
        <hr style="height: 2px; border: 0; outline: 0px; background: black;" />
      </div>
      <div class="contentContainer">
        <p style="color:#011713">LOREM IPSUM</p>
        <p style="color:#011713">LOREM IPSUM</p>
        <p style="color:#011713">LOREM IPSUM</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style scoped>
div.footerWrapper{
  margin-top: 120px;
}
.footer-overlay{
  position: absolute;
  top:0;
  left:unset;
  width: 100vh;
  height: 100vh;
  border-radius: 1000px;
  z-index: 0;
}
h2.footer{
  font-size: 126px;
  color: #E7FFD3;
  font-weight: 700;
  font-feature-settings: 'calt' 0, 'calt' 0;
}
p.footer, h2.footer{
  z-index: 1;
}
.footerBottom{
  position: absolute;
  width: 100%;
  bottom: 50px;
  z-index: 1;
}
.footerBottom .contentContainer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>