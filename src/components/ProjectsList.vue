<template>
  <div class="w-full leistungBlockWrapper">
    <div class="animateBlockItem w-full" v-for="(project, index, key) in projects" :key="key">
      <Seperator theme="lightGreen"></Seperator>
      <div class="leistungWrapper">
        <h3 class="lightGreenColor">{{ project.year }}</h3>
        <h3 class="w-full leistungText">{{ project.title }}</h3>
        <BaseButton v-for="(service, index, key) in project.services" :theme="'dark'" :title="service" :key="key"/>
        <BaseButton :link-to="project.link" :theme="'more'" :title="'Seite ansehen'" />
      </div>
      <Seperator theme="lightGreen"></Seperator>
    </div>
  </div>
</template>

<script>

import BaseButton from "./BaseButton";
import Seperator from "./Seperator";

export default {
  name: "Service",
  props: {
    projects: Array,
  },
  components: {
    BaseButton,
    Seperator,
  }
}
</script>

<style scoped>
.leistungWrapper{
  width: 100%;
  max-width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 30px 12.5vw;
  transition: 0.4s ease-out;
}
.animateBlockItem{
  padding-top: 1px;
  transition: background 0.3s linear;
}
.animateBlockItem:hover{
  background: #88F332;
}
.animateBlockItem:hover .leistungWrapper{
  filter: brightness(0);
}
.leistungWrapper img{
  object-fit: contain;
  width: 82px;
}
.leistungWrapper base-button{
  justify-content: flex-end;
}

/* RESPONSIVE */
@media only screen and (max-width: 1024px) {
  .leistungWrapper{
    flex-direction: column;
  }
  .leistungText{
    text-align: center;
  }
}
</style>