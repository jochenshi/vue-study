/**
 * Created by Jincheng on 2017/4/10.
 */
/** 根级别的action **/
import {getUser} from '../service/getData'
import * as types from './mutation-types'

export default {
  
  async getUserInfo ({commit, state}) {
    let res = await getUser()
    commit(types.GET_USERINFO, res)
  }
}
