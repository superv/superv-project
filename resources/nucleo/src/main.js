import Vue from 'vue'
import modules from '../../../storage/superv/nucleo/modules.js'

import SuperVCore from 'supervjs-core'
import { LayoutMixin } from 'supervjs-core/lib'

Vue.config.productionTip = false
Vue.use(SuperVCore, {
    config: {
      name: process.env.VUE_APP_NAME,
      apiUrl: process.env.VUE_APP_API_URL
    },
    modules: modules
  }
)


new Vue({
  el: '#app',
  name: 'root',
  mixins: [LayoutMixin]
})