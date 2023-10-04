import request from '@/utils/request.js'

export const getSearchAPI = (keyword) => {
  return request({
    url: `/search/${keyword}`,
    method: 'get',
    params: {
      keyword
    }
  })
}
