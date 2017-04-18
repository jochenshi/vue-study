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
      <sel-checkbox v-model="checked1" @change="handleAlert" :isDisabled="false"></sel-checkbox>
    </div>
  </div>
</template>

<script>
  import headTop from '../../components/header.vue'
  import gridTable from '../../components/grid/main.vue'
  export default {
    data () {
      return {
        checked1: 111111
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
        console.log(e)
      }
    }
  }
</script>
<style>
  .content{
    margin-top: 60px;
  }
</style>
