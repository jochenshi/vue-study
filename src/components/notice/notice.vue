<template>
  <transition name="s-notice-fade">
    <div class="s-notice" 
         @mouseenter="clearTimer()"
         @mouseleave="startTimer()"
         :class="customClass">
      <i class="s-notice-icon" v-if="type || iconClass"></i>
      <div class="s-notice-group">
        <h2 class="e-notice-title" v-text="title">{{title}}</h2>
        <div class="e-notice-content">
          <slot></slot>
        </div>
        <div class="s-notice-closeBtn"></div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'Notice',
    data () {
      return {
        title: 'asd',
        message: '',
        duration: 4500,
        type: '',
        top: null,
        timer: null,
        closed: false,
        onClose: null
      }
    },
    watch: {
      closed (newVal) {
        if (newVal) {
          // this.visible = false
          this.$el.addEventListener('transitionend', this.destroyElement)
        }
      }
    },
    methods: {
      destroyElement () {
        this.$el.removeEventListener('transitionend', this.destroyElement)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      }
    },
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        
      }
    },
    startTimer () {
      if (this.duration) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    }
  }
</script>
