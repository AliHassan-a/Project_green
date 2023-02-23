<template>
  <Layout>
    <div class="mainSection section-one">
    </div>
    <div class="mainSection section-two">
    </div>
    <div class="mainSection section-three">
    </div>
    <div class="mainSection section-four">
    </div>
    <div class="mainSection section-five">
    </div>
    <div class="mainSection section-six">
    </div>
  </Layout>
</template>

<script>
import initGsap from "../misc/gsapBase";

export default {
  name: "SingleProject",
  components: {},
  mounted() {
    this.$root.$emit("repaint-bg", 150);
    this.pageGsap = new initGsap({}, this);
  },
  methods: {
    getFormattedDate(date){
      const newDate = new Date(date);
      return newDate.toLocaleDateString('de-de');
    },
    getFeaturedTitle(){
      return this.$context.title;
    }
  },
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