<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<script>

export default {
  name: "default",
  data: function(){
    return {
      data: "123",
    }
  },
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

</style>
