import request from '../utils/request'

export function saveProduct(data) {
  return request({
    url: '/product/save',
    method: 'POST',
    data
  })
}

export function productlist(data) {
  return request({
    url: '/product/list',
    method: 'POST',
    data
  })
}

export function productDetail(id) {
  return request({
    url: '/product/detail',
    method: 'POST',
    data: { id }
  })
}

export function editorProduct(data) {
  return request({
    url: '/product/editor',
    method: 'POST',
    data
  })
}