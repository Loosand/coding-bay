import request from '@/utils/request.js'

export const getCategoryAPI = () => {
  return request({
    url: '/node',
    method: 'post'
  })
}
