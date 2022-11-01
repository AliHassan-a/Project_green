<template>
  <div class="mainBg">
    <div class="formWrapper">
      <div class="innerWrapper">
        <input type="text" placeholder="Dein Name" v-model="formName"/>
        <input type="email" placeholder="Deine E-Mail" v-model="formMail"/>
        <input type="phone" placeholder="Deine Telefonnummer" v-model="formPhone"/>
      </div>
      <textarea type="message" placeholder="Deine Nachricht" v-model="formMessage" />
    </div>
    <div>
      <span><input type="checkbox" /> Ich akzeptiere die Datenschutzerklärung</span>
    </div>
    <button @click="sendForm()">Senden</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ContactForm",
  data () {
    return {
      formName: "",
      formMail: "",
      formPhone: "",
      formMessage: "",
    }
  },
  methods: {
    async sendForm() {
      console.log("asdasd");
      const emailBody = {
        'your-name':
        this.formName,
        'your-email':
        this.formMail,
        'your-tel':
        this.formPhone,
        'your-message' :
        this.formMessage,
      }
      const form = new FormData();
      for (const field in emailBody) {
        form.append(field, emailBody[field]);
      }

      try {
        const results = await axios.post(
            'https://www.greenstein-backend.grnstn.de/wp-json/contact-form-7/v1/contact-forms/6/feedback',
            form,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
        )
        if(results.status == 200){
          window.location = "danke";
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>

<style scoped>
  .mainBg{
    z-index: 10;
  }
  .formWrapper{
    z-index: 10;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .innerWrapper{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  input, textarea{
    outline: none;

  }
</style>