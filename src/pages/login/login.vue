<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="login-wrap">
    <div class="loginContainer">
      <div class="loginTitle">
        <h3>Login</h3>
      </div>
      <el-form v-bind:model="Form" v-bind:rules="rules" ref="Forms" v-bind:label-position="labelPosition" labelWidth="70px">
        <el-form-item label="用户名" required="" prop="name">
          <el-input v-model="Form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" required="" prop="password">
          <el-input v-model="Form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginIn('Forms')">登录</el-button>
          <el-button @click="reset('Forms')">重置</el-button>
        </el-form-item>
      </el-form>
      <!--<div v-if="showAlert" class="alertMsg">{{alertText}}</div>-->
    </div>
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
        showAlert: false,
        input: '',
        labelPosition: 'right',
        Form: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名！', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码！', trigger: 'blur'}
          ]
        }
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
      async loginIn (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit')
          } else {
            console.log(111)
            return false
          }
        })
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
      },
      reset (formName) {
        this.$refs[formName].resetFields()
      }
      
    }
  }
</script>
<style>
  .login-wrap{
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .loginContainer{
    border: 1px solid #dfe8f2;
    width: 400px;
    margin-top: 20vh;
    padding-bottom: 20px;
  }
  .loginTitle{
    text-align: center;
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
