import { request, config } from '../utils'
const { api } = config
const { viewShortcutWords, delShortcutWords, upShortcutWords, addShortcutWords } = api

//查询
export async function query (params) {
  return request({
    url: viewShortcutWords,
    method: 'post',
    data: params,
  })
}


//新增
export async function addText (params) {
  return request({
    url: addShortcutWords,
    method: 'post',
    data: params,
  })
}


//删除
export async function remove (params) {
  return request({
    url: delShortcutWords,
    method: 'post',
    data: params,
  })
}

//编辑
export async function upText (params) {
  return request({
    url: upShortcutWords,
    method: 'post',
    data: params,
  })
}

