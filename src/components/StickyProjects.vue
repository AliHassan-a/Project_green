<template>
  <div class="w-full projectBlockWrapper">
    <div class="projectsWrapper">
      <div class="project" :style="{background: projects[0].color}" data-speed="1.3">
        <div class="projectLogoWrapper">
          <g-image class="projectLogo" :src="projects[0].logo"></g-image>
        </div>
        <BaseTitle class="projectText" :tag="'h3'">{{ projects[0].text }}</BaseTitle>
        <BaseButton class="projectBtn" :align="'left'" :theme="'dark'" :title="'Live ansehen'" />
        <g-image class="projectMock" :src="projects[0].mockup"></g-image>
      </div>
      <div class="project" :style="{background: projects[1].color}" data-speed="1.1">
        <div class="projectLogoWrapper">
          <g-image class="projectLogo" :src="projects[1].logo"></g-image>
        </div>
        <BaseTitle class="projectText" :tag="'h3'">{{ projects[1].text }}</BaseTitle>
        <BaseButton class="projectBtn" :align="'left'" :theme="'dark'" :title="'Live ansehen'" />
        <g-image class="projectMock" :src="projects[1].mockup"></g-image>
      </div>
    </div>
    <div class="projectsWrapper">
      <div class="project" :style="{background: projects[2].color}" data-speed="1">
        <div class="projectLogoWrapper">
          <g-image class="projectLogo" :src="projects[2].logo"></g-image>
        </div>
        <BaseTitle class="projectText" :tag="'h3'">{{ projects[2].text }}</BaseTitle>
        <BaseButton class="projectBtn" :align="'left'" :theme="'dark'" :title="'Live ansehen'" />
        <g-image class="projectMock" :src="projects[2].mockup"></g-image>
      </div>
      <div class="project" :style="{background: projects[3].color}" data-speed="1.2">
        <div class="projectLogoWrapper">
          <g-image class="projectLogo" :src="projects[3].logo"></g-image>
        </div>
        <BaseTitle class="projectText" :tag="'h3'">{{ projects[3].text }}</BaseTitle>
        <BaseButton class="projectBtn" :align="'left'" :theme="'dark'" :title="'Live ansehen'" />
        <g-image class="projectMock" :src="projects[3].mockup"></g-image>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle";
import BaseButton from "./BaseButton";
export default {
  name: "StickyProjects",
  components: {BaseButton, BaseTitle},
  props: {
    projects: Array,
  },
}
</script>

<style scoped>
.projectBlockWrapper{
  display: block;
  margin: 20% 0%;
}
.projectsWrapper{
  display: flex;
}
.projectsWrapper:first-child{
  margin-bottom: 5%;
}
.project{
  display: flex;
  flex-direction: column;
  background: green;
  padding: 60px;
}
.projectLogoWrapper{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
}
.projectLogo{
  max-width: 200px;
  max-height: 100px;
}
.projectText{
  width: 80%;
}
.projectBtn{
  margin-top: 50px;
}
.projectMock{
  max-height: 600px;
  object-fit: contain;
}
.project:nth-child(1){
  margin: 0px 60px 0px 0px;
  width: calc(50% - 60px);
}
.project:nth-child(2){
  margin: 0px 0px 0px 60px;
  width: calc(50% - 60px);
}
@media only screen and (max-width: 1024px){
  .projectsWrapper{
    display: flex;
    flex-direction: column;
  }
  .project{
    display: flex;
    flex-direction: column;
    background: green;
    padding: 20px;
    margin: 0px !important;
    width: calc(100% - 40px) !important;
  }
  .project:nth-child(2){
    margin: 0px 0px 50px 0px;
  }
  .projectMock{
    max-height: 600px;
    object-fit: contain;
  }
}
</style>