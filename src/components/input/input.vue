<template>
  <div :class="wrapClasses">
    <template v-if="type !== 'textarea'">
      <div v-if="prepend" class="s-child-prepend">
        <slot name="prepend"></slot>
      </div>
      <i v-if="icon"></i>
      <transition name="fade">
        <i class="s-icon s-icon-load" v-if="!icon"></i>
      </transition>
      <input :type="type" 
             :class="inputClasses" 
             :placeholder="placeholder" 
             :readonly="readonly"
             :value="currentValue"
             @keyup.enter="handleEnter"
             @focus="handleFocus"
             @blur="handleBlur"
             @input="handleInput"
             @change="handleChange"
             :maxlength="maxlength">
      <div v-if="append" class="s-child-append">
        <slot name="append"></slot>
      </div>
    </template>
    <textarea 
      v-else
      id=""
      :class="textareaClasses"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :value="value"
      @keyup.enter="handleEnter"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @change="handleChange"
      cols="30" 
      rows="rows">
    </textarea>
  </div>
</template>
<script>
  export default {
    name: 'Input',
    // 从父组件传入的值
    props: {
      // 输入框的类型
      type: {
        validator: function (value) {
          return ['text', 'textarea', 'password'].indexOf(value) > -1
        },
        default: 'text'
      },
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      icon: String,
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentValue: this.value,
        prepend: true,
        append: true
      }
    },
    computed: {
      wrapClasses () {
        return [
          's-wrapper',
          this.size ? 's-wrapper-' + this.size : '',
          {
            's-wrapper-group': this.prepend || this.append,
            's-wrapper-prepend': this.prepend,
            's-wrapper-append': this.append
          }
        ]
      },
      inputClasses () {
        return [
          's-input'
        ]
      },
      textareaClasses () {
        return [
          's-textarea'
        ]
      }
    },
    methods: {
      handleInput (event) {
        let value = event.target.value
        
        this.$emit('input', value)
        console.log('handleInput')
      },
      handleEnter (event) {
        this.$emit('on-enter', event)
      },
      handleFocus (event) {
        this.$emit('on-focus', event)
      },
      handleBlur (event) {
        this.$emit('on-blur', event)
      },
      handleChange (event) {
        this.$emit('on-input-change', event)
      },
      setCurrentValue (value) {
        if (value === this.currentValue) {
          return
        } else {
          this.currentValue = value
        }
      }
    },
    watch: {
      value (val) {
        this.setCurrentValue(val)
      }
    },
    mounted () {
      if (this.type !== 'textarea') {
        this.prepend = this.$slots.prepend !== undefined
        this.append = this.$slots.append !== undefined
      } else {
        this.prepend = false
        this.append = false
      }
    }
  }
</script>
<style>
  *{
    box-sizing: border-box;
  }
  .s-wrapper{
    display: inline-block;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }
  .s-wrapper-group{
    display: table;
    position: relative;
  }
  .s-child-prepend, .s-child-append{
    display: table-cell;
    width: 1px;
    vertical-align: middle;
    text-align: center;
    white-space: nowrap;
    padding: 4px 7px;
    color: #657180;
    background-color: #eeeeee;
    border: 1px solid #d7dde4;
    border-radius: 6px;
  }
  .s-child-prepend{
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: 0;
  }
  .s-child-append{
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-left: 0;
  }
  .s-input{
    display: inline-block;
    width: 100%;
    height: 32px;
    line-height: 1.5;
    font-size: 12px;
    border:1px solid #d7dde4;
    border-radius: 4px;
    color: #657180;
    background-color: #ffffff;
    position: relative;
    cursor: text;
    transition: border .2s ease-in-out;
  }
  .s-input:hover{
    border-color: #5cadff;
  }
  .s-input:focus{
    outline: none;
    box-shadow: 0 0 0 2px rgba(51,153,255,.2);
    border-color: #5cadff;
  }
  .s-input:disabled{
    background-color: #f3f3f3;
    opacity: 1;
    cursor: not-allowed;
    color: #ccc;
  }
  .s-wrapper-prepend .s-input{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .s-wrapper-append .s-input{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
</style>
