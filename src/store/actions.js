/**
 * Created by Jincheng on 2017/4/10.
 */
/** 根级别的action **/
import {getUser} from '../service/getData'
import * as types from './mutation-types'

export default {
  
  getUserInfo ({commit, state}) {
    getUser().then((data) => {
      commit(types.GET_USERINFO, data)
    }, (error) => {
      if (error) {
        console.error('error:', 'error')
      }
    })
  }
}
