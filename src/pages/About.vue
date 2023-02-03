<template>
  <Layout>
    <div class="mainSection">
      <BaseTitle :align="'left'" :tag="'h1'" class="animateFadeInLeftSecond">Wir erwecken Kreativität durch Technologie zum leben</BaseTitle>
      <Slider />
    </div>
  </Layout>
</template>

<script>
import Slider from "../components/Slider";
import BaseTitle from "../components/BaseTitle";

export default {
  components: {
    Slider,
    BaseTitle,
  },
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style scoped>
.mainSection{
  max-width: 100vw;
  padding: 0;
}
</style>