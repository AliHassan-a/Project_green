<template>
  <div class="headerKontakt greenBg">
    <Cursorfollow />
    <div>
      <BaseTitle :align="'center'" :tag="'h1'">Kontakt</BaseTitle>
      <BaseButton :linkTo="'#'" v-on:click="submitForm()" :theme="'dark'" :title="'Senden'" class="toLinkHover" :gs-hover="'Und los! Und los! Und los! Und los! Und los!'" />
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
        nameTest: 'asd',
        email: 'asd@asd.de',
        message: 'asdasd',
      },
      errors: [],
      url: 'https://admin.greenstein.design/wp-json/contact-form-7/v1/contact-forms/23/feedback'
    }
  },
  methods: {
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

.headerKontakt{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>