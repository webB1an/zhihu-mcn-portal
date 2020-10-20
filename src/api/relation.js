import request from '../utils/request'

export function saveRelation(data) {
  return request({
    url: '/relation/save',
    method: 'POST',
    data
  })
}

export function getRandomProduct(categoryId) {
  return request({
    url: '/relation/random',
    method: 'POST',
    data: { categoryId }
  })
}
