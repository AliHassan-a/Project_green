<template>
  <div ref="sliderWrapper" class="sliderWrapper animateBlockItem">
    <div class="prev greenBg sliderArrow arrowNext" style="z-index: 100;">
      <svg class="arrowNext" width="100" height="100" fill="black" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
    </div>
    <div class="next greenBg sliderArrow arrowPrev" style="z-index: 100;">
      <svg class="arrowPrev" width="100" height="100" fill="black" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
      </svg>
    </div>
    <div class="wrapper toDirectionHover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/*
Template for Tesimonialstyle - put content in slot position!

            <div class="box testimonials blackBg" v-for="(slide, index, key) in testimonialsContent" :key="key">
              <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.title}}</b></BaseTitle>
              <BaseText :addStyle="'white-space: normal'">{{slide.description}}</BaseText>
              <div class="testimonial">
                <hr class="testimonialBorder">
                <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.testimonialAuthor}}</b></BaseTitle>
                <BaseText :addStyle="'white-space: normal'" :addClass="'greenColor'">{{slide.testimonialPosition}}</BaseText>
              </div>
            </div>

Template for Steps:

<div class="box blackBg steps" v-for="(slide, index, key) in steps" :key="key">
              <BaseTitle :class="'greenColor'" :tag="'h3'"><span style="font-weight: 800;">{{index+1}}.</span></BaseTitle>
              <BaseTitle :align="'left'" :tag="'h3'"><b>{{slide.title}}</b></BaseTitle>
              <BaseText :addStyle="'white-space: normal'">{{slide.description}}</BaseText>
            </div>

Template for Images:
(Due to issues with dynamic asset loading in Gridsome we use no for loop)

<div class="box">
              <g-image src="@/assets/3guys.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/3guys.webp"></g-image>
            </div>
            <div class="box">
              <g-image src="@/assets/3guys.webp"></g-image>
            </div>
