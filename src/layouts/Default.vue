<template>
  <div class="layout">
    <slot/>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "../components/Footer";
export default {
  name: "default",
  components: {Footer},
}
</script>
