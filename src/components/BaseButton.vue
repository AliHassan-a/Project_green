<template>
  <div class="buttonWrapper">
    <g-link :to="'/' + linkTo">
      <button class="light" v-if="theme == 'light' || theme == ''">
        <div class="button-blob light" />
        <p class="title">{{ title }}</p>
        <p class="title title--hovered"><b>{{ title }}</b></p>
      </button>
      <button class="dark" v-else-if="theme == 'dark'">
        <div class="button-blob dark" />
        <p class="title">{{ title }}</p>
        <p class="title title--hovered"><b>{{ title }}</b></p>
      </button>
      <button class="link" v-else-if="theme == 'link'">
        <p class="title">{{ title }}</p>
      </button>
    </g-link>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    title: String,
    linkTo: String,
    theme: String,
  },
}
</script>

<style scoped>
.buttonWrapper{
  display:flex;
  justify-content: center;
  align-items: center;
}
/* LIGHT */
button.light{
  background: #88F332;
  border: none;
  color: black;
  border-radius: 100px;
  text-align: center;
  transition: all 0.5s;
  padding: 0px 48px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  height: 70px;
  overflow: hidden;
  position: relative;
}
button.light p{
  color: black;
  transition: all 0.3s ease-out;
  line-height: 70px;
  font-size: 25px;
}
button.light:hover p.title{
  transform: translateY(-70px);
}
button.light:hover p.title--hovered{
  transform: translateY(-70px);
}
button.light:hover div.button-blob{
 transform: scale(20);
  opacity: 1;
}
div.button-blob.light{
  opacity: 0;
  background: white;
  position: absolute;
  bottom: 0px;
  width: 20px;
  height: 20px;
  left: calc(50% - 10px);
  border-radius: 100%;
  transition: transform 1s ease, opacity 0.1s linear;
}

/* DARK */
button.dark{
  background: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 100px;
  text-align: center;
  transition: all 0.5s;
  padding: 0px 48px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  height: 70px;
  overflow: hidden;
  position: relative;
}
button.dark p{
  color: white;
  transition: all 0.3s ease-out;
  line-height: 70px;
  font-size: 25px;
}
button.dark p.title--hovered{
  color: black;
}
button.dark:hover p.title{
  transform: translateY(-70px);
}
button.dark:hover p.title--hovered{
  transform: translateY(-70px);
}
button.dark:hover div.button-blob{
  transform: scale(20);
  opacity: 1;
}
div.button-blob.dark{
  opacity: 0;
  background: white;
  position: absolute;
  bottom: 0px;
  width: 20px;
  height: 20px;
  left: calc(50% - 10px);
  border-radius: 100%;
  transition: transform 1s ease, opacity 0.1s linear;
}
</style>