<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one" style="margin-top: 200px !important;" >
        <div class="innerContentContainer">
          <BaseTitle :tag="'h1'" style="margin-bottom: 50px;">Impressum</BaseTitle>
          <div class="singleContent" v-html="getImpressum"></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import BaseText from "../components/BaseText";
import initGsap from "../misc/gsapBase";
import BaseTitle from "../components/BaseTitle";

export default {
  name: "Impressum",
  components: {
    BaseText,
    BaseTitle,
  },
  mounted() {
    new initGsap({}, this);
  },
  computed: {
    getImpressum() {
      return this.$static.posts.edges.filter(
          function(el){
            return el.node.title == "Impressum";
          }
      )[0].node.content
    }
  },
  metaInfo() {
    return {
      title: "Impressum"
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