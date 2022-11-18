<template>
  <div class="buttonWrapper">
    <g-link v-if="linkTo != null" :to="'/' + linkTo">
      <div class="icon-wrap" :class="toDark ? 'toDark' : 'toLight'">
        <div class="button-icon" :class="theme">
          {{ title }}
        </div>
      </div>
    </g-link>
    <div v-else class="icon-wrap" :class="toDark ? 'toDark' : 'toLight'">
      <div class="button-icon" :class="theme">
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
    linkTo: String,
    theme: String,
    toDark: Boolean,
  },
}
</script>

<style scoped>
.buttonWrapper{
  display:flex;
  justify-content: center;
  align-items: center;
}
.icon-wrap {
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
  transition: all 0.5s;
  border: 2px solid #88F332;
  padding: 15px 40px;
  z-index: 101;
  white-space: nowrap;
}
.icon-wrap:hover .button-icon{
  color: black;
  background: #88F332;
  border: 2px solid #88F332;
}
.button-icon.dark {
  color: #011713;
  border: 2px solid #011713;
}
.icon-wrap:hover .button-icon.dark{
  color: black;
  background: #88F332;
  border: 2px solid #88F332;
}
.button-icon.light {
  color: white;
  border: 1px solid lightgrey;
}
.icon-wrap:hover .button-icon.light{
  color: black;
  background: white;
  border: 1px solid white;
}
</style>