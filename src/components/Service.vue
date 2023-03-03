<template>
  <div class="w-full leistungBlockWrapper">
    <div class="animateBlockItem serviceWrapper">
      <a href="/leistungen/design-strategie" v-reload>
        <Seperator class="m-hide" theme="lightGreen"></Seperator>
        <div class="leistungWrapper">
          <g-image src="@/assets/design_strategie_icon.webp"></g-image>
          <h3 class="w-full leistungText">Design & Strategie</h3>
          <BaseButton :link-to="'leistungen/design-strategie'" :theme="'more'" :title="'Mehr erfahren'"/>
        </div>
        <Seperator class="m-hide" theme="lightGreen"></Seperator>
      </a>
    </div>
    <div class="animateBlockItem serviceWrapper">
      <a href="/leistungen/entwicklung" v-reload>
        <div class="leistungWrapper">
          <g-image src="@/assets/entwicklung_icon.webp"></g-image>
          <h3 class="w-full leistungText">Entwicklung</h3>
          <BaseButton :link-to="'leistungen/entwicklung'" :theme="'more'" :title="'Mehr erfahren'"/>
        </div>
        <Seperator class="m-hide" theme="lightGreen"></Seperator>
      </a>
    </div>
    <div class="animateBlockItem serviceWrapper">
      <a href="/leistungen/marketing" v-reload>
        <div class="leistungWrapper">
          <g-image src="@/assets/marketing_icon.webp"></g-image>
          <h3 class="w-full leistungText">Marketing</h3>
          <BaseButton :link-to="'leistungen/marketing'" :theme="'more'" :title="'Mehr erfahren'"/>
        </div>
        <Seperator class="m-hide" theme="lightGreen"></Seperator>
      </a>
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
.leistungBlockWrapper .serviceWrapper{
  width: 100%;
  margin: auto;
  cursor: pointer;
}
.leistungWrapper{
  width: 100%;
  max-width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 50px 12.5vw;
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
.leistungText{
  cursor: pointer;
}
.leistungWrapper base-button{
  justify-content: flex-end;
}


/* RESPONSIVE */
@media only screen and (max-width: 1024px) {
  .leistungBlockWrapper .serviceWrapper{
    width: 90vw;
  }
  .leistungWrapper{
    flex-direction: column;
    margin: 40px auto;
  }
  .leistungText{
    text-align: center;
  }
  .leistungBlockWrapper .serviceWrapper{
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,0.25);
    margin-bottom: 20px;
  }
}
</style>