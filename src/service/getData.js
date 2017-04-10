/**
 * Created by Jincheng on 2017/4/7.
 */
import fetch from '../config/fetch'

var checkLogin = (username, password) => {
  fetch('POST', '/v2/login', {username, password})
}

var getUser = () => fetch('GET', '/v1/user', {})

export {checkLogin, getUser}
