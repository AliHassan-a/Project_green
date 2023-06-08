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
          <Seperator class="menu__seperator" :theme="'lightGreen'" />
          <div class="menu__bottom">
            <div style="display: flex; gap: 10px;">
              <div class="buerocratics" @click="navigteTo('/impressum')">
                <span>Impressum</span>
              </div>
              <div class="buerocratics">
                <span @click="navigteTo('/datenschutz')">Datenschutz</span>
              </div>
            </div>
            <div class="menu__socials">
              <a title="facebook" target="_blank" href="https://www.facebook.com/greenstein.designagentur/">
                <g-image alt="greenstein-facebook" title="greenstein-facebook" src="@/assets/facebook-f.webp"></g-image>
              </a>
              <a title="instagram" target="_blank" href="https://www.instagram.com/greenstein.design/">
                <g-image alt="greenstein-instagram" title="greenstein-instagram" src="@/assets/instagram.webp"></g-image>
              </a>
              <a title="linkedin" target="_blank" href="https://de.linkedin.com/company/greenstein-designagentur">
                <g-image alt="greenstein-linkedin" title="greenstein-linkedin" src="@/assets/linkedin.webp"></g-image>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="menuIconClose">
        <button class="unbutton button-close" aria-label="Close menu"
          style="background: none; color: white; border: none">
          <div class="menuBar"></div>
          <div class="menuBar"></div>
        </button>
      </div>
    </div>
    <svg class="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path class="overlay__path" vector-effect="non-scaling-stroke" fill="#011713"
        d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
    </svg>
  </nav>
</template>

