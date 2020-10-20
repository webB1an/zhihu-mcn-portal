import request from '../utils/request'

export function searchCategory(name) {
  return request({
    url: '/category/search',
    method: 'POST',
    data: { name }
  })
}

export function saveCategory(data) {
  return request({
    url: '/category/save',
    method: 'POST',
    data
  })
}

export function categorylist(id) {
  return request({
    url: '/category/list',
    method: 'POST',
    data: { id }
  })
}

export function categoryDetail(id) {
  return request({
    url: '/category/detail',
    method: 'POST',
    data: { id }
  })
}

export function editorCategory(data) {
  return request({
    url: '/category/editor',
    method: 'POST',
    data
  })
}
