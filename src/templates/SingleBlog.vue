<template>
  <Layout>
    <div class="featuredImageWrapper">
      <img class="featuredImage parallax-bg" :src="$context.featuredMedia.sourceUrl" :title="$context.featuredMedia.title" :alt="$context.featuredMedia.altText" >
      <div class="featuredImageOverlay" />
    </div>
    <div class="mainSection">
      <div class="metaData">
        <p class="small greenColor">{{ getFormattedDate($context.date) }}</p>
        <div class="socialShare">
          <a class="twitter-share-button" href="https://twitter.com/intent/tweet">
            <g-image src="@/assets/twitter.webp"></g-image>
          </a>
          <!--
          <a class="twitter-share-button" href="https://twitter.com/intent/tweet">
            <g-image src="@/assets/mail.webp"></g-image>
          </a>
          -->
        </div>
      </div>
      <BaseTitle :align="'left'" :tag="'h1'" :addStyle="'font-size: clamp(1.5em, calc(100vw / 50), 2.4em);'" class="featuredTitle">
        <span class="animateFadeInLeft" style="font-weight: 400">{{ getFeaturedTitle()[0] }}</span><br>
        <span v-if="getFeaturedTitle()[1]" class="greenColor animateFadeInLeft">{{ getFeaturedTitle()[1] }}</span>
      </BaseTitle>
    </div>
    <div class="mainSection contentWrapper">
      <div class="singleContent" v-html="$context.content"></div>
      <div class="sidebarBlog simpleStickySection">
        <a class="singleBlog" :href="'/blog/' + edge.node.slug" v-for="edge in $static.posts.edges" :key="edge.node.id">
          <div class="singleCard">
            <img class="featured" v-if="edge.node.featuredMedia != null" :src="edge.node.featuredMedia.sourceUrl" :title="edge.node.featuredMedia.title" :alt="edge.node.featuredMedia.altText">
            <p v-html="edge.node.title">
            <p style="font-size: 18px" class="greenColor" v-html="getFormattedDate(edge.node.date)"></p>
          </div>
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
import BaseTitle from "../components/BaseTitle";
import initGsap from "../misc/gsapBase";

export default {
  name: "SingleBlog",
  components: {
    BaseTitle,
  },
  mounted() {
    new initGsap({
      simpleStickySection: true,
    }, this);
    console.log($static.posts.edges);
  },
  methods: {
    getFormattedDate(date){
      const newDate = new Date(date);
      return newDate.toLocaleDateString('de-de');
    },
    getFeaturedTitle(){
      return this.$context.title.split("*");
    }
  },
  metaInfo() {
    return {
      title: this.$context.title,
      meta: [
        { name: 'title', content: this.$context.acf.metaTitle },
        { name: 'description', content: this.$context.acf.metaDescription },
        { name: 'og:title', content: this.$context.acf.metaTitle },
        { name: 'og:description', content: this.$context.acf.metaDescription },
        { name: 'twitter:title', content: this.$context.acf.metaTitle },
        { name: 'twitter:description', content: this.$context.acf.metaDescription },
        { name: 'og:image', content: this.$context.featuredMedia.sourceUrl },
      ],
      script: [
        { innerHTML: '{"@context":"https://schema.org/","@type":"Product","name":"Greenstein Designagentur","description":"Branding, Entwicklung, Strategie","aggregateRating":{"@type":"AggregateRating","reviewCount":56,"ratingValue":4.95,"bestRating":5,"worstRating":1}}', type: 'application/ld+json' }
      ]
    }
  }
}
</script>

<style scoped>
.mainSection{
  min-height: unset;
}
.metaData{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.socialShare{
  display: flex;
  margin-bottom: 70px;
}
.socialShare img{
  margin-left: 10px;
}
.featuredImageWrapper{
  margin: 0px 0px 50px 0px;
  width: 100%;
  max-height: 1000px;
  overflow: hidden;
}
.featuredImageOverlay{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
img.featuredImage{
  width: 100%;
  max-height: 600px;
  object-fit: cover;
}
.featuredTitle{
  margin-bottom: 50px;
}
.singleContent a{
  color: #88F332;
}
.contentWrapper{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
}
div.sidebarBlog{
  padding-top: 100px;
  max-width: 200px;
}
.simpleStickySection{
  height: inherit;
}
@media only screen and (max-width:1024px){
  .contentWrapper{
    flex-direction: column;
  }
}
</style>

<static-query>
query{
  posts: allWordPressPost(limit: 3){
    edges{
      node{
        slug,
        title,
        date,
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