<template>
  <header id="header_top">
    <slot name="logo"></slot>
    <slot name="menu"></slot>
    <slot name="navigate"></slot>
    <router-link to="/login" v-if="signinUp" class="head_login">
      <span v-if="userInfo">用户</span>
      <span v-else>登录/注册</span>
    </router-link>
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
      ])
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
    height: 40px;
    line-height: 40px;
  }
</style>
