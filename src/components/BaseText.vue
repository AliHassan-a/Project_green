<template>
  <div class="textWrapper">
    <p v-if="size == 'small'"><slot></slot></p>
    <p v-if="size == 'normal' || size == undefined"><slot></slot></p>
    <p v-if="size == 'big'"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: "BaseText",
  props: {
    size: String,
  }
}
</script>