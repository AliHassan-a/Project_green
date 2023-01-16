<template>
  <div class="buttonWrapper">
    <g-link :to="'/' + linkTo" v-if="linkTo != '#'">
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
      <button class="more" v-else-if="theme == 'more'">
        <p class="title">
          {{ title }}
          <svg id="rightChev" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </p>
      </button>
    </g-link>
    <div v-else>
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
      <button class="more" v-else-if="theme == 'more'">
        <p class="title">
          {{ title }}
          <svg id="rightChev" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </p>
      </button>
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
  },
}
</script>

<style scoped>
.buttonWrapper{
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.buttonWrapper p{
  white-space: nowrap;
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
/* LINK */
button.link{
  background: transparent;
  border: none;
  border-bottom: 2px solid #41514E;
  padding: 0px 10px;
  margin: 0px 0px;
  transition: all 0.2s ease-out;
}
button.link:hover{
  border-bottom: 2px solid #88F332;
  padding: 0px 0px;
  margin: 0px 10px;
  transform: scale(0.95);
}
button.link p{
  font-size: 32px;
  font-weight: 600;
  transition: all 0.2s ease-out;
}
/* More */
button.more{
  background: transparent;
  border: none;
  padding: 0px 10px;
  transition: all 0.2s ease-out;
  margin: auto;
}
button.more p{
  font-size: 32px;
  transition: all 0.2s ease-out;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
button.more #rightChev{
  width: 35px;
  height: 35px;
  margin-left: 20px;
  transition: margin 0.2s ease-out;
}
button.more:hover #rightChev{
  margin-left: 30px;
}
</style>