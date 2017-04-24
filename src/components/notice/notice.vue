<template>
  <transition name="s-notice-fade">
    <div class="s-notice" 
         @mouseenter="clearTimer()"
         @mouseleave="startTimer()"
         :class="customClass">
      <i class="s-notice-icon" v-if="type || iconClass"></i>
      <div class="s-notice-group">
        <h2 class="e-notice-title" v-text="title"></h2>
        <div class="e-notice-content">
          <slot></slot>
        </div>
        <div class="s-notice-closeBtn"></div>
      </div>
    </div>
  </transition>
</template>
<script>
  let typeMap = {
    success: 'circle-check',
    info: 'information',
    warning: 'warning',
    error: 'circle-cross'
  }
  export default {
    data () {
      return {
        title: '',
        message: '',
        duration: 4500,
        type: '',
        top: null,
        timer: null,
        closed: false,
        onClose: null
      }
    }
  }
</script>
