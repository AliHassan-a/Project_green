<template>
  <div class="w-full">
    <div class="animateBlockItem w-full">
      <Seperator theme="light"></Seperator>
      <div class="leistungWrapper">
        <g-image src="@/assets/design_strategie_icon.png"></g-image>
        <h3 class="w-full leistungText">Design & Strategie</h3>
        <BaseButton :link-to="'design-strategie'" :theme="'more'" :title="'Mehr erfahren'"/>
      </div>
      <Seperator theme="light"></Seperator>
    </div>
    <div class="animateBlockItem w-full">
      <div class="leistungWrapper">
        <g-image src="@/assets/entwicklung_icon.png"></g-image>
        <h3 class="w-full leistungText">Entwicklung</h3>
        <BaseButton :link-to="'entwicklung'" :theme="'more'" :title="'Mehr erfahren'"/>
      </div>
      <Seperator theme="light"></Seperator>
    </div>
    <div class="animateBlockItem w-full">
      <div class="leistungWrapper">
        <g-image src="@/assets/marketing_icon.png"></g-image>
        <h3 class="w-full leistungText">Marketing</h3>
        <BaseButton :link-to="'marketing'" :theme="'more'" :title="'Mehr erfahren'"/>
      </div>
      <Seperator theme="light"></Seperator>
    </div>
  </div>
</template>

<script>

import BaseButton from "./BaseButton";
import Seperator from "./Seperator";

export default {
  name: "Service",
  components: {
    BaseButton,
    Seperator,
  }
}
</script>

<style scoped>
.leistungWrapper{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 30px 0px;
}
.leistungWrapper img{
  object-fit: contain;
  width: 82px;
}
.leistungWrapper base-button{
  justify-content: flex-end;
}

.lineWrapper{
  width: 100%;
}
</style>