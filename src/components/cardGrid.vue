<template>
  <div class="gsCardsWrapper">
    <div v-for="(employee, index, key) in content.edges" :key="key" class="singleCard animateBlockItemStagger">
      <g-image :title="employee.node.featuredMedia.title" :src="getCutImageUrl(employee.node.featuredMedia.sourceUrl)" :alt="employee.node.featuredMedia.alt" />
      <BaseTitle :addClass="'blackColor'" :align="'left'" :tag="'h3'" ><b>{{ employee.node.title }}</b></BaseTitle>
      <BaseText :addClass="'blackColor'">{{ employee.node.content.replace(/<[^>]*>?/gm, '') }}</BaseText>
    </div>
  </div>
</template>

<script>
import BaseTitle from "./BaseTitle";
import BaseText from "./BaseText";

export default {
  name: "cardGrid",
  components: {
    BaseTitle,
    BaseText,
  },
  props: {
    content: Object,
  },
  methods: {
    getCutImageUrl(imageUrl){
      return imageUrl.replace("admin.", "");
    }
  }
}
</script>

<style scoped>
  .gsCardsWrapper{
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  .gsCardsWrapper .singleCard{
    margin-bottom: 30px;
    width: calc(33% - 20px);
  }
  @media only screen and (max-width: 1024px) {
    .gsCardsWrapper{
      flex-direction: column;
      gap: 60px;
    }
    .gsCardsWrapper .singleCard{
      width: 100%;
    }
  }
</style>
