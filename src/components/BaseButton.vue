<template>
  <div class="buttonWrapper">
    <g-link v-if="linkTo != null" :to="'/' + linkTo">
      <div class="icon-wrap" :class="toDark ? 'toDark' : 'toLight'">
        <div class="button-icon" :class="hidden ? 'hidden' : ''">
          {{ title }}
        </div>
      </div>
    </g-link>
    <div v-else class="icon-wrap" :class="toDark ? 'toDark' : 'toLight'">
      <div class="button-icon" :class="hidden ? 'hidden' : ''">
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
    hidden: Boolean,
    toDark: Boolean,
  },
}
</script>

<style scoped>
.buttonWrapper{
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
}
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
.button-icon.hidden {
  font-weight: 500;
  background: transparent;
  color: #011713;
  border-radius: 100px;
  text-align: center;
  line-height: 30px;
  font-size: 24px;
  transition: all 0.5s;
  border: 3px solid #011713;
  padding: 15px 40px;
  z-index: 101;
}
.icon-wrap:hover .button-icon.hidden{
  color: black;
  background: #88F332;
  border: 2px solid #88F332;
}
</style>