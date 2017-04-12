/**
 * Created by Jincheng on 2017/4/11.
 */
import Vue from 'vue'
let MessageConstructor = Vue.extend(require('./main.vue'))

let instance
let instances = []
let seed = 1
var Messages = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  
/*  let id = 'message_' + seed++
  let userOnClose = options.onClose
  
  options.onClose = function () {
    Messages.close(id, userOnClose)
  } */
  
  instance = new MessageConstructor({
    data: options
  })
  // instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  instances.push(instance)
  return instance.vm
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Messages[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Messages(options)
  }
})

/** Messages.close = function (id, userOnClose) {
  for (let i = 0; i < instances.length; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}
Messages.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
} */

export default Messages
