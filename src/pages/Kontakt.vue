<template>
  <div class="mainSection">
    <div class="contactWrapper">
      <div class="contactHalf">
        <BaseTitle style="margin-bottom: 100px;" :align="'left'" :tag="'h2'">Du hast ein spannendes Projekt? Lass uns sprechen! 🎉</BaseTitle>
        <div class="contactDetails">
          <div class="singleContact">
            <span>Email</span>
            <a href="mailto:hallo@greenstein.design">
              <BaseTitle :align="'left'" :tag="'h3'">hallo@greenstein.design</BaseTitle>
            </a>
            <hr>
          </div>
          <div class="singleContact">
            <span>Telefon</span>
            <a href="tel:051216729003">
              <BaseTitle :align="'left'" :tag="'h3'">05121 - 672 900 3</BaseTitle>
            </a>
            <hr>
          </div>
          <div class="singleContact">
            <span>Adresse</span>
            <BaseTitle :align="'left'" :tag="'h3'">Schützenwiese 25</BaseTitle>
            <hr>
            <BaseTitle :align="'left'" :tag="'h3'">31137 Hildesheim</BaseTitle>
            <hr>
          </div>
        </div>
      </div>
      <div class="contactHalf blackBg rightContactHalf">
        <p style="margin-bottom: 10px">Ich bin interessiert an:</p>
        <div class="checkBoxWrapper">
          <button v-for="(checkBox, checkboxIndex, checkBoxKey) in form.interest"
                  :key="checkBoxKey"
                  class="dark" :class="checkBox.hasInterest ? 'customGreenBtn' : ''"
                  @click="toggleInterest(checkboxIndex)">
            <div class="button-blob dark"/>
            <span class="title" :class="checkBox.hasInterest ? 'title--hovered' : ''">{{ checkBox.title }}</span>
            <span class="title title--hovered"><b>{{ checkBox.title }}</b></span>
          </button>
        </div>
        <form class="contactForm">
          <input type="text" placeholder="Dein Name" v-model="form.name">
          <hr>
          <input type="email" placeholder="Deine E-mail-Adresse" v-model="form.email">
          <hr>
          <input type="tel" placeholder="Deine Telefonnummer" v-model="form.tel">
          <hr>
          <input type="text" placeholder="Dein Unternehmen" v-model="form.company">
          <hr>
          <div class="radioWrapper">
            <div @click="toggleDatenschutz()"
                 :class="datenschutz ? 'activeRadio' : ''" class="radioBtn" >
              <div class="radioCircle" />
              <p style="font-size: 14px;">Ich habe die <a href="/datenschutz"><u>Datenschutzerklärung</u></a> gelesen - Ich bin einverstanden!</p>
            </div>
          </div>
          <button
              type='button'
              style="align-self: flex-end; margin-top: 55px" v-on:click="submitForm()"
              class="toLinkHover light submitBtn"
              :gs-hover="'Und los! Und los! Und los! Und los! Und los!'">
            <div class="button-blob light" />
            <span class="title">Senden</span>
            <span class="title title--hovered"><b>Senden</b></span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cursorfollow from "../components/Cursorfollow";
import BaseButton from "../components/BaseButton";
import BaseTitle from "../components/BaseTitle";
import initGsap from "../misc/gsapBase";

export default {
  name: "Kontakt",
  components: {
    Cursorfollow,
    BaseButton,
    BaseTitle,
  },
  data: function () {
    return {
      datenschutz: false,
      form: {
        name: '',
        email: '',
        tel: '',
        company: '',
        message: '',
        interest: [
          {title:"Design", hasInterest: false},
          {title:"Entwicklung", hasInterest: false},
          {title:"Marketing", hasInterest: false},
        ],
        files: '',
      },
      errors: [],
      url: 'https://admin.greenstein.design/wp-json/contact-form-7/v1/contact-forms/23/feedback'
    }
  },
  methods: {
    toggleDatenschutz(){
      this.datenschutz = !this.datenschutz;
    },
    toggleInterest(num){
      this.form.interest[num].hasInterest = !this.form.interest[num].hasInterest;
    },
    submitForm() {
      if(!this.datenschutz &&
         this.form.email.includes("@")) {
        return ""
      } else {
        document.querySelector(".submitBtn").style.opacity = 0;
        document.querySelector(".submitBtn").style.pointerEvents = "none";
        const emailBody = {
          "your-name": this.form.name,
          "your-email": this.form.email,
          "your-message": this.form.message,
        };

        const form = new FormData();
        for (const field in emailBody) {
          form.append(field, emailBody[field]);
        }
        axios.post(this.url, form)
            .then((response) => {
              console.log(response.data.status);
              if(response.data.status){
                window.location = "/vielen-dank";
              };
              this.errors = [];
            })
            .catch((error) => {
              this.errors = error.response.data.message
            });
      }
    }
  },
  mounted() {
    new initGsap({}, this);
  },
  metaInfo() {
    return {
      title: "Kontakt",
      meta: [
        { name: 'title', content: "Designagentur" },
        { name: 'description', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'og:title', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'og:description', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'twitter:title', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'twitter:description', content: "Strategie & Marketing - Entwicklung - Performance" },
      ]
    }
  }
}
</script>

<style scoped>
  .contactWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    gap: 50px;
    margin-top: 100px;
  }
  .contactHalf{
    width: 100%;
  }
  /* LEFT SIDE */
  .contactDetails{
    width: 81%;
  }
  .singleContact{
    margin-top: 20px;
  }
  /* RIGHT SIDE */
  .rightContactHalf{
    padding: 50px;
  }
  .contactLeistungWrapper{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .contactForm{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin-top: 0px;
  }
  .contactForm hr{
    width: 100%;
    background: #707070;
  }
  .contactForm input, .contactForm textarea{
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    color:#717171;
    font-size: 18px;
    font-weight: 500;
    margin: 20px 10px 0px 10px;
  }
  .contactForm ::placeholder{
    color: #717171;
  }
  /*  CHECKBOX */
  .checkBoxWrapper{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    flex-direction:row;
  }
  button.dark{
    transition: font-weight 0.3s linear;
    border: 1px solid rgba(255,255,255,0.25);
  }
  .customGreenBtn{
    background: #88F332 !important;
    border-color: #88F332;
    font-weight: 700;
  }
  .radioWrapper{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
  }
  .radioWrapper .radioBtn{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    cursor: pointer;
  }
  .radioBtn .radioCircle{
    border: 2px solid #E7FFD3;
    border-radius: 12px;
    width: 16px;
    height: 16px;
  }
  .radioBtn p{
    transition: color 0.3s ease;
  }
  .radioBtn:hover p{
    color: #88F332;
  }
  .radioBtn.activeRadio p{
    color: #88F332;
  }
  .radioBtn.activeRadio .radioCircle{
    border-color: #88F332;
  }
  .radioBtn .radioCircle:after{
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    left: 3px;
    top: 3px;
    border-radius: 10px;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  .radioBtn.activeRadio .radioCircle:after{
    background-color: #88F332;
  }
  .submitBtn{
    transition: all 0.5s ease;
  }
  @media only screen and (max-width: 1024px){
    button.dark:hover{
      background: inherit;
    }
    .contactWrapper{
      flex-direction: column;
      width: 100%;
    }
    .rightContactHalf{
      padding: 20px;
      width: calc(90vw - 40px);
    }
  }
</style>