import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  baseURL: 'http://43.143.98.167:3000',
  timeout: 5000,
  responseType: 'json'
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // config 中有我们请求的信息
    // 获取请求的url地址

    // 从缓存中读取token值
    const token = localStorage.getItem('token')
    // 当我们缓存中有token则把token添加到请求头中，携带到后端
    if (token) {
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (res) => {
    // 响应统一处理
    const status = res.data.code || 200
    const message = res.data.message || '未知错误'
    if (status === 401) {
      // 路由跳转
      alert('权限不足')
      return Promise.reject(new Error(message))
    }
    if (status !== 200) {
      alert('错误码' + status + '    ' + message)
      return Promise.reject(new Error(message))
    }
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
