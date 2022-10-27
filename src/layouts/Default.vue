<template>
  <div class="layout">
    <header class="header">
      <g-image src="@/assets/logo.png"></g-image>
      <Menu />
    </header>
    <slot/>
  </div>
</template>

<script>
import Menu from "../components/Menu";

export default {
  name: "default",
  data: function(){
    return {
      data: "123",
    }
  },
  components: {
    Menu,
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
html{
  scroll-behavior: smooth;
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background: #011713;
}

.layout {
  margin: 0 auto;
}

.header {
  position: fixed;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  z-index: 999999;
}
</style>
