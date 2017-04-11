/**
 * Created by Jincheng on 2017/4/10.
 */
/** 根级别的mutation **/
import * as types from './mutation-types'

export default {
  // 获取用户的信息并存入vuex中
  [types.GET_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    if (!state.login) {
      return
    }
    if (info.message) {
      state.userInfo = {...info}
      let validity = 30
      let now = new Date()
      now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000)
      document.cookie = 'USERID=' + info.user_id
    } else {
      state.userInfo = null
    }
    console.log(state)
    console.log(info)
  }
}
