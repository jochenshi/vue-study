/**
 * Created by Jincheng on 2017/4/18.
 */
let selCheckbox = require('./checkbox/main.vue')

const install = function (Vue) {
  Vue.component(selCheckbox.name, selCheckbox)
  
  Vue.prototype.$checkbox = selCheckbox
}

module.exports = {
  install,
  selCheckbox
}
