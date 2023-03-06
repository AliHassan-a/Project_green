<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="contentContainer">
          <iframe class="support" src="https://admin.greenstein.design/support.html"></iframe>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>

export default {
  name: "Support",
  metaInfo() {
    return {
      title: "Support",
      meta: [
        { name: 'title', content: "Designagentur" },
        { name: 'description', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'og:title', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'og:description', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'twitter:title', content: "Strategie & Marketing - Entwicklung - Performance" },
        { name: 'twitter:description', content: "Strategie & Marketing - Entwicklung - Performance" },
      ]
    }
  }
}
</script>

<style scoped>
  .support{
    width: 100%;
    height: 10vh;
    min-height: 800px;
    border: none;
  }
</style>