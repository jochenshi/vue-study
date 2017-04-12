// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/routes'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store'
import Messages from './components/message/main'
import './assets/fonts/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(Messages.name, Messages)
Vue.prototype.$messages = Messages

new Vue({
  router,
  store
}).$mount('#app')

/* eslint-disable no-new */

