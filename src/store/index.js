/**
 * Created by Jincheng on 2017/4/10.
 */
/** 组装模块并导出store **/
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
const state = {
  userInfo: null // 用户信息
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
