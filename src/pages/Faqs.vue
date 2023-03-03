<template>
  <div id="page">
    <div class="mainSection section-one">
      <BaseTitle :tag="'h1'" :addStyle="'margin-bottom: 30px;'"><b>FAQ</b></BaseTitle>
      <Dropdown :content="getFaq" />
    </div>
  </div>
</template>

<script>
import BaseTitle from "../components/BaseTitle";
import Seperator from "../components/Seperator";
import Dropdown from "../components/Dropdown";

export default {
  name: "Faq",
  components: {
    Dropdown,
    Seperator,
    BaseTitle,
  },
  computed: {
    getFaq(){
      const content = [];
      this.$static.faqs.edges.forEach( (faq) => {
        content.push(
            {
              title:faq.node.title,
              content: faq.node.content
            }
        )
      })
      return content;
    }
  },
  metaInfo() {
    return {
      title: "FAQ's",
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
  // ADD CATEGORIES FOR FAQ
}
</script>

<static-query>
query{
  faqs: allWordPressFaq{
    edges{
      node{
        slug,
        title,
        content,
        date
      }
    }
  }
}
</static-query>

<style scoped>
  .section-one{
    margin-top: 200px !important;
  }
</style>