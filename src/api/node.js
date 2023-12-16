import request from '@/utils/request.js'

export const getCategoryAPI = () => {
  return request({
    url: '/node',
    method: 'get'
  })
}

export const getAllNodeAPI = () => {
  return request({
    url: '/node/all',
    method: 'get'
  })
}
