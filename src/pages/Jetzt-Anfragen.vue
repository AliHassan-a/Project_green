<template>
  <div id="one" class="mainSection section-one">
    <div class="contentContainer">
      <div class="innerContentContainer">
        <BaseTitle addClass="animateBlockHero" :align="'left'" :tag="'h2'" ><b>Starte dein Projekt mit uns!</b></BaseTitle>
        <BaseText> Fülle das Formular aus, und erzähle uns mehr über deine<br> Unternehmensziele. Wir werden uns innerhalb eines<br> Arbeitstages bei dir melden. </BaseText>
        <div class="contactCard">
          <div class="cardInner">
            <img src="@/assets/Rene-Grebenstein.png">
            <div style="margin-left: 20px;">
              <h4><b>Rene Grebenstein</b></h4>
              <p class="greenColor">Inhaber</p>
            </div>
          </div>
          <a class="cardInner" style="margin-bottom: 10px;">
            <img src="@/assets/mail.svg">
            <p style="margin-left: 15px">rene.grebenstein@grnstn.net</p>
          </a>
          <a class="cardInner">
            <img src="@/assets/phone-call.svg">
            <p style="margin-left: 15px"> 05121 – 672 90 03</p>
          </a>
        </div>
      </div>
      <div class="formWrapper">
        <multiStepForm></multiStepForm>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from "../components/BaseTitle";
import multiStepForm from "../components/multiStepForm";
import BaseText from "../components/BaseText";

export default {
  name: "Jetzt-Anfragen",
  components: {
    BaseTitle,
    BaseText,
    multiStepForm,
  }
}
</script>

<style scoped>
.contactCard{
  border-radius: 20px;
  border: 1px solid rgba(136,243,50,0.2);
  background: rgba(0,0,0,0.3);
  padding: 40px;
  width: 80%;
  max-width: 420px;
  margin-top: 80px;
}
.cardInner{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
div.cardInner{
  margin-bottom: 30px;
}
.formWrapper{
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>