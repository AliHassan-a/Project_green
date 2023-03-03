<template>
  <div class="buttonWrapper" :style="'justify-content:' + align">
    <div v-if="linkTo == '#' || linkTo == undefined">
      <button class="light" v-if="theme == 'light' || theme == ''">
        <div class="button-blob light" />
        <span class="title">{{ title }}</span>
        <span class="title title--hovered"><b>{{ title }}</b></span>
      </button>
      <button :class="isTag ? 'btnTag' : ''" class="dark" v-else-if="theme == 'dark'">
        <div class="button-blob dark" />
        <span class="title">{{ title }}</span>
        <span class="title title--hovered"><b>{{ title }}</b></span>
      </button>
      <button class="link" v-else-if="theme == 'link'">
        <span class="title">{{ title }}</span>
      </button>
      <button class="more" v-else-if="theme == 'more'">
        <h3 class="title">
          {{ title }}
          <svg id="rightChev" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </h3>
      </button>
    </div>
    <a v-else :href="'/' + linkTo">
      <button class="light" v-if="theme == 'light' || theme == ''">
        <div class="button-blob light" />
        <span class="title">{{ title }}</span>
        <span class="title title--hovered"><b>{{ title }}</b></span>
      </button>
      <button class="dark" v-else-if="theme == 'dark'">
        <div class="button-blob dark" />
        <span class="title">{{ title }}</span>
        <span class="title title--hovered"><b>{{ title }}</b></span>
      </button>
      <button class="link" v-else-if="theme == 'link'">
        <span class="title">{{ title }}</span>
      </button>
      <button class="more" v-else-if="theme == 'more'">
        <h3 class="title">
          {{ title }}
          <svg id="rightChev" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </h3>
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    title: String,
    linkTo: String,
    theme: String,
    align: String,
    isTag: Boolean,
  }
}
</script>

<style>
.btnTag{
  padding: 0px 10px !important;
}
</style>