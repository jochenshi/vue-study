<template>
  <label class="sel-checkbox">
    <span class="sel-checkbox-wrapper" 
          :class="{
            'is-disabled': isDisabled,
            'sel-checkbox-wrapper-checked': checked
          }">
      <span class="sel-checkbox-hook"></span>
      <input type="checkbox" 
             class="sel-checkbox-input" 
             @click="checkClick($event)"
             @change="handleChange"
             :disabled="isDisabled"
             v-model="model" >
    </span>
    <span class="check-text" v-if="text">{{text}}</span>
  </label>
</template>
<script>
  export default {
    name: 'SelCheckbox',
    data () {
      return {
        text: '多选框'
      }
    },
    props: {
      isDisabled: Boolean,
      checked: Boolean,
      label: {},
      value: {}
    },
    methods: {
      checkClick ($event) {
        /* this.checked = !this.checked */
        let par = $event.target.parentNode
        $(par).toggleClass('sel-checkbox-wrapper-checked')
      },
      handleChange (event) {
        this.$emit('change', event)
      }
    },
    created () {
      console.log(this.value)
    }
  }
</script>
<style>
  .sel-checkbox-wrapper{
    position: relative;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
  }
  .sel-checkbox-wrapper.is-disabled .sel-checkbox-hook{
    background-color: #eef1f6;
    border-color: #d1dbe5;
    cursor: not-allowed;
  }
  .is-disabled .sel-checkbox-hook:after{
    cursor: not-allowed;
    border-color: #eef1f6;
  }
  .sel-checkbox-hook:hover{
    border-color: #20a0ff;
  }
  .sel-checkbox-wrapper.is-disabled + .check-text{
    color: #bbbbbb;
    cursor: not-allowed;
  }
  .sel-checkbox-wrapper-checked .sel-checkbox-hook{
    border: 1px solid #2db7f5;
    background-color: #2db7f5;
  }
  .sel-checkbox-hook{
    position: relative;
    border: 1px solid #d9d9d9;
    background-color: #ffffff;
    width: 18px;
    height: 18px;
    display: inline-block;
    border-radius: 3px;
  }
  .sel-checkbox-hook:after{
    border: 2px solid #ffffff;
    width: 5px;
    height: 9px;
    transform: rotate(45deg) scale(1);
    content: ' ';
    border-top: 0;
    border-left: 0;
    position: absolute;
    top: 2px;
    left: 6px;
  }
  .sel-checkbox-input{
    position: absolute;
    top: 0;
    left: -2px;
    opacity: 0;
    z-index: -100;
  }
</style>
