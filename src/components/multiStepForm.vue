<template>
  <div class="multiStepForm">
    <div class="stepsTimelines">
      <div class="stepsTimeline" v-for="(step, index, key) in steps" :key="key">
        <p class="stepsTitle" :class="index <= activeStep ? 'greenStepsTitle' : ''" @click.prevent="setActive(index)">{{ step.title }}</p>
        <img v-if="index < steps.length - 1 " src="@/assets/simple-bar.svg">
      </div>
    </div>
    <div class="stepsContentWrapper">
      <div class="stepsContent">
        <BaseTitle tag="h2" class="stepsHeadline"><b>{{ steps[activeStep].headline }}</b></BaseTitle>
        <div class="checkBoxWrapper" v-if="'checkbox' in steps[activeStep]">
          <button v-for="(checkBox, checkboxIndex, checkBoxKey) in steps[activeStep].checkbox"
                  :key="checkBoxKey"
                  class="dark" :class="checkBox.activeBox ? 'customGreenBtn' : ''"
                  @click.prevent="toggleCheckbox(steps[activeStep].checkbox[checkboxIndex])">
            <div class="button-blob dark"/>
            <span class="title" :class="checkBox.activeBox ? 'title--hovered' : ''">{{ checkBox.title }}</span>
            <span class="title title--hovered"><b>{{ checkBox.title }}</b></span>
          </button>
        </div>
        <div class="radioWrapper" v-if="'radio' in steps[activeStep]">
          <div v-for="(radio, radioIndex, radioKey) in steps[activeStep].radio"
               :key="radioKey"
               @click="toggleRadio(radio, steps[activeStep].radio)"
               :class="radio.activeBox ? 'activeRadio' : ''" class="radioBtn" >
            <div class="radioCircle" />
            <p>{{ radio.title }}</p>
          </div>
        </div>
        <div class="contactWrapper" v-if="'contact' in steps[activeStep]">
          <div class="inputSingle">
            <label for="contactName">Dein Name</label>
            <input id="contactName"
                   type="text"
                   v-model="steps[activeStep].contact.name"
                   @focus="toggleLabel('contactName', 'open', 0)"
                   @blur="toggleLabel('contactName', 'close', 0)">
            <hr class="defaultLine">
            <hr class="hoverLine">
          </div>
          <div class="inputSingle">
            <label for="contactEmail">Deine Email</label>
            <input id="contactEmail"
                   type="email"
                   v-model="steps[activeStep].contact.email"
                   @focus="toggleLabel('contactEmail', 'open', 1)"
                   @blur="toggleLabel('contactEmail', 'close', 1)">
            <hr class="defaultLine">
            <hr class="hoverLine">
          </div>
          <div class="inputSingle">
            <label for="contactTel">Deine Telefonnummer</label>
            <input id="contactTel"
                   type="tel"
                   v-model="steps[activeStep].contact.tel"
                   @focus="toggleLabel('contactTel', 'open', 2)"
                   @blur="toggleLabel('contactTel', 'close', 2)">
            <hr class="defaultLine">
            <hr class="hoverLine">
          </div>
          <div class="inputSingle">
            <label for="contactMessage">Erzähl uns von deinem Projekt</label>
            <input id="contactMessage"
                   type="text"
                   v-model="steps[activeStep].contact.message"
                   @focus="toggleLabel('contactMessage', 'open', 3)"
                   @blur="toggleLabel('contactMessage', 'close', 3)">
            <hr class="defaultLine">
            <hr class="hoverLine">
          </div>
        </div>
      </div>
      <div @click="onActionButton()" style="margin-top: 30px;">
        <BaseButton linkTo="#" :align="'right'"  :theme="'more'" :title="activeStep < steps.length-1 ? 'Weiter' : 'Senden'"/>
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
        lines[index].style.borderColor = "#88F332";
      }
    },
    onActionButton(){
      this.activeStep < this.steps.length-1 ? this.activeStep++ : this.submitEvent();
    },
    submitEvent(){
      this.$emit("submitForm", this.steps);
    }
  },
  data(){
    return{
      activeStep: 0,
      steps: [
        {
          title: "Bedarf",
          headline: "Was geht denn hier rein?",
          checkbox: [
            {
              title: "UI/UX Design",
              activeBox: false,
            },
            {
              title: "UI/UX Design",
              activeBox: false,
            },
          ]
        },
        {
          title: "Zeitplan",
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
          title: "Infos",
          headline: "Wie können wir dich erreichen?",
          contact: {
            name: "",
            email: "",
            tel: "",
            message: "",
          },
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
.stepsTimeline img{
  width: 10vw;
  height: 3px;
  object-fit: cover;
  margin: 0px 10px;
}
.stepsContent{
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.stepsHeadline{
  margin-bottom: 40px;
}
/*  CHECKBOX */
.checkBoxWrapper{
  display: flex;
  flex-direction:row;
}
.customGreenBtn{
  background: #88F332 !important;
  border-color: #88F332;
}
/* RADIO */
.radioWrapper{
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  width: 11px;
  height: 11px;
  left: 4px;
  top: 4px;
  border-radius: 10px;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

.radioBtn.activeRadio .radioCircle:after{
  background-color: #88F332;
}
/* CONTACT */
.contactWrapper{
  width: 100%;
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
</style>