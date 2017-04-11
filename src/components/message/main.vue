<template class="sel-message-fade">
  <transition>
    <div class="sel_message" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">
      <div>
        <p><i class="sel_message_icon" :class="iconClass" v-if="iconClass"></i>{{message}}</p>
        <div class="sel_message_close" v-if="showClose" @click=""></div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default{
    data () {
      return {
        visible: false, // 是否显示
        message: '', // 显示的信息
        duration: 3000, // 显示的时间
        type: 'info', // 消息的类型
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false, // 是否显示关闭按钮
        closed: false,
        timer: null
      }
    },
    mounted () {
      this.startTimer()
    },
    watch: {
      closed (newVal) {
        if (newVal) {
          this.visible = false
          this.$el.addEventListener('transitionend', this.destroyElement)
        }
      }
    },
    methods: {
      destroyElement () {
        this.$el.removeEventListener('transitionend', this.destroyElement)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },
      close () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },
      clearTimer () {
        clearTimeout(this.timer)
      },
      startTimer () {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, this.duration)
        }
      }
    }
  }
</script>
