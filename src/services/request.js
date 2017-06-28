import { request, config } from '../utils'
const { api } = config;
const { listPage, binding, delUser, createUser } = api

// 查询
export async function query (params) {
  return request({
    url: listPage,
    method: 'post',
    data: params,
  })
}


// 新增
export async function addText (params) {
  return request({
    url: createUser,
    method: 'post',
    data: params,
  })
}


// 删除
export async function remove (params) {
  return request({
    url: delUser,
    method: 'post',
    data: params,
  })
}

// 绑定
export async function upText (params) {
  return request({
    url: binding,
    method: 'post',
    data: params,
  })
}

