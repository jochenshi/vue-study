<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
  import {findComponentsDownward} from '../../utils/assist'
  export default{
    name: 'CheckboxGroup',
    props: {
      value: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        currentValue: this.value,
        childrens: []
      }
    },
    mounted () {
      this.updateModel(true)
    },
    methods: {
      updateModel (update) {
        const value = this.value
        this.childrens = findComponentsDownward(this, 'Checkbox')
        if (this.childrens) {
          this.childrens.forEach(child => {
            child.model = value
            if (update) {
              child.currentValue = value.indexOf(child.label) >= 0
              child.group = true
            }
          })
        }
      },
      change (data) {
        this.currentValue = data
        this.$emit('input', data)
        this.$emit('on-change', data)
      }
    },
    watch: {
      value () {
        this.updateModel(true)
      }
    }
  }
</script>
