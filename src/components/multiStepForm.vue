<template>
  <div class="multiStepForm">
    <div class="stepsTimelines">
      <div class="stepsTimeline" v-for="(step, index, key) in steps" :key="key">
        <p class="stepsTitle" :class="index <= activeStep ? 'greenStepsTitle' : ''" @click.prevent="setActive(index)">{{ step.title }}</p>
        <div v-if="index < steps.length - 1 " :class="activeStep > index ? 'greenBg' : 'lightGreenBg'" class="stepsBar"></div>
      </div>
    </div>
    <div class="stepsContentWrapper">
      <div class="stepsContent">
        <transition name="multiStepHead" mode="out-in">
          <BaseTitle :align="'center'" tag="h4" class="stepsHeadline" :key="steps[activeStep].headline"><b>{{ steps[activeStep].headline }}</b></BaseTitle>
        </transition>
        <transition name="multiStepFade" mode="out-in">
          <div class="checkBoxWrapper" v-if="'checkbox' in steps[activeStep]" :key="steps[activeStep].title">
            <button v-for="(checkBox, checkboxIndex, checkBoxKey) in steps[activeStep].checkbox"
                    :key="checkBoxKey"
                    class="dark" :class="checkBox.activeBox ? 'customGreenBtn' : ''"
                    @click.prevent="toggleCheckbox(steps[activeStep].checkbox[checkboxIndex])">
              <div class="button-blob dark"/>
              <span class="title" :class="checkBox.activeBox ? 'title--hovered' : ''">{{ checkBox.title }}</span>
              <span class="title title--hovered"><b>{{ checkBox.title }}</b></span>
            </button>
          </div>
        </transition>
        <transition name="multiStepFade" mode="out-in">
          <div class="radioWrapper" v-if="'radio' in steps[activeStep]" :key="steps[activeStep].title">
            <div v-for="(radio, radioIndex, radioKey) in steps[activeStep].radio"
                 :key="radioKey"
                 @click="toggleRadio(radio, steps[activeStep].radio)"
                 :class="radio.activeBox ? 'activeRadio' : ''" class="radioBtn" >
              <div class="radioCircle" />
              <p>{{ radio.title }}</p>
            </div>
          </div>
        </transition>
        <transition name="multiStepFade" mode="out-in">
          <div class="contactWrapper" v-if="'contact' in steps[activeStep]" :key="steps[activeStep].title">
            <div class="inputSingle">
              <label for="contactName">Dein Name*</label>
              <input id="contactName"
                     type="text"
                     v-model="steps[activeStep].contact.name"
                     @focus="toggleLabel('contactName', 'open', 0)"
                     @blur="toggleLabel('contactName', 'close', 0)">
              <hr class="defaultLine" :style="getStyleLine('name')">
              <hr class="hoverLine">
            </div>
            <div class="inputSingle">
              <label for="contactCompany">Dein Unternehmen</label>
              <input id="contactCompany"
                     type="text"
                     v-model="steps[activeStep].contact.message"
                     @focus="toggleLabel('contactCompany', 'open', 1)"
                     @blur="toggleLabel('contactCompany', 'close', 1)">
              <hr class="defaultLine" :style="getStyleLine('company')">
              <hr class="hoverLine">
            </div>
            <div class="inputSingle">
              <label for="contactEmail">Deine Email*</label>
              <input id="contactEmail"
                     type="email"
                     v-model="steps[activeStep].contact.email"
                     @focus="toggleLabel('contactEmail', 'open', 2)"
                     @blur="toggleLabel('contactEmail', 'close', 2)">
              <hr class="defaultLine" :style="getStyleLine('email')">
              <hr class="hoverLine">
            </div>
            <div class="inputSingle">
              <label for="contactTel">Deine Telefonnummer*</label>
              <input id="contactTel"
                     type="tel"
                     v-model="steps[activeStep].contact.tel"
                     @focus="toggleLabel('contactTel', 'open', 3)"
                     @blur="toggleLabel('contactTel', 'close', 3)">
              <hr class="defaultLine" :style="getStyleLine('tel')">
              <hr class="hoverLine">
            </div>
            <div class="inputSingle">
              <div class="radioWrapper">
                <div @click="toggleDatenschutz()"
                     :class="datenschutz ? 'activeRadio' : ''" class="radioBtn" >
                  <div class="radioCircle" />
                  <p style="font-size: 14px;">ich habe die <a href="/datenschutz"><u>Datenschutzerklärung</u></a> gelesen - Ich bin einverstanden!</p>
                </div>
              </div>
            </div>
            <span class="phone-wrap" style="visibility: hidden !important">
              <input id="wpcf7" placeholder="phone" class="wpcf7-form-control wpcf7-text" type="text" name="phone" value size="40" tabindex="-1" autocomplete="new-password">
            </span>
          </div>
        </transition>
      </div>
      <div @click="onActionButton()" style="margin-top: 30px;">
        <transition name="multiStepBtn" mode="out-in">
          <BaseButton v-if="!isSend" linkTo="#" :align="'right'"  :theme="'more'" :title="activeStep < steps.length-1 ? 'Weiter' : 'Senden'" :key="activeStep"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle";
