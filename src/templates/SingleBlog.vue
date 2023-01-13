<template>
  <div class="mainSection">
    <img :src="$context.featuredMedia.sourceUrl" :title="$context.featuredMedia.title" :alt="$context.featuredMedia.altText" >
    <h1>{{ $context.title }}</h1>
    <p v-html="$context.content"></p>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  metaInfo() {
    return {
      title: this.$context.title,
      meta: [
        { name: 'title', content: this.$context.acf.metaTitle },
        { name: 'description', content: this.$context.acf.metaDescription },
      ]
    }
  }
}
</script>

<style scoped>

</style>