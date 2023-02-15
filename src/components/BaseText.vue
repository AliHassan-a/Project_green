<template>
  <div class="textWrapper">
    <p :class="addClass" :style="addStyle" v-if="size == 'small'"><slot></slot></p>
    <p :class="addClass" :style="addStyle" v-if="size == 'normal' || size == undefined"><slot></slot></p>
    <p :class="addClass" :style="addStyle" v-if="size == 'big'"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: "BaseText",
  props: {
    size: String,
    addClass: String,
    addStyle: String,
  }
}
</script>