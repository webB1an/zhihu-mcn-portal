import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: 'http://localhost:3981/v1'
})

service.interceptors.response.use(response => {
  const { data, config } = response
  const { code, msg } = data
  const _data = data.data
  if (code) {
    Message.error(msg)
    return Promise.reject(data)
  }
  if (config.url.includes('save') || config.url.includes('editor')) {
    Message.success(msg)
  }
  return _data
}, error => {
  return Promise.reject(error)
})

export default service
