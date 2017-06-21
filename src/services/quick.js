import { request, config } from '../utils'
const { api } = config
const { viewShortcutWords } = api

export async function query (params) {
  return request({
    url: viewShortcutWords,
    method: 'post',
    data: params,
  })
}

// export async function remove (params) {
//   return request({
//     url: users,
//     method: 'delete',
//     data: params,
//   })
// }
