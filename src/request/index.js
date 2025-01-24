import { Message } from 'element-ui'
import axios from 'axios'
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://192.168.62.46:xx' : '',
  timeout: 5000,
  withCredentials: true // Send cookies when making requests across different domains
})

service.interceptors.request.use(
  (config) => {
    const sessionId = localStorage.getItem('token')
    if (sessionId) {
      config.headers.sessionId = sessionId
    }
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject()
  }
)

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.data.status != '1') {
        Message.error('请求出错')
      }
      return response.data
    } else {
      Promise.reject()
    }
  },
  (error) => {
    console.log(error)
    return Promise.reject()
  }
)

export function get(url, params) {
  return instance.get(url, { params })
}

export function post(url, data) {
  return instance.post(url, data)
}

export function del(url, data) {
  return instance.delete(url, data)
}

export function put(url, data) {
  return instance.put(url, data)
}
export default service
