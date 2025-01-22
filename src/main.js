import App from './App'
import Vue from 'vue'
import router from '@/router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// import MyPlugin from '@/plugin'
// Vue.use(MyPlugin)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
