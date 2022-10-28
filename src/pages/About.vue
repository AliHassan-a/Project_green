<template>
  <Layout>
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <baseButton class="animateFadeInUpSecond" :title="'Startseite'" :linkTo="''"></baseButton>
  </Layout>
</template>

<script>
import baseButton from "../components/BaseButton";

export default {
  components: {
    baseButton,
  },
  metaInfo: {
    title: 'About us'
  }
}
</script>
