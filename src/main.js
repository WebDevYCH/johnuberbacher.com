import Vue from 'vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'

import './index.css'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-XXX-X'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
