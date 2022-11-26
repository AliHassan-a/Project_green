<template>
  <div id="two" class="container section-two">
    <h2 style="position:absolute; top: 60px; left: calc(100vw/12);">Wir entwickeln innovative <br> Apps & Webseiten</h2>
    <section id="chartexpertenProjekt" class="panel">
      <g-link to="/projekte/chartexperten/">
        <div class="box" style="background: #1A102E">
          <div class="projectLeft">
            <img src="@/assets/projects/chartexperten/chartexperten-logo.svg"/>
            <h2 class="text-left defaultMarginY">Web App & Branding <br>für Chartexperten</h2>
            <baseButton class="" :theme="'light'" :title="'Zum Projekt'" :linkTo="'/projekte/chartexperten'" :toDark="false"></baseButton>
          </div>
          <div class="projectRight">
            <img style="width: 100%" src="@/assets/projects/chartexperten/chartexperten-mockup.svg"/>
          </div>
        </div>
      </g-link>
    </section>
    <section class="panel">
      <g-link to="/projekte/uhrigstore/">
        <div class="box" style="background: #1F0E03">
          <div class="projectLeft projectLeft1">
            <img src="@/assets/projects/uhrigstore/uhrigstore-logo.svg"/>
            <h2 class="text-left defaultMarginY">Neuer Webshop für <br>Uhrigstore</h2>
            <baseButton class="" :theme="'light'" :title="'Zum Projekt'" :linkTo="'/projekte/chartexperten'" :toDark="false"></baseButton>
          </div>
          <div class="projectRight">
            <img style="width: 100%" src="@/assets/projects/uhrigstore/uhrigstore-mockup.svg"/>
          </div>
        </div>
      </g-link>
    </section>
    <section class="panel">
      <g-link to="/projekte/kematherm/">
        <div class="box" style="background: #1A4C7D">
          <div class="projectLeft projectLeft1">
            <img src="@/assets/projects/kematherm/kematherm-logo.svg"/>
            <h2 class="text-left defaultMarginY">Performance Marketing <br>für Kematherm</h2>
            <baseButton class="" :theme="'light'" :title="'Zum Projekt'" :linkTo="'/projekte/kematherm'" :toDark="false"></baseButton>
          </div>
          <div class="projectRight">
            <img style="width: 100%" src="@/assets/projects/kematherm/kematherm-mockup.svg"/>
          </div>
        </div>
      </g-link>
    </section>
  </div>
</template>

<script>
import BaseButton from "./BaseButton";
export default {
  name: "ProjectSlider",
  components: {
    BaseButton,
  }
}
</script>

<style scoped>

</style>