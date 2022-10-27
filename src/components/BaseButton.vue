<template>
  <div class="button-wrap">
    <div class="icon-wrap">
      <div class="button-icon">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    title: String,
  },
}
</script>

<style scoped>
.icon-wrap {
  padding: 20px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  float:left;
  z-index: 10;
}

.button-icon {
  background: transparent;
  color: #88F332;
  border-radius: 100px;
  text-align: center;
  line-height: 30px;
  font-size: 24px;
  transition: all 0.5s;
  border: 2px solid #88F332;
  padding: 15px 40px;
  z-index: 101;
}
.icon-wrap:hover .button-icon{
  color: black;
  background: #88F332;
  border: 2px solid #88F332;
}
</style>