import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: 'http://localhost:3981/v1'
})

service.interceptors.response.use(response => {
  console.log('response', response)
  const { data } = response
  const { code, msg } = data
  const _data = data.data
  if (code) {
    Message.error(msg)
    return Promise.reject(data)
  }
  Message.success(msg)
  return _data
}, error => {
  return Promise.reject(error)
})

export default service
