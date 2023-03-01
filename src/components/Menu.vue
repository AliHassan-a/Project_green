<template>
  <nav class="main">
    <div class="menuBg bgBg"></div>
    <div class="menu-wrap blackBg">
      <nav class="menu">
        <div class="menu__item" @click="navigteTo('/')">
          <span class="menu__item-text">Start</span>
        </div>
        <div class="menu__item" @click="navigteTo('/agentur')">
          <span class="menu__item-text">Unsere Agentur</span>
        </div>
        <div class="menu__item" @click="navigteTo('/leistungen')">
          <span class="menu__item-text">Unsere Leistungen</span>
        </div>
        <div class="menu__item" @click="navigteTo('/projekte')">
          <span class="menu__item-text">Projekte</span>
        </div>
        <div class="menu__item" @click="navigteTo('/blog')">
          <span class="menu__item-text">Blog</span>
        </div>
        <div class="menu__item" @click="navigteTo('/kontakt')">
          <span class="menu__item-text">Kontakt</span>
        </div>
        <div class="menu__item">
          <Seperator class="menu__seperator" :theme="'lightGreen'"/>
          <div class="menu__bottom">
            <div>
              <span @click="navigteTo('/impressum')">Impressum</span>&nbsp;&nbsp;
              <span @click="navigteTo('/datenschutz')">Datenschutz</span>
            </div>
            <div class="menu__socials">
              <a href="https://www.facebook.com/greenstein.designagentur/">
                <img src="@/assets/facebook-f.webp">
              </a>
              <a href="https://www.instagram.com/greenstein.design/">
                <img src="@/assets/instagram.webp">
              </a>
            </div>
          </div>
        </div>
      </nav>
      <button class="unbutton button-close">
        <g-image src="@/assets/Menu.svg"></g-image>
      </button>
    </div>
    <svg class="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path class="overlay__path" vector-effect="non-scaling-stroke" fill="#011713" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
    </svg>
  </nav>
</template>

<script>
import { gsap, Quart } from "gsap/all";
import Seperator from "./Seperator";
export default {
  name: "Menu",
  components: {Seperator},
  methods: {
    navigteTo(route){
      document.querySelector(".menuBg").style.display = "block";
      setTimeout(() => {
        this.closeMenu()
      },1);
      gsap.to(".frame__button", 0.5, {
        ease: Quart.easeInOut,
        opacity: 0,
      });
      gsap.to(".logoImage", 0.5, {
        ease: Quart.easeInOut,
        opacity: 0,
      });
      window.setTimeout( () => {
        window.location.href = route
      }, 1000);
    },
    closeMenu(){
      this.isAnimating = true;
      gsap.timeline({
        onComplete: () => this.isAnimating = false
      })
          .set(this.overlayPath, {
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
          })
          .to(this.overlayPath, {
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
          }, 0)
          .to(this.overlayPath, {
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
            onComplete: () => {
              this.menuWrap.classList.remove('menu-wrap--open');
            }
          })
          // now reveal
          .set(this.overlayPath, {
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
          })
          .to(this.overlayPath, {
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
          })
          .to(this.overlayPath, {
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
          })
          // menu items translate animation
          .to(this.menuItems, {
            duration: 0.8,
            ease: 'power2.in',
            y: 100,
            opacity: 0,
            stagger: -0.05
          }, 0)
    },
  },
  data() {
    return {
      menu: null,
      isOpen: false,
      isAnimating: false,
      overlayPath: null,
      menuWrap: null,
      menuItems: null,
      openMenuCtrl: null,
      closeMenuCtrl: null,
    }
  },
  mounted(){
    this.overlayPath = document.querySelector('.overlay__path');
    this.menuWrap = document.querySelector('.menu-wrap');
    this.menuItems = this.menuWrap.querySelectorAll('.menu__item');
    this.openMenuCtrl = document.querySelector('button.button-menu');
    this.closeMenuCtrl = this.menuWrap.querySelector('.button-close');

    const openMenu = ()  => {
      if ( this.isAnimating ) return;
      this.isAnimating = true;
      gsap.timeline({
        onComplete: () => this.isAnimating = false
      })
          .set(this.overlayPath, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
          })
          .to(this.overlayPath, {
            duration: 1.1,
            ease: 'power4.in',
            attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
          }, 0)
          .to(this.overlayPath, {
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
            onComplete: () => {
              this.menuWrap.classList.add('menu-wrap--open');
            }
          })
          // now reveal
          .set(this.menuItems, {
            opacity: 0
          })
          .set(this.overlayPath, {
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
          })
          .to(this.overlayPath, {
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
          })
          .to(this.overlayPath, {
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
          })
          // menu items translate animation
          .to(this.menuItems, {
            duration: 0.8,
            ease: 'power4',
            startAt: {y: 150},
            y: 0,
            opacity: 1,
            stagger: 0.05
          }, '>-=1.1');
    }

// closes the menu
    const closeMenu = ()  => {
      if ( this.isAnimating ) return;
      this.isAnimating = true;
      gsap.timeline({
        onComplete: () => this.isAnimating = false
      })
          .set(this.overlayPath, {
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
          })
          .to(this.overlayPath, {
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
          }, 0)
          .to(this.overlayPath, {
            duration: 0.3,
            ease: 'power2',
            attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
            onComplete: () => {
              this.menuWrap.classList.remove('menu-wrap--open');
            }
          })
          // now reveal
          .set(this.overlayPath, {
            attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
          })
          .to(this.overlayPath, {
            duration: 0.3,
            ease: 'power2.in',
            attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
          })
          .to(this.overlayPath, {
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
          })
          // menu items translate animation
          .to(this.menuItems, {
            duration: 0.8,
            ease: 'power2.in',
            y: 100,
            opacity: 0,
            stagger: -0.05
          }, 0)

    }

// click on menu button
    this.openMenuCtrl.addEventListener('click', openMenu);
// click on close menu button
    this.closeMenuCtrl.addEventListener('click', closeMenu);

  }
}
</script>

