<template>
  <transition name="cookie">
    <div v-if="showBanner" class="cookieWrapper bgBg">
      <BackgroundAnimation />
      <div class="innerCookieWrapper">
        <div class="cookieImage">
          <g-image class="cookieBitten" src="@/assets/cookie-bitten.webp"></g-image>
          <g-image class="cookieBite" :class="bittenCookie ? 'bitten' : ''" src="@/assets/cookie-bite.webp"></g-image>
        </div>
        <BaseTitle :align="'center'" :addClass="'bold'" :tag="'h3'" >
          Cookie?
        </BaseTitle>
        <BaseText addStyle="text-align: center; margin: 20px 0px;">
          Wir verwenden Cookies, um deine Erfahrung<br> auf dieser Website zu verbessern.
        </BaseText>
        <div class="cookieSubmit">
          <div style="cursor: pointer" @click="submitCookies('ja')">
            <BaseButton :theme="'dark'" :title="'Ja bitte!'"/>
          </div>
          <div style="cursor: pointer" @click="submitCookies('nein')">
            <BaseText
                :addClass="'lightGreenColor'"
                :addStyle="'margin-top: 15px; font-size: clamp(1em, calc(100vw / 70), 1.3em);'">
              Ne, danke.
            </BaseText>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseTitle from "./BaseTitle";
import BaseText from "./BaseText";
import BaseButton from "./BaseButton";
import BackgroundAnimation from "./BackgroundAnimation";
export default {
  name: "CookieBanner",
  data(){
    return {
      showBanner: false,
      bittenCookie: false,
    }
  },
  mounted(){
    if(this.getCookie("hungryForCookies") == "ja"){
      this.showBanner = false;
      this.cookiesAllowed();
    } else if( this.getCookie("hungryForCookies") == "nein"){
      this.showBanner = false;
    } else if( this.getCookie("hungryForCookies") == null){
      this.showBanner = true;
    }
  },
  methods: {
    submitCookies(state){
      this.setCookie("hungryForCookies", state, 7)
      if(state == "ja"){
        this.cookiesAllowed();
      }
      this.bittenCookie = true;
      setTimeout(() => {
        this.showBanner = false;
      }, 500)
    },
    setCookie(name,value,days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    },
    eraseCookie(name) {
      this.showBanner = false;
      document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    cookiesAllowed() {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          'gtm.start':
              new Date().getTime(), event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-N5IMT7D');

    }
  },
  components: {
    BaseButton,
    BaseText,
    BaseTitle,
    BackgroundAnimation
  }
}
</script>

<style scoped>
  .cookieWrapper{
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999999;
  }
  .innerCookieWrapper{
    border-radius: 20px;
    border: 1px solid #88F332;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 780px;
    width: 80%;
    margin: auto;
    padding: 5% 0%;
    background: rgba(0,0,0,0.3)
  }
  .cookieImage{
    width: 250px;
    height: 200px;
    margin-bottom: 30px;
  }
  .cookieImage .cookieBite{
    position: absolute;
    left: 166px;
    top: 40px;
    transform: translateX(-50%);
    transition: all 0.6s ease-out;
  }
  .cookieImage .cookieBitten{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .bitten{
    opacity: 0;
    transform: translateX(calc(-50% + 50px)) translateY(-50px) rotate(20deg) !important;
  }
  .cookie-enter-active,
  .cookie-leave-active {
    transition: opacity 0.7s ease-out;
  }

  .cookie-enter-from,
  .cookie-leave-to {
    opacity: 0;
  }
  .cookieSubmit{
    display: flex;
    gap: 20px;
    margin-top: 30px;
  }
</style>