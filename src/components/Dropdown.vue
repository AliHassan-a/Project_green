<template>
  <div class="accordion">
    <div class="accordion-group" v-for="(accordion, index, key) in content" :key="key" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <div class="accordion-menu">
        <div class="accordion-plus greenColor">+</div>
        <div class="accordion-minus greenColor">-</div>
        <h4 itemprop="name" class="accordion-title">{{ accordion.title }}</h4>
      </div>
      <div class="accordion-content" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">{{ accordion.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap/all";
import BaseTitle from "./BaseTitle";

export default {
  name: "Dropdown",
  props: {
    content: Array,
  },
  components: {BaseTitle},
  mounted(){
    let groups = gsap.utils.toArray(".accordion-group");
    let menus = gsap.utils.toArray(".accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu) => {
      menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu) {
      menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
      let menu = element.querySelector(".accordion-menu");
      let box = element.querySelector(".accordion-content");
      let minusElement = element.querySelector(".accordion-minus");
      let plusElement = element.querySelector(".accordion-plus");

      gsap.set(box, { height: "auto" });

      let animation = gsap
          .timeline()
          .from(box, {
            height: 0,
            duration: 0.5,
            ease: "power1.inOut"
          })
          .from(minusElement, { duration: 0.2, autoAlpha: 0, ease:"none" }, 0)
          .to(plusElement, { duration: 0.2, autoAlpha: 0, ease:"none" }, 0)
          .reverse();

      return function (clickedMenu) {
        if (clickedMenu === menu) {
          animation.reversed(!animation.reversed());
        } else {
          animation.reverse();
        }
      };
    }
  }
}
</script>

<style scoped>
.accordion {
  width: 100%;
}

.accordion-group{

}

.accordion-menu {
  font-size: 15px;
  color: white;
  padding: 20px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
  background: rgba(0,0,0,0.3);
  position:relative;
  border-radius: 22px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.accordion-title{
  margin-left: 80px;
}

.accordion-content {
  height: 0;
  overflow: hidden;
  font-size: 14px;
}

.accordion-content p{
  padding: 0px 20px;
}

.accordion-content.expanded {
  height: 0;
  overflow: hidden;
}
.accordion-plus,
.accordion-minus{
  font-size: 3em;
  position:absolute;
  top: 10px;
  left:20px;
}
p {
  margin: 10px;
}
@media only screen and (max-width: 1024px){
  .accordion-plus,
  .accordion-minus{
    font-size: 3em;
    position:absolute;
    top: 0px;
    left:20px;
  }
  .accordion-title{
     margin-left: 40px;
  }

}
</style>