<style scoped lang="scss">

/* Better focus styles from https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible */
a:focus {
  /* Provide a fallback style for browsers
   that don't support :focus-visible */
  outline: none;
  background: lightgrey;
}

a:focus:not(:focus-visible) {
  /* Remove the focus indicator on mouse-focus for browsers
   that do support :focus-visible */
  background: transparent;
}

a:focus-visible {
  /* Draw a very noticeable focus style for
   keyboard-focus on browsers that do support
   :focus-visible */
  outline: 2px solid #fff;
  background: transparent;
}

.unbutton {
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
}

.unbutton:focus {
  outline: none;
}

.hover-line {
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  display: inline-block;
}

.hover-line::before {
  content: '';
  height: 1px;
  width: 100%;
  background: currentColor;
  position: absolute;
  top: 92%;
  transition: transform 0.3s;
  transform-origin: 0% 50%;
}

.hover-line:hover::before {
  transform: scaleX(0);
  transform-origin: 100% 50%;
}

main {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100vh;
}

.button-menu {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  border: 1px solid var(--color-button-menu);
  fill: var(--color-button-menu);
}

.button-menu svg {
  transition: transform 0.5s ease;
}

.button-menu:focus-visible,
.button-menu:hover {
  fill: var(--color-button-menu-hover);
  border-color: var(--color-button-menu-hover);
}

.button-menu:hover svg {
  transform: scale(1.1);
}

.button-enter {
  margin-top: 4vh;
  cursor: not-allowed;
  transition: transform 0.5s ease;
}

.button-enter:hover {
  transform: translateX(15px) rotate(-40deg);
}

.menu-wrap {
  grid-area: 1 / 1 / 2 / 2;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100vh;
  position: relative;
  pointer-events: none;
  opacity: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}

.menu-wrap.menu-wrap--open {
  pointer-events: auto;
  opacity: 1;
}

.overlay {
  grid-area: 1 / 1 / 2 / 2;
  position: relative;
  z-index: 1000;
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
}

.menu {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding: 0vw 12.5vw;
}

.menu__item {
  color: #fff;
  cursor: pointer;
  line-height: 1;
  font-weight: 300;
  text-align: left;
  position: relative;
  will-change: opacity, transform;
  margin: 20px 0px;
  width: 100%;
}

.menu__item-text {
  font-weight: 500;
  text-align: left;
  font-size: 3em;
  color: #E7FFD3;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}
.menu__item-text:hover {
  opacity: 1;
}
.menu__bottom{
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}
.menu__seperator{
  margin-bottom: 20px;
  margin-top: 50px;
}
.menu__socials{
  filter: brightness(0) invert(1);
  width: 50px;
  display: flex;
  justify-content: space-between;
}

@keyframes runner {
  to {
    transform: translateX(-25%);
  }
}

.button-close {
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
  stroke: var(--color-button-close);
  fill: none;
}

.button-close:focus-visible,
.button-close:hover {
  stroke: var(--color-button-close-hover);
}
@media only screen and (max-width: 1024px){
  .menu{
    padding: 0px 20px;
  }
  .button-close {
    position: absolute;
    top: 0;
    right: 0px;
    stroke: var(--color-button-close);
    fill: none;
    transform: rotate(180deg);
  }
  .menu__item-text {
    font-weight: 500;
    text-align: left;
    font-size: 2em;
    color: #E7FFD3;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }
  .menu__bottom{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }
  .menu__socials{
    width: 50px;
  }
  .menu__socials img{
    object-fit: contain;
    height: 20px;
  }
}
@media screen and (min-width: 53em) {
  .frame {
    grid-template-columns: 390px 1fr 390px;
    grid-template-areas: 'author heading button'
							'... ... ...'
							'title links links';
    font-size: 1.5rem;
  }
  .frame__title {
    justify-self: start;
    align-self: end;
    margin: 0 3rem 0 0;
  }
  .frame__links {
    display: flex;
    justify-self: start;
    padding: 0;
  }
  .frame__links a:not(:last-child) {
    margin-right: 0.5rem;
  }
  .frame__heading-main {
    font-size: 2.15rem;
  }
  .frame__heading-sub {
    font-size: 1rem;
  }
  .menu__item-tiny {
    font-size: 2rem;
  }
}
</style>