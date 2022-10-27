<template>
  <nav class="menu">
    <div class="menu__item menu__item--1" data-direction="bt">
      <div class="menu__item-inner">
        <div class="mainmenu">
          <a href="#" class="mainmenu__item">Vision</a>
          <a href="#" class="mainmenu__item">Mission</a>
          <a href="#" class="mainmenu__item">Hurensohn</a>
        </div>
        <p class="label label--topleft label--vert-mirror">the important stuff</p>
      </div>
    </div>
    <div class="menu__item menu__item--2" data-direction="lr">
      <div class="menu__item-inner">
        <div class="sidemenu">
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">FB</span></a>
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">IG</span></a>
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">TT</span></a>
        </div>
      </div>
    </div>
    <div class="menu__item menu__item--3" data-direction="bt">
      <div class="menu__item-inner">
        <div class="sidemenu">
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">Chartexperten</span></a>
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">Kematherm</span></a>
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">Immobilienmanufaktur</span></a>
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">FUN KIDS CAAAARS</span></a>
        </div>
      </div>
    </div>
    <div class="menu__item menu__item--4" data-direction="rl">
      <div class="menu__item-inner">
      </div>
    </div>
    <div class="menu__item menu__item--5" data-direction="tb">
      <div class="menu__item-inner">
      </div>
    </div>
    <button class="action action--menu" style="mix-blend-mode: difference; color: white">
      MENU
    </button>
    <button class="action action--close">
      MENU
    </button>
  </nav>
</template>

<script>
import { gsap, Quint, Quart, Quad } from "gsap/all";
export default {
  name: "Menu",
  mounted(){
    class Menu {
      constructor(el) {
        this.DOM = {el: el};
        // Open and close ctls.
        this.DOM.openCtrl = this.DOM.el.querySelector('.action--menu');
        this.DOM.closeCtrl = this.DOM.el.querySelector('.action--close');
        this.DOM.openCtrl.addEventListener('click', () => this.open());
        this.DOM.closeCtrl.addEventListener('click', () => this.close());

        // The menu items.
        this.DOM.items = Array.from(this.DOM.el.querySelectorAll('.menu__item'));
        // The total number of items.
        this.itemsTotal = this.DOM.items.length;

        // Custom elements that will be animated.
        this.DOM.mainLinks = this.DOM.el.querySelectorAll('.mainmenu > a.mainmenu__item');
        this.DOM.sidemenuLinks = this.DOM.el.querySelectorAll('.sidemenu span.sidemenu__item-inner');
        this.DOM.menulink = this.DOM.el.querySelector('.menu__item-link');
      }
      // Open the menu.
      open() {
        this.toggle('open');
      }
      // Close the menu.
      close() {
        this.toggle('close');
      }
      toggle(action) {
        if ( this.isAnimating ) return;
        // (dis)allow the main image tilt effect.
        this.isAnimating = true;
        // Toggling the open state class.
        this.DOM.el.classList[action === 'open' ? 'add' : 'remove']('menu--open');
        // After all is animated..
        const animationEnd = (pos) => {
          if ( pos === this.itemsTotal-1 ) {
            this.isAnimating = false;
          }
        };
        // Going through each menu´s item.
        this.DOM.items.forEach((el, pos) => {
          // The inner wrapper.
          const innerEl = el.querySelector('.menu__item-inner');
          // config and inner config will have the starting transform values (when opening) and the end ones (when closing) for both the item and its inner element.
          const config = {};
          const configInner = {};
          // Direction defined in the HTML data-direction.
          // bt (bottom to top) || tb (top to bottom) || lr (left to right) || rl (right to left)
          const direction = el.dataset.direction;
          // Using 101% instead of 100% to avoid rendering problems.
          // In order to create the "reveal" effect, the item slides moves in one direction and its inner element in the opposite direction.
          if ( direction === 'bt' ) {
            config.y = '101%';
            configInner.y = '-101%';
            configInner.x = '0%';
          }
          else if ( direction === 'tb' ) {
            config.y = '-101%';
            configInner.y = '101%';
            configInner.x = '0%';
          }
          else if ( direction === 'lr' ) {
            config.x = '-101%';
            configInner.x = '101%';
          }
          else if ( direction === 'rl' ) {
            config.x = '101%';
            configInner.x = '-101%';
          }
          else {
            config.x = '101%';
            config.y = '101%';
            configInner.x = '-101%';
            configInner.y = '-101%';
          }

          if ( action === 'open' ) {
            // Setting the initial values.
            gsap.set(el, config);
            gsap.set(innerEl, configInner);

            // Animate.
            gsap.to([el,innerEl], .9, {
              ease: Quint.easeOut,
              x: '0%',
              y: '0%',
              onComplete: () => animationEnd(pos)
            });
          }
          else {
            gsap.to(el, 0.6, {
              ease: Quart.easeInOut,
              x: config.x || 0,
              y: config.y || 0
            });
            gsap.to(innerEl, 0.6, {
              ease: Quart.easeInOut,
              x: configInner.x || 0,
              y: configInner.y || 0,
              onComplete: () => animationEnd(pos)
            });
          }
        });

        // Show/Hide open and close ctrls.
        gsap.to(this.DOM.closeCtrl, 0.6, {
          ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
          startAt: action === 'open' ? {rotation: 0} : null,
          opacity: action === 'open' ? 1 : 0,
          rotation: action === 'open' ? 180 : 270
        });
        gsap.to(this.DOM.openCtrl, action === 'open' ? 0.6 : 0.3, {
          delay: action === 'open' ? 0 : 0.3,
          ease: action === 'open' ? Quint.easeOut : Quad.easeOut,
          opacity: action === 'open' ? 0 : 1
        });

        // Main links animation.

        gsap.to(this.DOM.mainLinks, action === 'open' ? 0.9 : 0.2, {
          ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
          startAt: action === 'open' ? {y: '50%', opacity: 0} : null,
          y: action === 'open' ? '0%' : '50%',
          opacity: action === 'open' ? 1 : 0,
          stagger: 0.2,
        }, action === 'open' ? 0.1 : -0.1);

        gsap.to(this.DOM.sidemenuLinks, action === 'open' ? 0.5 : 0.2, {
          ease: action === 'open' ? Quint.easeInOut : Quart.easeInOut,
          startAt: action === 'open' ? {y: '100%'} : null,
          y: action === 'open' ? '0%' : '100%',
          stagger: 0.1,
        }, action === 'open' ? 0.05 : -0.05);

        // The "Learn how to participate" menu link.
        gsap.to(this.DOM.menulink, action === 'open' ? 0.9 : 0.6, {
          ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
          startAt: action === 'open' ? {x: '10%'} : null,
          x: action === 'open' ? '0%' : '10%'
        });
      }
    }
    // Initialize the Menu.
    const menu = new Menu(document.querySelector('nav.menu'));
  }
}
</script>

