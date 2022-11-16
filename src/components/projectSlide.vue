<template>
  <div class="slideWrapper" :style="{background: project.color}">
    <g-link :to="'projekte/' + project.link">
      <div>
        <g-image :src="project.logoUrl"></g-image>
        <h3>{{ project.heading }}</h3>
      </div>
      <div>
        <!--
        <g-image :src="project.mockup"></g-image>-->
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  name: "projectSlide",
  props: {
    project: Object,
  }
}
</script>

<style scoped>
  .slideWrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-items: center;
  }
</style>