*/
import { gsap, Draggable } from "gsap/all"
export default {
  name: "SliderIndex",
  mounted(){
    const wrapper = document.querySelector(".wrapper");
    const sliderWrapper = this.$refs.sliderWrapper;
    const boxes = sliderWrapper.querySelectorAll(".box");
    gsap.registerPlugin(Draggable);

    let activeElement;
    const loop = horizontalLoop(boxes, {
      paused: true,
      draggable: true,
      center: true,
      onChange: (element, index) => {
        activeElement && activeElement.classList.remove("active");
        element.classList.add("active");
        activeElement = element;
      }
    });

    boxes.forEach((box, i) => box.addEventListener("click", () => loop.toIndex(i, {duration: 0.8, ease: "power1.inOut"})));

    sliderWrapper.querySelector(".prev").addEventListener("click", () => loop.next({duration: 0.8, ease: "power1.inOut"}));
    sliderWrapper.querySelector(".next").addEventListener("click", () => loop.previous({duration: 0.8, ease: "power1.inOut"}));

    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let onChange = config.onChange,
          lastIndex = 0,
          tl = gsap.timeline({repeat: config.repeat, onUpdate: onChange && function() {
              let i = tl.closestIndex();
              if (lastIndex !== i) {
                lastIndex = i;
                onChange(items[i], i);
              }
            }, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
          length = items.length,
          startX = items[0].offsetLeft,
          times = [],
          widths = [],
          spaceBefore = [],
          xPercents = [],
          curIndex = 0,
          indexIsDirty = false,
          center = config.center,
          pixelsPerSecond = (config.speed || 1) * 100,
          snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
          timeOffset = 0,
          container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
          totalWidth,
          getTotalWidth = () => items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + spaceBefore[0] + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0),
          populateWidths = () => {
            let b1 = container.getBoundingClientRect(), b2;
            items.forEach((el, i) => {
              widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
              xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
              b2 = el.getBoundingClientRect();
              spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
              b1 = b2;
            });
            gsap.set(items, {
              xPercent: i => xPercents[i]
            });
            totalWidth = getTotalWidth();
          },
          timeWrap,
          populateOffsets = () => {
            timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
            center && times.forEach((t, i) => {
              times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
            });
          },
          getClosest = (values, value, wrap) => {
            let i = values.length,
                closest = 1e10,
                index = 0, d;
            while (i--) {
              d = Math.abs(values[i] - value);
              if (d > wrap / 2) {
                d = wrap - d;
              }
              if (d < closest) {
                closest = d;
                index = i;
              }
            }
            return index;
          },
          populateTimeline = () => {
            let i, item, curX, distanceToStart, distanceToLoop;
            tl.clear();
            for (i = 0; i < length; i++) {
              item = items[i];
              curX = xPercents[i] / 100 * widths[i];
              distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
              distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
              tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
                  .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
                  .add("label" + i, distanceToStart / pixelsPerSecond);
              times[i] = distanceToStart / pixelsPerSecond;
            }
            timeWrap = gsap.utils.wrap(0, tl.duration());
          },
          refresh = (deep) => {
            let progress = tl.progress();
            tl.progress(0, true);
            populateWidths();
            deep && populateTimeline();
            populateOffsets();
            deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
          },
          proxy;
      gsap.set(items, {x: 0});
      populateWidths();
      populateTimeline();
      populateOffsets();
      window.addEventListener("resize", () => refresh(true));
      function toIndex(index, vars) {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
        let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
        if (time > tl.time() !== index > curIndex && index !== curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        if (time < 0 || time > tl.duration()) {
          vars.modifiers = {time: timeWrap};
        }
        curIndex = newIndex;
        vars.overwrite = true;
        gsap.killTweensOf(proxy);
        return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
      }
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.closestIndex = setCurrent => {
        let index = getClosest(times, tl.time(), tl.duration());
        if (setCurrent) {
          curIndex = index;
          indexIsDirty = false;
        }
        return index;
      };
      tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
      tl.next = vars => toIndex(tl.current()+1, vars);
      tl.previous = vars => toIndex(tl.current()-1, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true); // pre-render for performance
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      if (config.draggable && typeof(Draggable) === "function") {
        proxy = document.createElement("div")
        let wrap = gsap.utils.wrap(0, 1),
            ratio, startProgress, draggable, dragSnap,
            align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
            syncIndex = () => tl.closestIndex(true);
        draggable = Draggable.create(proxy, {
          trigger: items[0].parentNode,
          type: "x",
          onPressInit() {
            gsap.killTweensOf(tl);
            startProgress = tl.progress();
            refresh();
            ratio = 1 / totalWidth;
            gsap.set(proxy, {x: startProgress / -ratio});
          },
          onDrag: align,
          onThrowUpdate: align,
          inertia: false,
          snap(value) {
            //note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could suddenly be very large, throwing off the snap. So sense that condition and adjust for it.
            if (Math.abs(startProgress / -ratio - this.x) < 10) {
              requestAnimationFrame(() => this.tween && this.tween.progress(1));
              return this.x;
            }
            let time = -(value * ratio) * tl.duration(),
                wrappedTime = timeWrap(time),
                snapTime = times[getClosest(times, wrappedTime, tl.duration())],
                dif = snapTime - wrappedTime;
            Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
            return (time + dif) / tl.duration() / -ratio;
          },
          onRelease() {
            syncIndex();
            draggable.isThrowing && (indexIsDirty = true);
          },
          onThrowComplete: syncIndex
        })[0];
        tl.draggable = draggable;
      }
      tl.closestIndex(true);
      lastIndex = curIndex;
      onChange && onChange(items[curIndex], curIndex);
      return tl;
    }
  }
}
</script>

<style scoped>
.sliderWrapper{
  width: 100%;
}
.wrapper {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.box {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  margin: 0 20px;
  padding: 0;
  position: relative;
  flex-shrink: 0;
  color: black;
  font-size: 21px;
  cursor: pointer;
}
.box:last-child{
  margin-right: 40px;
}
.box.active {
  /*active Image here*/
}
button {
  padding: 1rem 2rem 1rem 2rem;
  border: none;
  background: #555;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
}
.sliderArrow{
  width: 60px;
  height: 60px;
  border-radius: 100px;
  position: absolute;
  display: inline-block;
  top: -40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sliderArrow svg{
  width: 40px;
  height: 40px;
}
div.arrowNext{
  right: 12.5vw;
}
div.arrowPrev{
  right: calc(12.5vw + 70px);
}
.arrowPrev svg{
  left: 0;
  transform: rotate(180deg);
}
/* TESTIMONIAL */
.box.testimonials{
  width: 420px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  padding: 30px;
}
.testimonial{
  position: absolute;
  width: calc(100% - 60px);
  bottom:30px;
  left: 30px;
}
.testimonialBorder{
  margin-left: 0px;
  width: 100px;
  border: 2px solid #88F332;
}
/* STEPS */
.box.steps{
  width: 620px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  padding: 30px;
}
/*SIMPLE*/
.box.simple{
  width: 620px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  padding: 30px;
}
@media only screen and (max-width: 1024px){
  .box {
    width: 100% !important
  }
  .sliderWrapper{
    margin-top: 30px;
  }
  .sliderArrow{
    width: 50px;
    height: 50px;
    top: -25px
  }
  .sliderArrow svg{
    width: 30px;
    height: 30px;
  }
  div.arrowNext{
    right: calc(20vw - 55px);
  }
  div.arrowPrev{
    right: calc(20vw + 5px);
  }
  .box.steps{
    height: 600px;
  }
  .box.testimonials{
    height: 570px;
    padding: 20px;
  }
  .box.simple{
    height: 600px;
    padding: 20px;
  }
}
@media only screen and (min-width: 1921px){
  .box{
    width: 16%;
  }
  .box.testimonials{
    height: 600px;
    padding: 20px;
  }
  .box.simple{
    height: 500px;
    padding: 20px;
  }
  .box.steps{
    height: 500px;
  }
}
</style>