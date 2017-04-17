<template>
  <label class="sel-checkbox">
    <span class="sel-checkbox-wrapper" 
          :class="{
            'is-disabled': disabled
          }">
      <span class="sel-checkbox-hook"></span>
      <input type="checkbox" 
             class="sel-checkbox-input" 
             @click="checkClick($event)" 
             v-model="model" >
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
    props: {
      disabled: Boolean,
      checked: Boolean,
      label: {},
      value: {}
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
  .sel-checkbox-hook:after{
    border: 2px solid #ffffff;
    width: 5px;
    height: 8px;
    transform: rotate(45deg) scale(1);
    content: ' ';
    border-top: 0;
    border-left: 0;
    position: absolute;
    top: 1px;
    left: 4px;
  }
  .sel-checkbox-input{
    position: absolute;
    top: 0;
    left: -2px;
    cursor: pointer;
    opacity: 0;
  }
</style>
