<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-head">
        <BaseTitle :align="'left'" :tag="'h2'" class="defaultMarginX">Aktuelles aus Agentur & Werbewelt</BaseTitle>
      </div>
      <div id="one" class="mainSection section-one">
        <a class="singleBlog animateBlockItemStagger" :href="'/blog/' + edge.node.slug"
          v-for="edge in $static.posts.edges" :key="edge.node.id">
          <div class="singleCard">
            <img class="featured" v-if="edge.node.featuredMedia != null"
              :src="edge.node.featuredMedia.mediaDetails.sizes.mediumLarge.sourceUrl.replace('admin.', '')"
              :title="edge.node.featuredMedia.title" :alt="edge.node.featuredMedia.altText">
            <p style="font-size: 20px; line-height: 1.2em;" v-html="edge.node.title"></p>
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
  name: "Blog",
  components: {
    BaseTitle,
  },
  methods: {
    getFormattedDate(date) {
      const newDate = new Date(date);
      return newDate.toLocaleDateString('de-de');
    },
  },
  mounted() {
    if (initGsap != false) {
      new initGsap({}, this);
    }
  },
  metaInfo() {
    return {
      title: "Blog | Greenstein Designagentur",
      meta: [
        { name: 'title', content: "Blog | Greenstein Designagentur" },
        { name: 'description', content: "Unsere Blogartikel zum Thema Web, Branding und Marketing" },
        { name: 'og:title', content: "Blog | Greenstein Designagentur" },
        { name: 'og:description', content: "Unsere Blogartikel zum Thema Web, Branding und Marketing" },
        { name: 'twitter:title', content: "Blog | Greenstein Designagentur" },
        { name: 'twitter:description', content: "Unsere Blogartikel zum Thema Web, Branding und Marketing" },
      ],
      script: [
        { innerHTML: '{"@context":"https://schema.org/","@type":"Product","name":"Greenstein Designagentur","description":"Branding, Entwicklung, Strategie","aggregateRating":{"@type":"AggregateRating","reviewCount":56,"ratingValue":4.95,"bestRating":5,"worstRating":1}}', type: 'application/ld+json' }
      ]
    }
  }
}
</script>

<style scoped>
.section-head {
  min-height: unset;
  margin-top: 200px;
  margin-bottom: 60px;
}

.section-one {
  flex-direction: row;
  gap: 25px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: unset;
}

.singleBlog {
  width: calc(33% - 16.666px);
  flex-grow: 1;
}

.singleBlog:last-child {
  flex-grow: 0;
}

img.featured {
  height: 333px;
  width: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 1024px) {
  .section-one {
    flex-direction: column;
    gap: 25px;
    flex-wrap: wrap;
    min-height: unset;
  }

  .singleBlog {
    width: 100%;
    flex-grow: 1;
  }
}
</style>

<static-query>
query{
  posts: allWordPressPost{
      edges{
        node{
        slug,
        title,
        date,
        featuredMedia{
          sourceUrl,
          title,
          altText,
          mediaDetails{
            sizes{
            mediumLarge{
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
}
</static-query>