<script>
import { gsap, Quart } from "gsap/all";
import Seperator from "./Seperator";
export default {
  name: "Menu",
  components: { Seperator },
  methods: {
    navigteTo(route) {
      document.querySelector(".menuBg").style.display = "block";
      setTimeout(() => {
        this.closeMenu()
      }, 0);
      gsap.to(".frame__button", 0.5, {
        ease: Quart.easeInOut,
        opacity: 0,
      });
      gsap.to(".logoImage", 0.5, {
        ease: Quart.easeInOut,
        opacity: 0,
      });
      window.setTimeout(() => {
        window.location.href = route
      }, 1000);
    },
    // closeMenu() {
    //   this.isAnimating = true;
    //   gsap.timeline({
    //     onComplete: () => this.isAnimating = false
    //   })
    //     .set(this.overlayPath, {
    //       attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
    //     })
    //     .to(this.overlayPath, {
    //       duration: 0.8,
    //       ease: 'power4.in',
    //       attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
    //     }, 0)
    //     .to(this.overlayPath, {
    //       duration: 0.3,
    //       ease: 'power2',
    //       attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
    //       onComplete: () => {
    //         this.menuWrap.classList.remove('menu-wrap--open');
    //       }
    //     })
    //     // now reveal
    //     .set(this.overlayPath, {
    //       attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
    //     })
    //     .to(this.overlayPath, {
    //       duration: 0.3,
    //       ease: 'power2.in',
    //       attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
    //     })
    //     .to(this.overlayPath, {
    //       duration: 0.8,
    //       ease: 'power4',
    //       attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
    //     })
    //     // menu items translate animation
    //     .to(this.menuItems, {
    //       duration: 0.8,
    //       ease: 'power2.in',
    //       y: 100,
    //       opacity: 0,
    //       stagger: -0.05
    //     }, 0)
    // },
    setScreenWidth() {
      this.screenWidth = window.innerWidth || document.documentElement.clientWidth;
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
      screenWidth: 0,
    }
  },
  mounted() {
    // if (this.screenWidth >= 768) {
    this.overlayPath = document.querySelector('.overlay__path');
    // }
    this.menuWrap = document.querySelector('.menu-wrap');
    this.menuItems = this.menuWrap.querySelectorAll('.menu__item');
    this.openMenuCtrl = document.querySelector('.menuIcon');
    this.closeMenuCtrl = this.menuWrap.querySelector('.menuIconClose');
    // this.screenWidth = window.innerWidth || document.documentElement.clientWidth;
    this.setScreenWidth();
    window.addEventListener('resize', this.setScreenWidth);
    const openMenu = () => {
      if (this.isAnimating) return;
      this.isAnimating = true;
      gsap.timeline({
        onComplete: () => this.isAnimating = false
      })
        .set(this.overlayPath, {
          attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(this.overlayPath, {
          duration: 0.8,
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
          duration: (this.screenWidth >= 768) ? 0.8 : 0,
          // duration: 0.8,
          ease: (this.screenWidth >= 768) ? 'power4' : 'linear',

          // ease: 'power4',
          startAt: (this.screenWidth >= 768) ? { y: 150 } : 0,
          y: 0,
          opacity: 1,
          stagger: (this.screenWidth >= 768) ? 0.05 : 0
          // stagger: 0.05
        }, '>-=1.1');
      console.log("Screen Width", this.screenWidth)
    }
    // closes the menu
    const closeMenu = () => {
      if (this.isAnimating) return;
      this.isAnimating = true;
      gsap?.timeline({
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
          duration: (this.screenWidth >= 768) ? 0.8 : 0,
          ease: (this.screenWidth >= 768) ? 'power2.in' : 'linear',
          y: (this.screenWidth >= 768) ? 100 : 0,
          opacity: 0,
          stagger: 0
        }, 0)
      console.log("Screen W 2", this.screenWidth)
    }

    // click on menu button
    this.openMenuCtrl.addEventListener('click', openMenu);
    // click on close menu button
    this.closeMenuCtrl.addEventListener('click', closeMenu);

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setScreenWidth);
  },
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
  cursor: pointer;
}

.menu__item-text {
  font-weight: 500;
  text-align: left;
  font-size: 3em;
  color: #E7FFD3;
  opacity: 0.6;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.menu__item-text:hover {
  opacity: 1;
}

.menu__bottom {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

.menu__seperator {
  margin-bottom: 20px;
  margin-top: 50px;
}

.menu__socials {
  filter: brightness(0) invert(1);
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu__socials a,
.menu__bottom .buerocratics span {
  cursor: pointer;
}

.menu__socials a,
.menu__bottom .buerocratics {
  transition: transform 0.2s ease-out;
  transform: scale(1);
}

.menu__socials a:hover,
.menu__bottom .buerocratics:hover {
  transform: scale(0.96);
}

@keyframes runner {
  to {
    transform: translateX(-25%);
  }
}

.menuIconClose {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-top: -5px;
  transition: background 0.4s ease-out;
  z-index: 1;
  position: absolute;
  right: 40px;
  top: 32px;
  background: #DAE5E3;
  cursor: pointer;
}

.menuIconClose button {
  margin-left: -2px;
}

.menuIconClose div.menuBar {
  width: 25px;
  height: 3px;
  background: black;
  transform-origin: center;
}

.menuIconClose div.menuBar:first-child {
  transform: rotate(45deg) translateX(2px);
  transition: all 0.3s ease-out;
}

.menuIconClose div.menuBar:nth-child(2) {
  transform: rotate(-45deg) translateX(1px);
  transition: all 0.3s ease-out;
}

.menuIconClose:hover div.menuBar:first-child {
  transform: rotate(0deg) translateY(1px);
}

.menuIconClose:hover div.menuBar:nth-child(2) {
  transform: rotate(0deg) translateY(-1px);
}

@media only screen and (max-width: 1024px) {
  .menuIconClose {
    width: 40px;
    height: 40px;
    right: 5vw;
    top: 20px;
  }

  .menuIconClose button {
    margin-left: -1px;
  }

  .menu {
    padding: 0px 20px;
  }

  .menu__item-text {
    font-weight: 500;
    text-align: left;
    font-size: 2em;
    color: #E7FFD3;
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }

  .menu__bottom {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }

  .menu__socials {
    width: 80px;
  }

  .menu__socials img {
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