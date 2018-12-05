import Vue from 'vue'

import SuperVJS from 'superv-js'
import { LayoutMixin } from 'superv-js/lib'

Vue.config.productionTip = false
Vue.use(SuperVJS, {
    config: {
      name: process.env.VUE_APP_NAME,
      apiUrl: process.env.VUE_APP_API_URL
    },
  modules: []
  }
)


new Vue({
  el: '#app',
  name: 'root',
  mixins: [LayoutMixin]
})