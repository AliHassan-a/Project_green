<template>
  <div class="multiStepForm">
    <div class="stepsTimelines">
      <div class="stepsTimeline" v-for="(step, index, key) in steps" :key="key">
        <p class="stepsTitle" @click.prevent="setActive(index)">{{ step.title }}</p>
        <img v-if="index < steps.length - 1 " src="@/assets/simple-bar.svg">
      </div>
    </div>
    <div class="stepsContentWrapper">
      <div class="stepsContent">
        <BaseTitle tag="h2">{{ steps[activeStep].headline }}</BaseTitle>
        <div class="checkBoxWrapper" v-if="'checkbox' in steps[activeStep]">
          <button v-for="(checkBox, checkboxIndex, key) in steps[activeStep].checkbox"
                  :key="key"
                  class="dark" :class="checkBox.activeBox ? 'customGreenBtn' : ''"
                  @click.prevent="toggleCheckbox(steps[activeStep].checkbox[checkboxIndex])">
            <div class="button-blob dark"/>
            <span class="title" :class="checkBox.activeBox ? 'title--hovered' : ''">{{ checkBox.title }}</span>
            <span class="title title--hovered"><b>{{ checkBox.title }}</b></span>
          </button>
        </div>
        <div class="radioWrapper" v-if="'radio' in steps[activeStep]">

        </div>
        <div class="contactWrapper" v-if="'contact' in steps[activeStep]">

        </div>
        </div>
    </div>
    <div @click="onActionButton()" style="width: unset; align-self: flex-end; justify-self: flex-end">
      <BaseButton linkTo="#"  :theme="activeStep < steps.length-1 ? 'more' : 'light'" :title="activeStep < steps.length-1 ? 'Weiter' : 'Senden'"/>
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
    onActionButton(){
      console.log(this.activeStep);
      this.activeStep++
    },
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
          headline: "",
          checkbox: [
            "Morgen",
          ]
        },
        {
          title: "Infos",
          headline: "",
          contact: true,
        }
      ]
    }
  }
}
</script>

<style scoped>
.stepsTimelines{
  display: flex;
  justify-content: center;
  width: 100%;
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
}
.stepsTimeline img{
  width: 10vw;
  height: 3px;
  object-fit: cover;
  margin: 0px 10px;
}
.stepsContent{
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
</style>