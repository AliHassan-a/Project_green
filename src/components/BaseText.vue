<template>
  <div class="textWrapper">
    <p v-if="size == 'small'" v-html="content"></p>
    <p v-if="size == 'normal' || size == ''" v-html="content"></p>
    <p v-if="size == 'big'" v-html="content"></p>
  </div>
</template>

<script>
export default {
  name: "BaseText",
  props: {
    title: String,
    size: String,
  }
}
</script>