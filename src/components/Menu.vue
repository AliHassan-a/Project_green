<template>
  <nav class="menu">
    <div class="menu__item menu__item--1" data-direction="bt" style="translate: none; rotate: none; scale: none; transform: translate(0px, 101%);">
      <div class="menu__item-inner">
        <div class="mainmenu">
          <a class="mainmenu__item" href="/">
            <span>Start</span>
          </a>
          <a class="mainmenu__item" href="/about">
            <span>About</span>
          </a>
          <a class="mainmenu__item" href="/leistungen">
            <span>Leistungen</span>
            </a>
          <a class="mainmenu__item" href="/kontakt">
            <span>Kontakt</span>
          </a>
        </div>
        <p class="label label--topleft label--vert-mirror">the important stuff</p>
      </div>
    </div>
    <div class="menu__item menu__item--2" data-direction="lr" style="translate: none; rotate: none; scale: none; transform: translate(-101%, 0px);">
      <div class="menu__item-inner">
        <div class="sidemenu">
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">FB</span></a>
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">IG</span></a>
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">TT</span></a>
        </div>
      </div>
    </div>
    <div class="menu__item menu__item--3" data-direction="bt" style="translate: none; rotate: none; scale: none; transform: translate(0px, 101%);">
      <div class="menu__item-inner">
        <div class="sidemenu">
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">Chartexperten</span></a>
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">Kematherm</span></a>
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">Immobilienmanufaktur</span></a>
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">FUN KIDS CAAAARS</span></a>
        </div>
      </div>
    </div>
    <div class="menu__item menu__item--4" data-direction="rl" style="translate: none; rotate: none; scale: none; transform: translate(0px, 101%);">
      <div class="menu__item-inner">
        <div class="sidemenu">
          <a href="#" class="sidemenu__item"><span class="sidemenu__item-inner">Hier eine Contact Form</span></a>
        </div>
      </div>
    </div>
    <button class="action action--menu">
      <div class="menuBlob"><div class="smallBlob" /></div>
      <g-image src="@/assets/Menu.svg"></g-image>
    </button>
    <button class="action action--close">
      <span class="material-icons bgColor">close</span>
    </button>
  </nav>
</template>

<script>
import { gsap, Quint, Quart, Quad } from "gsap/all";
export default {
  name: "Menu",
  watch:{
    $route (to, from){
      if(this.menu != null){
        this.menu.close();
      }
    }
  },
  data() {
    return {
      menu: null,
      isOpen: false,
    }
  },
  mounted(){
    const context = this;
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
        context.isOpen = true;
      }
      // Close the menu.
      close() {
        this.toggle('close');
        context.isOpen = false;
      }
      toggle(action) {
        if ( this.isAnimating ) return;
        // (dis)allow the main image tilt effect.
        this.isAnimating = true;
        // Toggling the open state class.
        this.DOM.el.classList[action === 'open' ? 'add' : 'remove']('menu--open');
        context.$emit("toggleMenu", action);
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
            configInner.y = '0%';
          }
          else if ( direction === 'rl' ) {
            config.x = '101%';
            configInner.x = '-101%';
            configInner.y = '0%';
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
          delay: action === 'close' ? 0 : 0.3,
          ease: action === 'open' ? Quint.easeOut : Quart.easeInOut,
          startAt: action === 'open' ? {rotation: 0} : null,
          opacity: action === 'open' ? 1 : 0,
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
      }
    }
    // Initialize the Menu.
    this.menu = new Menu(document.querySelector('nav.menu'));
  }
}
</script>

<style scoped lang="scss">

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
  top: 15px;
  right: 25px;
  z-index: 1000;
  color: black;
  border-radius: 100px;
  padding: 5px;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.action--menu:hover .menublob .smallblob{
  transform: scale(15);
  opacity: 1;
}
.action--menu img{
  transition: transform 1s linear;
}
.menublob{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menublob .smallblob{
  background: #88F332;
  width: 5px;
  height: 5px;
  border-radius: 100px;
  transition: transform 0.3s ease-out, opacity 0.2s linear;
  opacity: 0;
}

.menu--open .action--menu {
  pointer-events: none;
}

.action--close {
  color: black;
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  z-index: 1000;
  opacity: 0;
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

.mainmenu__item span{
  color: black;
}

.menu__item-inner {
  overflow: hidden;
  transform: translate3d(101%,0,0);
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

.menu__item--3 {
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
  color: black;
  transform: translate3d(0,100%,0);
}
@media screen and (max-width: 1024px){
  .action--menu {
    top: 17px;
    right: 5vw;
  }
  .action--close {
    top: 17px;
    right: 5vw;
  }
}

@media screen and (min-width: 53em) {
  body {
    padding: 0;
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
  .menu__item--3 {
    display: block;
  }
  .menu__item-inner {
    align-items: center;
  }
  .label {
    display: block;
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
  .mainmenu__item span{
    color: black;
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
}
</style>