<style scoped>

.hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  pointer-events: none;
}

main {
  position: relative;
  width: 100%;
}
.action {
  background: none;
  border: 0;
  color: #fff;
  cursor: pointer;
  padding: 0;
  font-size: 2em;
}

.action--menu {
  pointer-events: auto;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 1000;
}

.menu--open .action--menu {
  pointer-events: none;
}

.action--close {
  color: black;
  position: absolute;
  top: 1.5rem;
  right: 1.75rem;
  z-index: 1000;
  opacity: 0;
  padding: 0 0.5rem;
}

.icon--menu {
  width: 2rem;
}

.icon--close {
  width: 1rem;
}

.menu {
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3,33.33%);
  pointer-events: none;
}

.menu--open {
  pointer-events: auto;
}

.menu__item {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.menu__item-inner {
  overflow: hidden;
  transform: translate3d(100%,0,0);
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu__item--1 .menu__item-inner {
  background: white;
}
.menu__item--2 .menu__item-inner {
  background: #88F332;
}
.menu__item--3 .menu__item-inner {
  background: #88F332;
}
.menu__item--4 .menu__item-inner {
  background: #88F332;
}
.menu__item--5 .menu__item-inner {
  background: #88F332;
}

.menu__item--4,
.menu__item--5 {
  display: none;
}

.label {
  display: none;
}

.mainmenu__item {
  opacity: 0;
}

.mainmenu__item,
.sidemenu__item {
  position: relative;
  overflow: hidden;
  transition: color 0.1s;
  margin: 0.25rem 0;
  display: block;
}

.sidemenu__item-inner {
  display: block;
  transform: translate3d(0,100%,0);
}

.menu__item-map {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /*background: url(../img/2.jpg) no-repeat 50% 50%;*/
  background-size: cover;
  transition: transform 0.8s cubic-bezier(0.2,1,0.8,1);
}

.menu__item-inner:hover .menu__item-map {
  transform: scale3d(1.1,1.1,1);
}

.menu__item-hoverlink {
  font-weight: bold;
  text-transform: capitalize;
  position: relative;
  z-index: 1000;
  display: block;
}

.menu__item-hoverlink:hover {
  color: var(--color-link);
}

.quote {
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
  max-width: 70%;
  color: var(--color-quote);
  font-family: "sabbath-black",serif;
}

.menu__item-link {
  text-align: left;
  align-self: flex-start;
  justify-self: start;
  font-size: 1.5rem;
  width: 100%;
  line-height: 1;
  padding: 2rem ;
  margin: 3rem 0 auto;
  display: flex;
  flex-direction: column;
  height: calc(100% - 3rem);
}

.menu__item-link::after {
  content: '\27F6';
  display: block;
  margin-top: auto;
  font-size: 0.95rem;
}

.container {
  cursor: pointer;
  display: flex;
}

svg {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
.active svg {
  transform: rotate(90deg);
}
path {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
  stroke-dasharray 500ms cubic-bezier(0.4, 0, 0.2, 1),
  stroke-dashoffset 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
path:nth-child(1) {
  transform-origin: 36% 40%;
}
path:nth-child(2) {
  stroke-dasharray: 29 299;
}
path:nth-child(3) {
  transform-origin: 35% 63%;
}
path:nth-child(4) {
  stroke-dasharray: 29 299;
}
path:nth-child(5) {
  transform-origin: 61% 52%;
}
path:nth-child(6) {
  transform-origin: 62% 52%;
}
.active path:nth-child(1) {
  transform: translateX(9px) translateY(1px) rotate(45deg);
}
.active path:nth-child(2) {
  stroke-dasharray: 225 299;
  stroke-dashoffset: -72px;
}
.active path:nth-child(3) {
  transform: translateX(9px) translateY(1px) rotate(-45deg);
}
.active path:nth-child(4) {
  stroke-dasharray: 225 299;
  stroke-dashoffset: -72px;
}
.active path:nth-child(5) {
  transform: translateX(9px) translateY(1px) rotate(-45deg);
}
.active path:nth-child(6) {
  transform: translateX(9px) translateY(1px) rotate(45deg);
}

@media screen and (min-width: 53em) {
  body {
    padding: 0;
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    min-height: 100vh;
    text-align: left;
  }
  .frame {
    position: fixed;
    z-index: 199;
    top: 0;
    left: 0;
    display: grid;
    align-content: space-between;
    width: 100%;
    max-width: none;
    height: 100vh;
    padding: 1.5rem;
    pointer-events: none;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
		'codropsheader info'
		'... ...'
		'github ...';
  }
  .codrops-header {
    grid-area: codropsheader;
    padding: 0;
    justify-content: start;
  }
  .codrops-links {
    margin: 0;
  }
  .frame a {
    pointer-events: auto;
  }
  .github {
    grid-area: github;
    justify-self: start;
  }
  .info {
    margin: 0 6rem 0 0;
    color: var(--color-info);
  }
  .menu {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    grid-template-columns: 20% 30% 50%;
    grid-template-rows: 60% 40%;
    grid-template-areas:
            "item3 item2 item1"
            "item4 item4 item1";
  }
  .menu__item {
    height: 100%;
  }
  .menu__item--1 {
    grid-area: item1;
  }
  .menu__item--2 {
    grid-area: item2;
  }
  .menu__item--3 {
    grid-area: item3;
  }
  .menu__item--4 {
    grid-area: item4;
  }
  .menu__item--5 {
    grid-area: item5;
  }
  .menu__item--4,
  .menu__item--5 {
    display: block;
  }
  .menu__item-inner {
    align-items: center;
  }
  .label {
    display: block;
    color: var(--color-item-alt);
    position: absolute;
    z-index: 1000;
    font-size: 0.85rem;
    font-weight: bold;
    margin: 0;
    white-space: nowrap;
  }
  .label--topleft {
    top: 2rem;
    left: 2rem;
  }
  .label--vert,
  .label--vert-mirror {
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }
  .label--vert-mirror {
    transform: rotate(180deg);
  }
  .label--bottomright {
    bottom: 2rem;
    right: 2rem;
  }
  .label--vert::before,
  .label--vert-mirror::before {
    margin: 0.75rem 0;
  }
  .mainmenu,
  .sidemenu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mainmenu {
    counter-reset: menuitem;
  }
  .mainmenu__item {
    font-size: 5vw;
    overflow: visible;
    margin: 0.5rem 0;
    padding: 0 0.5rem;
    position: relative;
    transition: color 0.3s;
    color: black;
  }
  .mainmenu__item:hover {
    color: var(--color-item-alt);
  }
  .mainmenu__item:hover::after {
    opacity: 1;
    transform: scale3d(1,1,1);
  }
  .sidemenu__item {
    color: black;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    font-size: 0.85rem;
    text-align: left;
  }
  .menu__item-hoverlink {
    font-size: 1.25rem;
    text-transform: lowercase;
    border-bottom: 2px solid #fff;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .menu__item-inner:hover .menu__item-hoverlink {
    opacity: 1;
  }
}
</style>