// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/routes'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store
}).$mount('#app')

/* eslint-disable no-new */

