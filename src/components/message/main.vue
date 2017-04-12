<template>
  <transition name="sel-message">
    <div class="sel_message" :class="customClass" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">
      <!--<img :src="typeImg" alt="" class="sel-message-img" v-if="!iconClass">-->
      <i class="sel-message-font fa" :class="fontClass" v-if="!iconClass"></i>
      <div class="sel-message-content">
        <p><i class="sel_message_icon" :class="iconClass" v-if="iconClass"></i>{{message}}</p>
        <div class="sel-message-close" v-if="showClose" @click="close"></div>
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
    computed: {
      typeImg () {
        return require(`./assets/${this.type}.svg`)
      },
      fontClass () {
        switch (this.type) {
          case 'info':
            return 'fa-exclamation-circle font-info'
          case 'warning':
            return 'fa-exclamation-circle font-warn'
          case 'success':
            return 'fa-check-circle font-success'
          case 'fail':
            return 'fa-times-circle-o font-fail'
        }
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
        this.$el.parentNode.removeChild(this.$el)
        this.$destroy(true)
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
<style>
  .sel_message{
    box-shadow:0 2px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);
    min-width:300px;
    padding:10px 12px;
    box-sizing:border-box;
    border-radius:2px;
    position:fixed;
    transform: translateX(-50%);
    left:50%;
    top: 20px;
    background-color:#fff;
    transition:opacity .5s,transform .5s;
    overflow:hidden
  }
  .sel-message-img{
    position: absolute;
    top: 0;
    left: 0px;
    width: 40px;
    height: 41px;
  }
  .sel_message .sel-message-font{
    position: absolute;
    top: 10px;
    left: 8px;
    font-size: 23px;
  }
  .sel_message .font-info{
    color: #108ee9;
  }
  .sel_message .font-warn{
    color: #f7ba2a;
  }
  .sel_message .font-success{
    color: #00a854;
  }
  .sel_message .font-fail{
    color: red;
  }
  .sel-message-content{
    margin-left: 23px;
  }
  .sel-message-close{
    font-family: element-icons!important;
    color: #bfcbd9;
    position: absolute;
    top: 14px;
    right: 10px;
    cursor: pointer;
  }
  .sel-message-close:before{
    content: '\e60c';
  }
  .sel-message-enter-active, .sel-message-leave-active{
    transform:translate(-50%,-100%);
    opacity: 0;
  }
</style>
