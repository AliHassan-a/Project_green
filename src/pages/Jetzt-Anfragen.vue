<template>
  <div id="one" class="mainSection section-one">
    <div class="contentContainer">
      <div class="innerContentContainer">
        <div class="leftInner">
          <BaseTitle addClass="animateBlockHero" :align="'left'" :tag="'h2'" ><b>Starte dein Projekt mit uns!</b></BaseTitle>
          <BaseText> Fülle das Formular aus, und erzähle uns mehr über deine<br> Unternehmensziele. Wir werden uns innerhalb eines<br> Arbeitstages bei dir melden. </BaseText>
          <div class="contactCard">
            <div class="cardInner">
              <g-image src="@/assets/Rene-Grebenstein.webp"></g-image>
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
      </div>
      <div class="formWrapper">
        <multiStepForm @submitForm="submitForm"></multiStepForm>
      </div>
    </div>
    <div class="multistepOverlay" />
  </div>
</template>

<script>
import BaseTitle from "../components/BaseTitle";
import multiStepForm from "../components/multiStepForm";
import BaseText from "../components/BaseText";
import axios from "axios";

export default {
  name: "Jetzt-Anfragen",
  components: {
    BaseTitle,
    BaseText,
    multiStepForm,
  },
  data() {
    return {
      url: 'https://admin.greenstein.design/wp-json/contact-form-7/v1/contact-forms/60/feedback',
    }
  },
  methods: {
    submitForm(data) {
      console.log(data);

      function getCheckBoxValues() {
        let value = "";
        data[0].checkbox.forEach( box => {
          if(box.activeBox){
            value += box.title + ", "
          }
        })
        return value != undefined ? value : "";
      }

      function getRadioValues() {
        let value;
        data[1].radio.forEach( radio => {
          if(radio.activeBox){
            value = radio.title
          }
        })
        return value != undefined ? value : "";
      }

      const emailBody = {
        "your-name": data[2].contact.name,
        "your-email": data[2].contact.email,
        "your-tel": data[2].contact.tel,
        "your-message": data[2].contact.message,
        "your-interest": getCheckBoxValues(),
        "your-timeframe": getRadioValues(),
      };

      const form = new FormData();
      for (const field in emailBody) {
        form.append(field, emailBody[field]);
      }

      axios.post(this.url, form)
          .then((response) => {
            console.log(response)
            if(response.status == 200){
              window.location = "/vielen-dank";
            } else {
              window.alert("etwas ist schiefgelaufen!")
            }
            this.errors = [];
          })
          .catch((error) => {
            this.errors = error.response.data.message
          });
    }
  }
}
</script>

<style scoped>
.mainSection{
  max-width: 100%;
}
.innerContentContainer{
  display: flex;
  flex-direction: column;
}
.leftInner{
  margin-left: 12.5vw;
}
.contentContainer{
  gap: 20px;
}
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.multistepOverlay{
  position: fixed;
  top: 0;
  right: -15px;
  width: calc(50% + 15px);
  height: 100vh;
  z-index: -1;
  background: rgba(0,0,0,0.1);
}
@media only screen and (max-width: 1024px){
  .contentContainer{
    flex-direction: column;
  }
  .leftInner{
    margin: auto;
    width: 90vw;
  }
  .multistepOverlay{
    display: none;
  }
  .contactCard{
    width: calc(90vw - 40px);
    padding: 20px;
  }
}
</style>