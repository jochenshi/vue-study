/**
 * Created by Jincheng on 2017/4/7.
 */
const baseUrl = 'http://localhost:43000' 

export default async (type = 'GET', url = '', data = {}) => {
  type = type.toUpperCase() 
  url = baseUrl + url 

  if (type === 'GET') {
    // 拼接GET请求的参数
    let dataStr = '' 
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
  }
  
  let requestObj
  if (window.XMLHttpRequest) {
    requestObj = new XMLHttpRequest()
  } else {
    alert('Sorry, your browser does not support this!')
    return false
  }
  let sendData = ''
  if (type === 'POST') {
    sendData = JSON.stringify(data)
  }
  requestObj.open(type, url, true)
  requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  requestObj.send(sendData)
  
  requestObj.onreadystatechange = () => {
    if (requestObj.readyState === 4) {
      if (requestObj.status === 200) {
        let obj = requestObj.response
        console.log(typeof obj)
        if (typeof obj !== 'object') {
          console.log(obj)
        }
        return obj
      } else {
        throw new Error(requestObj)
      }
    }
  }
}
