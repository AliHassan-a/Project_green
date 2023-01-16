<template>
  <div class="mainSection">
    <BaseTitle :tag="'h1'"><b>FAQ</b><Seperator :theme="'dark'"></Seperator></BaseTitle>
    <div v-for="(faq, index, key) in $static.faqs.edges" :key="key"  itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h2 itemprop="name">{{ faq.node.title }}</h2>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <div itemprop="text" v-html="faq.node.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTitle from "../components/BaseTitle";
import Seperator from "../components/Seperator";

export default {
  name: "Faq",
  components: {
    Seperator,
    BaseTitle,
  }
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

</style>