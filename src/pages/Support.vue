<template>
  <Layout>
    <div id="page" class="site">
      <div id="one" class="mainSection section-one">
        <div class="contentContainer">
          <iframe src="https://crm.grnstn.net/upload/crm/form/loader_27_44frta.js"></iframe>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import initGsap from "../misc/gsapBase";

export default {
  name: "Support",
  mounted() {
    this.pageGsap = new initGsap({}, this);
    (function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://crm.grnstn.net/upload/crm/form/loader_27_44frta.js');
  },
}
</script>

<style scoped>

</style>