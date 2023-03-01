<template>
  <div id="page">
    <section class="first">
      <div class="outer">
        <div class="inner">
          <div class="bg one">
            <h2 class="section-heading">Energieeffizientes SmartOffice</h2>
            <p class="section-text"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="second">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <h2 class="section-heading">Wir fördern diverse Sportvereine</h2>
            <p class="section-text"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="third">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <h2 class="section-heading">Wir unterstützen regionale Produkte</h2>
            <p class="section-text"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="fourth">
      <div class="outer">
        <div class="inner">
          <div class="bg">
            <h2 class="section-heading">Und internationale Organisationen</h2>
            <p class="section-text"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="fifth">
      <div class="outer">
        <div class="inner">
          <div class="bg">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap, Observer, SplitText } from "gsap/all";
export default {
  name: "Nachhaltigkeit",
  mounted(){
    gsap.registerPlugin(Observer);

    let sections = document.querySelectorAll("section"),
        images = document.querySelectorAll(".bg"),
        headings = gsap.utils.toArray(".section-heading"),
        texts = gsap.utils.toArray(".section-text"),
        outerWrappers = gsap.utils.toArray(".outer"),
        innerWrappers = gsap.utils.toArray(".inner"),
        splitHeadings = headings.map(heading => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" })),
        splitText = texts.map(text => new SplitText(text, { type: "chars,words,lines", linesClass: "clip-text" })),

        currentIndex = -1,
        wrap = gsap.utils.wrap(0, sections.length - 1),
        animating;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      index = wrap(index); // make sure it's valid
      animating = true;
      let fromTop = direction === -1,
          dFactor = fromTop ? -1 : 1,
          tl = gsap.timeline({
            defaults: { duration: 1.25, ease: "power1.inOut" },
            onComplete: () => animating = false
          });
      if (currentIndex >= 0) {
        // The first time this function runs, current is -1
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
            .set(sections[currentIndex], { autoAlpha: 0 });
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([outerWrappers[index], innerWrappers[index]], {
        yPercent: i => i ? -100 * dFactor : 100 * dFactor
      }, {
        yPercent: 0
      }, 0)
          .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
          .fromTo(splitHeadings[index].chars, {
            autoAlpha: 0,
            y: 10 * dFactor
          }, {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: {
              each: 0.07,
            }
          }, 0.2)
          .fromTo(splitText[index].chars, {
              autoAlpha: 0,
              y: 10 * dFactor
            }, {
              autoAlpha: 1,
              yPercent: 0,
              duration: 1,
              ease: "power2",
              stagger: {
                each: 0.01,
              }
            }, "-=1");

      currentIndex = index;
    }

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
    });

    gotoSection(0, 1);
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  font-weight: 700;
  width: 90vw;
  max-width: 800px;
}
p{
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
}

section {
  height: 100%;
  width: 100%;
  top: 0;
  position: fixed;
  visibility: hidden;
}
section .outer,
section .inner {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}
section .bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  background-size: cover;
  background-position: center;
}
section .bg h2 {
  z-index: 2;
}
section .bg .clip-text {
  overflow: hidden;
}

.first .bg {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url("../assets/windmill.webp");
}

.second .bg {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url("../assets/handball.webp");
}

.third .bg {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url("../assets/projekte.webp");
}

.fourth .bg {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 100%), url("../assets/ape.webp");
}

h2 * {
  will-change: transform;
}
</style>