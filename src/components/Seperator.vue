<template>
  <div class="seperatorWrapper">
    <div v-if="theme == 'dark'" class="dark" />
    <div v-else-if="theme == 'light'" class="light" />
    <div v-else-if="theme == 'lightGreen'" class="lightGreen" />
  </div>
</template>

<script lang="js">
export default {
  name: "seperator",
  props: {
    theme: String,
  }
}
</script>

<style scoped>
.seperatorWrapper {
  width: 100%;
}

.seperatorWrapper hr {
  margin: 0px 0px 10px 0px;
}

.seperatorWrapper .dark {
  height: 2px;
  background: #ffffff;
  opacity: 0.25;
}

.seperatorWrapper .light {
  height: 2px;
  opacity: 0.25;
  background: #011713;
  background-blend-mode: soft-light;
}

.seperatorWrapper .lightGreen {
  height: 2px;
  opacity: 0.25;
  background: #E7FFD3;
  background-blend-mode: soft-light;
}</style>