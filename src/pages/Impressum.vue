<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one" style="margin-top: 200px !important;" >
        <div class="contentContainer">
          <div class="singleContent" v-html="getDatenschutz"></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BaseText from "../components/BaseText";
import initGsap from "../misc/gsapBase";

export default {
  name: "Impressum",
  components: {
    BaseText,
  },
  mounted() {
    new initGsap({}, this);
  },
  computed: {
    getDatenschutz() {
      return this.$static.posts.edges.filter(
          function(el){
            return el.node.title == "Impressum";
          }
      )[0].node.content
    }
  },
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