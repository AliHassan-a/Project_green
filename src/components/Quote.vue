<template>
  <div class="quoteWrapper">
    <div class="quote">
      <g-image class="animateBlockItem" src="@/assets/zitat.webp"></g-image>
      <h2 class="animateBlockText">
        Greenstein vertritt meine Werte - Zukunftsorientiert, gemeinschaftlich, nach vorne Gewand. Diese Werte lebe ich nicht nur für meine Mitarbeitenden, sondern auch für meine Kunden vor. Der Erfolg meiner Kunden und die Weiterentwicklung meiner Mitarbeiter stehen für mich an erster Stelle.
      </h2>
      <hr class="animateBlockItem testimonialBorder">
      <h2 class="animateBlockHead"><b>Rene Grebenstein</b> </h2>
      <p class="animateBlockHead greenColor quotePosition" > Inhaber </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote"
}
</script>

<style scoped>
.quoteWrapper{
  margin-top: 200px;
  /*fit so number of quotes*/
  /*height: calc(3 * 100vh + 2 * 400px);*/
  height: 130vh;
}
.quote:first-child{
  margin-top: 20px;
}
.quote{
  background: black;
  margin-top: 400px;
  width: 75vw;
  margin-left: 2.5%;
  padding: 0% 10%;
  height: calc(87vh);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  transform-origin: center;
  /*top if number of quotes > 1*/
  /*transform-origin: top;*/
}
.quote img{
  margin-bottom: 20px;
  width: 100px;
}
.quotePosition{
  font-size: 28px;
}
.testimonialBorder{
  margin: 80px 0px 20px 0px;
  width: 100px;
  border: 2px solid #88F332;
}

@media only screen and (max-width: 1024px) {
  .quoteWrapper{
    margin-top: 230px;
    height: 130vh;
  }
  .quote{
    padding: 20px 10%;
    height: unset;
    margin-top: 100px;
  }
  .quote img{
    margin-bottom: 10px;
    margin-top: 10px;
    width: 50px;
  }
  .quotePosition{
    font-size: 14px;
  }
  .testimonialBorder{
    margin: 30px 0px 10px 0px;
    width: 100px;
    border: 2px solid #88F332;
  }
}
</style>