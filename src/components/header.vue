<template>
  <header id="header_top">
    <slot name="logo"></slot>
    <slot name="menu"></slot>
    <div class="header_menu">
      <a href="">home</a>
      <a href="">content</a>
      <a href="">about</a>
    </div>
    <slot name="navigate"></slot>
    <router-link to="/login" v-if="signinUp" class="head_login">
      <span v-if="userInfo">用户</span>
      <span v-else>登录/注册</span>
    </router-link>
    <span @click="open">tip</span>
  </header>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    data () {
      return {
          
      }
    },
    props: ['signinUp'],
    mounted () {
      this.getUserInfo()
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    methods: {
      ...mapActions([
        'getUserInfo'
      ]),
      open () {
        this.$messages({
          message: '这是一条提示消息！',
          showClose: true,
          type: 'info'
        })
      }
    }
  }
</script>

<style scoped>
  #header_top{
    background-color: #42b983;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 40px;
  }
  .head_login{
    float: right;
    margin-right: 30px;
    line-height: 60px;
  }
  .header_menu{
    display: inline-block;
    line-height: 60px;
  }
  .header_menu a{
    display: inline-block;
    width: 112px;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
  }
</style>
