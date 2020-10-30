import request from '../utils/request'

export function saveRelation(data) {
  return request({
    url: '/relation/save',
    method: 'POST',
    data
  })
}
export function getRelationList(categoryId) {
  return request({
    url: '/relation/list',
    method: 'POST',
    data: { categoryId }
  })
}
export function getRandomProduct(categoryId) {
  return request({
    url: '/relation/random',
    method: 'POST',
    data: { categoryId }
  })
}
