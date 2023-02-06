<template>
  <div class="mainSection">
    <div class="contactWrapper">
      <div class="contactHalf">
        <BaseTitle style="margin-bottom: 100px;" :align="'left'" :tag="'h2'">Du hast ein spannendes Projekt? Lass uns sprechen! 🎉</BaseTitle>
        <div class="contactDetails">
          <div class="singleContact">
            <span>Email</span>
            <BaseTitle :align="'left'" :tag="'h3'">hallo@greenstein.design</BaseTitle>
            <hr>
          </div>
          <div class="singleContact">
            <span>Telefon</span>
            <BaseTitle :align="'left'" :tag="'h3'">05121 - 672 900 3</BaseTitle>
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
        <div class="contactLeistungWrapper">
          <button v-for="(singleInterest, index, key) in form.interest" :key="key" class="dark" @click="toggleInterest(index)">
            <div class="button-blob dark" :class="singleInterest.hasInterest ? 'active' : ''" />
            <p class="title" :class="singleInterest.hasInterest ? 'active' : ''">{{ singleInterest.title }}</p>
            <p class="title title--hovered" :class="singleInterest.hasInterest ? 'active' : ''"><b>{{ singleInterest.title }}</b></p>
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
          <textarea placeholder="Erzähl uns von deinem Projekt" v-model="form.message"></textarea>
          <hr>
          <BaseButton style="align-self: flex-end; margin-top: 55px" :linkTo="'#'" v-on:click="submitForm()" :theme="'light'" :title="'Senden'" class="toLinkHover" :gs-hover="'Und los! Und los! Und los! Und los! Und los!'" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { gsap, ScrollTrigger} from "gsap/all";
import Cursorfollow from "../components/Cursorfollow";
import BaseButton from "../components/BaseButton";
import BaseTitle from "../components/BaseTitle";

export default {
  name: "Kontakt",
  components: {
    Cursorfollow,
    BaseButton,
    BaseTitle,
  },
  data: function () {
    return {
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
    toggleInterest(num){
      this.form.interest[num].hasInterest = !this.form.interest[num].hasInterest;
    },
    submitForm() {
      const emailBody = {
        "your-name": this.form.nameTest,
        "your-email": this.form.email,
        "your-message": this.form.message,
      };

      const form = new FormData();
      for (const field in emailBody) {
        form.append(field, emailBody[field]);
      }
      axios.post(this.url, form)
          .then((response) => {
            console.log(response);
            this.errors = [];
          })
          .catch((error) => {
            this.errors = error.response.data.message
          });
    }
  },

  mounted() {
    //this.submitForm();
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      immediateRender: false,
      ease: "power1.inOut",
      scrub: true
    });
    ScrollTrigger.batch(".animateFadeInUp", {
      toggleClass: "activeContentUp"
    });
    ScrollTrigger.batch(".animateFadeInUpSecond", {
      toggleClass: "activeContentUpSecond"
    });
    ScrollTrigger.batch(".animateFadeInUpThird", {
      toggleClass: "activeContentUpThird"
    });
  }
}
</script>

<style scoped>
  .contactWrapper{
    display: flex;
    justify-content: center;
    align-items: flex-end;
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
    margin-top: 100px;
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
    margin: 50px 10px 0px 10px;
  }
  .contactForm ::placeholder{
    color: #717171;
  }
</style>