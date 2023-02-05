// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'material-icons/iconfont/material-icons.scss';
import Vuex from 'vuex';

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuex);
  head.htmlAttrs = { lang: 'en' }
  appOptions.store = new Vuex.Store({
    state:{
      initialLoad:true,
    },
    actions: {
      firstLoad(state) {
        state.initialLoad = false;
      }
    }
  });
}

