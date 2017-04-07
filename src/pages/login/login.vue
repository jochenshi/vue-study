<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="loginContainer">
    <div class="loginTitle">
      <h3>Login</h3>
    </div>
    <form class="loginForm">
      <section class="input_container">
        <input type="text" placeholder="用户名" v-model="userName">
      </section>
      <section class="input_container">
        <input type="password" placeholder="密码" v-model="passWord">
        <div class="button_switch">
          <div class="circle_button" v-on:click=""></div>
          <span>abc</span>
          <span>...</span>
        </div>
      </section>
    </form>
    <div class="login_container" v-on:click="loginIn()">登录</div>
    <div v-if="showAlert" class="alertMsg">{{alertText}}</div>
  </div>
</template>

<script>
  import {checkLogin} from '../../service/getData'
  
  export default {
    data () {
      return {
        showPassword: false, // 是否显示密码
        passWord: null,  // password
        userName: null,  // username
        userInfo: null,
        alertText: null,
        showAlert: false
      }
    },
    created () {
      this.autoValid()
    },
    methods: {
      changePasswordType () {

      },
      autoValid () {
        console.log('It is running automatically')
      },
      async loginIn () {
        if (!this.userName) {
          this.showAlert = true
          this.alertText = '请输入用户名！'
          return
        } else if (!this.passWord) {
          this.showAlert = true
          this.alertText = '请输入密码！'
          return
        }
        checkLogin(this.userName, this.passWord)
      }
    }
  }
</script>
<style>
  .loginContainer{
    border: 1px solid #dfe8f2;
    width: 400px;
  }
  .alertMsg{
    background-color: #fff2f2;
    border: 1px solid #ff8080;
    border-radius: 3px;
    color: #c00;
    font-size: 12px;
    padding: 0 10px;
    line-height: 40px;
    height: 40px;
    margin: 0 40px;
  }
</style>
