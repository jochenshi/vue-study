<template>
  <div>
    <head-top signin-up='home'>
      <span slot="logo" class="head_logo">Title</span>
      <span slot="menu">menu1</span>
    </head-top>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <div class="content">
      <grid-table></grid-table>
      <Checkbox v-model="checked1" text="选择1"></Checkbox>
      <Checkbox-group v-model="checked2">
        <Checkbox label="test1" text="text1"></Checkbox>
        <Checkbox label="test2" text="text2"></Checkbox>
        <Checkbox label="test3" text="text3"></Checkbox>
      </Checkbox-group>
      {{checked2}}
      <br>
      <Input>
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
      </Input>
    </div>
  </div>
</template>

<script>
  import headTop from '../../components/header.vue'
  import gridTable from '../../components/grid/main.vue'
  export default {
    data () {
      return {
        checked1: true,
        checked2: ['test1']
      }
    },
    mounted () {
      
    },
    components: {
      headTop,
      gridTable
    },
    methods: {
      handleAlert (e) {
        console.log(e, 111)
      }
    }
  }
</script>
<style>
  .content{
    margin-top: 60px;
  }
</style>
