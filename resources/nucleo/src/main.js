import Vue from 'vue'

import SuperVJS from 'superv-js'

Vue.config.productionTip = false
Vue.use(SuperVJS, {
    config: {
      name: process.env.VUE_APP_NAME,
      apiUrl: process.env.VUE_APP_API_URL,
      baseUrl: process.env.BASE_URL
    },
  modules: []
  }
)

new Vue({
  el: '#app',
  name: 'root',
  mixins: [require('superv-js').LayoutMixin]
})