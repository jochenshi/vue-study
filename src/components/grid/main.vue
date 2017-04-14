<template>
  <div class="grid-content">
    <div class="table-content">
      <table class="grid-table" cellspacing="0">
        <thead class="grid-title">
          <tr v-if="columns" class="grid-head-tr">
            <th v-if="checkbox" class="grid-checkbox-wrapper grid-th">
              <div>
                <span class="grid-wrapper-hook">
                  <span class="grid-hook"></span>
                  <input type="checkbox" class="grid-checkbox" @click="selectAll">
                </span>
              </div>
            </th>
            <th v-for="item in columns" class="grid-th">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <div v-if="!datas.length">暂无数据！</div>
          <tr v-else v-for="list in datas" class="grid-tr">
            <td v-if="checkbox" class="grid-checkbox-wrapper">
              <div>
                <span class="grid-wrapper-hook">
                  <span class="grid-hook"></span>
                  <input type="checkbox" class="grid-checkbox" @click.prevent="clickCheckbox($event)">
                </span>
              </div>
            </td>
            <td v-for="item in columns" class="grid-tr-td">{{ list[item] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        columns: ['column1', 'column2', 'column3'],
        datas: [
          {column1: 'test1col1', column2: 'test1col2', column3: 'test1col3'},
          {column1: 'test2col1', column2: 'test2col2', column3: 'test2col3'},
          {column1: 'test3col1', column2: 'test3col2', column3: 'test3col3'},
          {column1: 'test4col1', column2: 'test4col2', column3: 'test4col3'}
        ],
        checkbox: true
      }
    },
    methods: {
      clickCheckbox ($event) {
        let par = $event.target.parentNode
        $(par).toggleClass('grid-wrapper-hook-checked')
      }
    }
  }
</script>
<style>
  .table-content{
    padding: 40px;
  }
  .grid-table{
    width: 100%;
  }
  .grid-head-tr{
    background-color: #f3f3f3;
  }
  .grid-th{
    text-align: left;
    padding: 12px 8px;
  }
  .grid-tr:hover{
    background-color: #eaf8fe;
  }
  .grid-tr{
    transition: all 0.3s ease;
  }
  .grid-tr-td{
    padding: 12px 8px;
    border-bottom: 1px solid #e9e9e9;
  }
  .grid-checkbox-wrapper{
    width: 40px;
    margin-top: 8px;
    border-bottom: 1px solid #e9e9e9;
    padding-left: 8px;
  }
  .grid-wrapper-hook{
    position: relative;
    top: 2px;
  }
  .grid-wrapper-hook-checked .grid-hook{
    border: 1px solid #2db7f5;
    background-color: #2db7f5;
  }
  .grid-hook{
    position: relative;
    border: 1px solid #d9d9d9;
    background-color: #ffffff;
    width: 14px;
    height: 14px;
    display: inline-block;
    transition: border-color 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55), 
    background-color 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }
  .grid-hook:after{
    position: absolute;
    border: 2px solid #ffffff;
    width: 5px;
    height: 8px;
    content: ' ';
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg) scale(1);
    top: 1px;
    left: 3px;
    transition: all 0.1s cubic-bezier(0.6, -0.3, 0.74, 0.05);
  }
  .grid-checkbox{
    position: absolute;
    left: -2px;
    top: 1px;
    cursor: pointer;
    opacity: 0;
  }
</style>
