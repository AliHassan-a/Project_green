<template>
  <div class="titleWrapper">
    <h1 :class="addClass" :style="'text-align:' + align + '; ' + addStyle" v-if="tag == 'h1'"><slot></slot></h1>
    <h2 :class="addClass" :style="'text-align:' + align + '; ' + addStyle" v-else-if="tag == 'h2'"><slot></slot></h2>
    <h3 :class="addClass" :style="'text-align:' + align + '; ' + addStyle" v-else-if="tag == 'h3'"><slot></slot></h3>
    <h4 :class="addClass" :style="'text-align:' + align + '; ' + addStyle" v-else-if="tag == 'h4'"><slot></slot></h4>
  </div>
</template>

<script>
export default {
  name: "BaseTitle",
  props: {
      tag: String,
      align: String,
      addClass: String,
      addStyle: String,
  }
}
</script>

<style scroped>
  .titleWrapper{
    width: 100%;
  }
</style>