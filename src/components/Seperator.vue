<template>
  <div class="seperatorWrapper">
    <hr v-if="theme == 'dark'" class="dark" >
    <hr v-else-if="theme == 'light'" class="light" >
  </div>
</template>

<script>
export default {
  name: "seperator",
  props: {
    theme: String,
  }
}
</script>

<style scoped>
  .seperatorWrapper{
    width: 100%;
  }
  .seperatorWrapper hr{
    margin: 0px 0px 10px 0px;
  }
  .seperatorWrapper .dark{
    background: #ffffff;
    background-blend-mode: soft-light;
  }
  .seperatorWrapper .light{
    opacity: 0.6;
    background: #011713;
    background-blend-mode: soft-light;
  }
</style>