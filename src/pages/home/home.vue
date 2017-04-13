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
    </div>
  </div>
</template>

<script>
  import headTop from '../../components/header.vue'
  import gridTable from '../../components/grid/main.vue'
  export default {
    data () {
      return {
      }
    },
    mounted () {
      
    },
    components: {
      headTop,
      gridTable
    }
  }
</script>
<style>
  .content{
    margin-top: 60px;
  }
</style>