import BaseButton from "./BaseButton";
export default {
  name: "multiStepForm",
  components: {BaseButton, BaseTitle},
  methods: {
    toggleDatenschutz() {
      this.datenschutz = !this.datenschutz;
    },
    getStyleLine(type){
      switch(type) {
        case "name":
          if(this.steps[this.activeStep].validData.name == true){
            return {borderColor: '#88F332'}
          } else if (this.steps[this.activeStep].validData.name == false){
            return {borderColor: 'red'}
          } else {
            return ""
          }
        case "company":
          if(this.steps[this.activeStep].validData.company == true){
            return {borderColor: '#88F332'}
          } else if (this.steps[this.activeStep].validData.company == false){
            return {borderColor: 'red'}
          } else {
            return ""
          }
        case "email":
          if(this.steps[this.activeStep].validData.email == true){
            return {borderColor: '#88F332'}
          } else if (this.steps[this.activeStep].validData.email == false){
            return {borderColor: 'red'}
          } else {
            return ""
          }
        case "tel":
          if(this.steps[this.activeStep].validData.tel == true){
            return {borderColor: '#88F332'}
          } else if (this.steps[this.activeStep].validData.tel == false){
            return {borderColor: 'red'}
          } else {
            return ""
          }
      }

    },
    checkInputs(){
      var counter = 0;
      setTimeout(() => {
        for (const  [key, value] of Object.entries(this.steps[this.steps.length-1].contact)) {
          const labels = {name: "contactName", email: "contactEmail" , tel: "contactTel", message: "contactMessage"}
          if(value != ""){
            this.toggleLabel(labels[key], "open", counter)
          }
          counter++
        }
      }, 100);
    },
    setActive(num){
      this.activeStep = num
    },
    toggleCheckbox(toggleObject){
      toggleObject.activeBox = !toggleObject.activeBox;
    },
    toggleRadio(toggleObject, toggleArray){
      toggleArray.forEach(entry => entry.activeBox = false);
      toggleObject.activeBox = !toggleObject.activeBox;
    },
    toggleLabel(id, action, index){
      let element = document.querySelector("label[for=" + id + "]");
      let lines = document.querySelectorAll("hr.defaultLine");
      if(action == "open"){
        element.style.transform = "scale(0.5) translateY(-50px)";
      } else {
        switch(id) {
          case "contactName":
            if(this.steps[this.steps.length-1].contact.name == ""){
              this.steps[this.steps.length-1].validData.name = false
            }
            break;
          case "contactCompany":
            if(this.steps[this.steps.length-1].contact.message == ""){
              this.steps[this.steps.length-1].validData.company = false
            }
            break;
          case "contactEmail":
            if(this.steps[this.steps.length-1].contact.email == ""){
              this.steps[this.steps.length-1].validData.email = false
            }
            break;
          case "contactTel":
            if(this.steps[this.steps.length-1].contact.tel == ""){
              this.steps[this.steps.length-1].validData.tel = false
            }
            break;
        }
      }
    },
    onActionButton(){
      this.activeStep < this.steps.length-1 ? this.activeStep++ : this.submitEvent();
    },
    submitEvent(){
      if(this.datenschutz &&
          this.steps[2].validData.name &&
          this.steps[2].validData.email &&
          this.steps[2].validData.tel){
        this.$emit("submitForm", this.steps)
        this.isSend = true;
      } else {
      }
    }
  },
  computed: {
    getContactName: function() {
      return this.steps[this.steps.length-1].contact.name
    },
    getContactCompany: function() {
      return this.steps[this.steps.length-1].contact.message
    },
    getContactEmail: function() {
      return this.steps[this.steps.length-1].contact.email
    },
    getContactTel: function() {
      return this.steps[this.steps.length-1].contact.tel
    }
  },
  watch: {
    activeStep(newVal){
      if(newVal == 2){
        this.checkInputs();
      }
    },
    getContactName: function(newVal){
      let onlyLettersRegex = /^[A-Za-z]+$/;
      if( newVal != "" ){
        newVal.match(onlyLettersRegex) ? this.steps[this.steps.length-1].validData.name = true : this.steps[this.steps.length-1].validData.name = false;
      } else {
        this.steps[this.steps.length-1].validData.name = false
      }
    },
    getContactCompany: function(newVal){
      let onlyLettersRegex = /^[A-Za-z]+$/;
      if( newVal != "" ){
        newVal.match(onlyLettersRegex) ? this.steps[this.steps.length-1].validData.company = true : this.steps[this.steps.length-1].validData.company = false;
      } else {
        this.steps[this.steps.length-1].validData.company = false
      }
    },
    getContactEmail: function(newVal){
      let onlyEmailRegex = /^([-!#-\'*+\/-9=?A-Z^-~]{1,64}(\.[-!#-\'*+\/-9=?A-Z^-~]{1,64})*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+$/;
      if( newVal != "" ) {
        newVal.match(onlyEmailRegex) ? this.steps[this.steps.length - 1].validData.email = true : this.steps[this.steps.length - 1].validData.email = false
      } else {
        this.steps[this.steps.length - 1].validData.email = false
      }
    },
    getContactTel: function(newVal){
      let onlyTelRegex = /^((\+|\+\(\d\d\)|)\d+)$/mg;
      if( newVal != "" ) {
        newVal.match(onlyTelRegex) ? this.steps[this.steps.length - 1].validData.tel = true : this.steps[this.steps.length - 1].validData.tel = false
      } else {
        this.steps[this.steps.length - 1].validData.tel = false
      }
    },
  },
  data(){
    return{
      activeStep: 0,
      datenschutz: false,
      isSend: false,
      steps: [
        {
          title: "BEDARF",
          headline: "Wobei dürfen wir Dich unterstützen?",
          checkbox: [
            {
              title: "UI/UX Design",
              activeBox: false,
            },
            {
              title: "Webdesign",
              activeBox: false,
            },
            {
              title: "Grafikdesign",
              activeBox: false,
            },
            {
              title: "Marketing",
              activeBox: false,
            },
            {
              title: "Sonstiges",
              activeBox: false,
            },

          ]
        },
        {
          title: "ZEITPLAN",
          headline: "Wann soll das Projekt starten?",
          radio: [
            {
              title: "So schnell wie möglich",
              activeBox: false,
            },
            {
              title: "Binnen 3 Monaten",
              activeBox: false,
            },
            {
              title: "In 3 – 6 Monaten",
              activeBox: false,
            },
            {
              title: "Später als 6 Monate",
              activeBox: false,
            },
          ]
        },
        {
          title: "INFOS",
          headline: "Wie können wir Dich erreichen?",
          contact: {
            name: "",
            email: "",
            tel: "",
            message: "",
          },
          validData: {
            name: null,
            email: null,
            tel: null,
            company: null,
          }
        }
      ],
    }
  }
}
</script>

<style scoped>
.stepsTimelines{
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 50px;
}
.stepsTimeline{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.stepsTitle{
  font-size: 14px;
  font-weight: 800;
  color: #E7FFD3;
  cursor: pointer;
  transition: color 0.3s;
}
.greenStepsTitle{
  color: #88F332 !important;
}
.stepsTimeline div.stepsBar{
  width: 10vw;
  height: 2px;
  object-fit: cover;
  margin: 0px 10px;
  opacity: 1;
  transition: all 0.3s ease;
}
.stepsTimeline div.stepsBar.lightGreenBg{
  opacity: 0.25;
}
.stepsContent{
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.stepsHeadline{
  margin-bottom: 40px;
  position: absolute;
  white-space: nowrap;
}
/*  CHECKBOX */
.checkBoxWrapper{
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction:row;
  position: absolute;
  top: 30%;
}
button.dark{
  transition: font-weight 0.3s linear;
  border: 1px solid rgba(255,255,255,0.25);
}
div.customGreenBtn div.button-blob.dark{
  background: #88F332 !important;
}
.customGreenBtn{
  background: #88F332 !important;
  border-color: #88F332;
  font-weight: 700;
}
.customGreenBtn:hover .button-blob{
  display: none;
}
/* RADIO */
.radioWrapper{
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: absolute;
  top: 33%;
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
  width: 1.2em;
  height: 1.2em;
  transition: border-color 0.3s ease-out;
}
.radioBtn p{
  color: #E7FFD3;
  transition: color 0.3s ease;
}
.radioBtn:hover p{
  color: #88F332;
}
.radioBtn:hover .radioCircle{
  border-color: #88F332;
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
  width: 20px;
  height: 20px;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  background-color: #88F332;
  opacity: 0;
  transition: all 0.4s ease-out;
}

.radioBtn.activeRadio .radioCircle:after{
  width: 11px;
  height: 11px;
  left: 4px;
  top: 4px;
  opacity: 1;
  opacity: 1;
}
/* CONTACT */
.contactWrapper{
  width: 100%;
  position: absolute;
  top: 25%;
}
.contactWrapper hr{
  width: 100%;
}
.inputSingle{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}
.inputSingle label{
  font-size: clamp(1.12em, calc(100vw / 100), 1.8em);
  position: absolute;
  color: #707070;
  transition: all 0.3s ease-out;
  transform-origin: left;
}
.inputSingle hr{
  border-color: rgba(255,255,255,0.25);
}
.inputSingle input{
  font-size: clamp(1.12em, calc(100vw / 100), 1.8em);
  background: transparent;
  border: none;
  width: 100%;
}
.inputSingle:hover label{
  color: white;
}
.inputSingle hr.hoverLine{
  border-color: #fff;
  margin-top: -10px;
  width: 100%;
  transform: scaleX(0);
  transition: transform 0.3s ease-out;
  transform-origin: left;
}
.inputSingle:hover hr.hoverLine{
  transform: scaleX(1);
}
input{
  outline: none;
  color: white;
}

/* vue ani */
.multiStepFade-enter-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  transition-delay: 0.3s;
}

.multiStepFade-enter, .multiStepFade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.multiStepFade-enter-to, .multiStepFade-leave {
  opacity: 1;
}
.multiStepFade-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
  transition-delay: 0.3s;
}



.multiStepHead-enter-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease;
}

.multiStepHead-enter, .multiStepFade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.multiStepHead-enter-to, .multiStepFade-leave {
  opacity: 1;
}
.multiStepHead-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease;
}
@media only screen and (max-width: 1024px){
  .stepsContentWrapper{
    margin-bottom: 100px;
  }
  .multiStepForm{
    width: 100%;
  }
  .stepsTimelines{
    justify-content: center;
  }
  .checkBoxWrapper{
    justify-content: center;
  }
  .radioBtn .radioCircle{
    width: 30px;
    max-width: 18px;
  }
  .radioWrapper .radioBtn, .contactWrapper{
    justify-content: flex-start;
    width: 90%;
    margin-left: 5vw;
  }
  button.dark{
    padding-left: 20px;
    padding-right: 20px;
  }
  .customGreenBtn span{
    color: black !important;
  }
}
</style>