/**
 * Created by Jincheng on 2017/4/18.
 */
let Checkbox = require('./checkbox/main.vue')
let CheckboxGroup = require('./checkbox/checkbox-group.vue')
let Input = require('./input/input.vue')

const install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(CheckboxGroup.name, CheckboxGroup)
  Vue.component(Input.name, Input)
  
  Vue.prototype.$checkbox = Checkbox
}

module.exports = {
  install,
  Checkbox,
  CheckboxGroup,
  Input
}
