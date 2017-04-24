/**
 * Created by Jincheng on 2017/4/24.
 */
import Vue from 'vue'
let NoticeConstructor = Vue.extend(require('./notice.vue'))

let instance
let instances = []
let seed = 1

var Notice = function (options) {
  options = options || {}
  let userOnClose = options.onClose
  let id = 'notice_' + seed++
}

Notice.close = function (id, useOnClose) {
  let index
  let removedHeight
  for (let i = 0; i < instances.length; i++) {
    if (id === instances[i].id) {
      if (typeof useOnClose === 'function') {
        useOnClose(instances[i])
      }
      index = i
      removedHeight = instances[i].dom.offsetHeight
      instances.splice(i, 1)
      break
    }
  }
}
