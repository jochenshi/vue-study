<template>
  <label class="sel-checkbox">
    <span class="sel-checkbox-wrapper">
      <span class="sel-checkbox-hook"></span>
      <input type="checkbox" class="sel-checkbox-input" @click="checkClick($event)">
    </span>
    <span class="check-text" v-if="text">{{text}}</span>
  </label>
</template>
<script>
  export default{
    data () {
      return {
        text: '多选框'
      }
    },
    methods: {
      checkClick ($event) {
        let par = $event.target.parentNode
        $(par).toggleClass('sel-checkbox-wrapper-checked')
      }
    }
  }
</script>
<style>
  .sel-checkbox-wrapper{
    position: relative;
    top: 2px;
  }
  .sel-checkbox-wrapper:hover .sel-checkbox-hook{
    border-color: #bcbcbc;
  }
  .sel-checkbox-wrapper-checked .sel-checkbox-hook{
    border: 1px solid #2db7f5;
    background-color: #2db7f5;
  }
  .sel-checkbox-hook{
    position: relative;
    border: 1px solid #d9d9d9;
    background-color: #ffffff;
    width: 14px;
    height: 14px;
    display: inline-block;
    border-radius: 3px;
  }
  .sel-checkbox-input{
    position: absolute;
    top: 0;
    left: -2px;
    cursor: pointer;
    opacity: 0;
  }
</style>
