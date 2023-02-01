<template>
  <div class="titleWrapper">
    <h1 :style="'text-align:' + align" v-if="tag == 'h1'"><slot></slot></h1>
    <h2 :style="'text-align:' + align" v-else-if="tag == 'h2'"><slot></slot></h2>
    <h3 :style="'text-align:' + align" v-else-if="tag == 'h3'"><slot></slot></h3>
    <h4 :style="'text-align:' + align" v-else-if="tag == 'h4'"><slot></slot></h4>
  </div>
</template>

<script>
export default {
  name: "BaseTitle",
  props: {
      title: String,
      tag: String,
      align: String,
  }
}
</script>

<style scroped>
  .titleWrapper{
    width: 100%;
  }
</style>