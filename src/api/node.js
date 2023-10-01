import request from '@/utils/request.js'

export const getNodeAPI = () => {
  return request({
    url: '/node',
    method: 'post'
  })
}
