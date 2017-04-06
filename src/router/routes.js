/**
 * Created by Jincheng on 2017/4/6.
 */
import Hello from '../components/Hello.vue'
import App from '../App.vue'
import Router from 'vue-router'
import Vue from 'vue'
import home from '../pages/home/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: 'index'
        },
        {
          path: '/index',
          component: Hello
        }
      ]
    },
    {
      path: '/home',
      component: home
    }
  ]
})
