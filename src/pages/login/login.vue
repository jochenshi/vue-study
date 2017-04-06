<template>
  <div class="loginContainer">
    <div class="loginTitle">

    </div>
    <form class="loginForm">
      <section class="input_container">
        <input type="text" placeholder="用户名">
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
  </div>
</template>

<script>
  export default {
      data(){
          return {
              showPassword: false //是否显示密码
          }
      },
      methods: {
          changePasswordType(){

          }
      }
  }
</script>
