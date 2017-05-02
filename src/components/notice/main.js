/**
 * Created by Jincheng on 2017/4/24.
 */
import Vue from 'vue'
let NoticeConstructor = Vue.extend(require('./notice.vue'))

let instance
let instances = []
let seed = 1

var Notices = function (options) {
  options = options || {}
  let userOnClose = options.onClose
  let id = 'notice_' + seed++
  
  options.onClose = function () {
    Notices.close(id, userOnClose)
  }
  
  instance = new NoticeConstructor({
    data: options
  })
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.dom = instance.vm.$el
  
  const offset = options.offset || 0
  let topDist = offset
  for (let i = 0; i < instances.length; i++) {
    topDist += instances[i].$el.offsetHeight + 16
  }
  topDist += 16
  instances.top = topDist
  instances.push(instance)
  return instance.vm
}

Notices.close = function (id, useOnClose) {
  let index
  let removedHeight
  for (var i = 0, len = instances.length; i < instances.length; i++) {
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
  if (len > 1) {
    for (i = index; i < len - 1; i++) {
      instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - removedHeight - 16 + 'px'
    }
  }
}

export default Notices
