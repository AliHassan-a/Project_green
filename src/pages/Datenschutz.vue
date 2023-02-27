<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="contentContainer">
          <div class="singleContent" v-html="getDatenschutz"></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BaseText from "../components/BaseText";

export default {
  name: "Impressum",
  components: {
    BaseText,
  },
  computed: {
    getDatenschutz() {
      return this.$static.posts.edges.filter(
          function (el) {
            return el.node.title == "Datenschutz";
          }
      )[0].node.content
    }
  }
}
</script>

<static-query>
query{
  posts: allWordPressBuerokratie{
    edges{
      node{
        slug,
        title,
        date,
        content,
        featuredMedia{
          sourceUrl,
          title,
          altText
        }
      }
    }
  }
}
</static-query>