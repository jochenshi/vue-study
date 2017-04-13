<template>
  <div class="grid-content">
    <div class="table-content">
      <table class="grid-table" cellspacing="0">
        <thead class="grid-title">
          <tr v-if="columns">
            <th v-if="checkbox">
              <div>
                <span>
                  <span>
                    <input type="checkbox">
                  </span>
                </span>
              </div>
            </th>
            <th v-for="item in columns" class="grid-th">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <div v-if="!datas.length">暂无数据！</div>
          <tr v-else v-for="list in datas" class="grid-tr">
            <th v-if="checkbox" class="grid-checkbox">
              <div>
                <span>
                  <span>
                    <input type="checkbox">
                  </span>
                </span>
              </div>
            </th>
            <td v-for="item in columns">{{ list[item] }}</td>
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
    }
  }
</script>
<style>
  .grid-table{
    width: 100%;
  }
  .grid-th{
    text-align: left;
  }
  .grid-tr:hover{
    background-color: gray;
  }
  .grid-checkbox{
    width: 40px;
    margin-top: 8px;
  }
</style>
