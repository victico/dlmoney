import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/core/services/store";
import ApiService from "@/core/services/api.service";
// import MockService from "@/core/mock/mock.service";
import { RESET_LAYOUT_CONFIG } from "@/core/services/store/config.module";
import { func } from '@/core/services/utils/utils.js'

Vue.config.productionTip = false;
Vue.prototype.$func = func
Vue.prototype.$mainColor = '#1869A0'
Vue.prototype.$secondaryColor = '#F19023'

// Global 3rd party plugins
import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

// Vue 3rd party plugins
import i18n from "@/core/plugins/vue-i18n";
import vuetify from "@/core/plugins/vuetify";
import "@/core/plugins/portal-vue";
import "@/concept/bootstrap";
import "@/concept/menu"
import { Helpers } from "./concept/helpers";

import "@/core/plugins/bootstrap-vue";
import "@/core/plugins/perfect-scrollbar";
import "@/core/plugins/highlight-js";
import "@/core/plugins/inline-svg";
import "@/core/plugins/apexcharts";
import "@/core/plugins/treeselect";
import "@/core/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";
import "@/core/plugins/formvalidation";
import middlewarePipeline from './middlewares/middlewarePipeline'

window.Helpers = Helpers;
// Apexcharts library
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

// API service init
ApiService.init();

// // Remove this to disable mock API
// MockService.init();

router.beforeEach(async (to, from, next) => {
  // reset config to initial state
  store.dispatch(RESET_LAYOUT_CONFIG);
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  if (!to.meta.middleware) {
    return next()
  }

    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }
    document.title =`${to.name.charAt(0).toUpperCase()}${to.name.substring(1)} | DLS Money Plataforma de cambio de dolares a soles online`

    return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
  })
});

if (process.env.MIX_ENVIROMENT == "production") {
  process.env.BASE_URL = process.env.MIX_BASE_URL_PRODUCTION
} else if (process.env.MIX_ENVIROMENT == "staging") {
  process.env.BASE_URL = process.env.MIX_BASE_URL_STAGING
} else {
  process.env.BASE_URL = process.env.MIX_BASE_URL
}

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
