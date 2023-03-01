<template>
  <div class="hoverSectionWrapper">
    <div class="hoverSection" v-for="(section, index, key) in content" :key="key">
      <BaseTitle :tag="'h3'" style="margin: 2% 0%">{{ '0' + (index+1).toString() + '. ' + section.title }}</BaseTitle>
      <Seperator class="hoverSeperator" theme="lightGreen"></Seperator>
      <div class="hoverContent">
        <div v-if="type == 'ablauf'">
          <g-image v-if="index == 0" src="@/assets/beratung.gif"></g-image>
          <g-image v-if="index == 1" src="@/assets/konzept.gif"></g-image>
          <g-image v-if="index == 2" src="@/assets/gestaltung.gif"></g-image>
          <g-image v-if="index == 3" src="@/assets/korrektur.gif"></g-image>
          <g-image v-if="index == 4" src="@/assets/go-live.gif"></g-image>
        </div>
        <BaseText :addStyle="'font-size:16px;'">{{ section.content }}</BaseText>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle";
import BaseText from "./BaseText";
import Seperator from "./Seperator"

export default {
  name: "HoverSection",
  components: {
    BaseText,
    BaseTitle,
    Seperator,
  },
  props: {
    content: Array,
    type: String, // ablauf, vorteile
  }
}
</script>

<style scoped>
  .hoverSectionWrapper{
    width: 100%;
  }
  .hoverContent{
    width: 400px;
    background: rgba(0,0,0,0.25);
    padding: 60px;
    border-radius: 22px;
    position: absolute;
    right: 10%;
    top: -30px;
    opacity: 0;
    border: 1px solid rgba(136,243,50,0.2);
    transform: rotate(10deg) translateY(200px) translateX(20px);
    transition: all 0.4s ease-out;
    backdrop-filter: blur(5px);
  }
  .hoverContent img{
    width: 80px;
  }
  .hoverSection:hover .hoverContent{
    transform: rotate(0) translate(0);
    opacity: 1;
  }
  .hoverSeperator{
    display: block;
  }
  @media only screen and (max-width: 1024px){
    .hoverSection{
      border: 1px solid rgba(136,243,50,0.2);
      backdrop-filter: blur(5px);
      border-radius: 22px;
      margin-bottom: 20px;background: rgba(0,0,0,0.25);
      padding: 20px;
    }
    .hoverSeperator{
      display: none;
    }
    .hoverContent{
      position: relative;
      width: calc(100% - 40px);
      padding: 0px;
      top: unset;
      right: unset;
      border: none;
      transform: rotate(0) translate(0);
      opacity: 1;
      background: unset;
      backdrop-filter: unset;
    }
  }
</style>