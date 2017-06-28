import * as accountService from '../services/account'
import { parse } from 'qs'

const { query } = accountService

export default {

  namespace: 'account',

  state: {
    list: [],
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/account') {
          dispatch({
            type: 'query',
            payload: {"account":"18782038801_2","phone":"18782038801","page":1,"pageNum":14,"startTime":"","endTime":""}
          })
        }
      })
    },
  },

  effects: {

    *query ({ payload }, { call, put }) {
      const data = yield call(query, payload)
      console.log(data);
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data.list,
            // pagination: {
            //   current: Number(payload.page) || 1,
            //   pageSize: Number(payload.pageSize) || 10,
            //   total: data.total,
            // },
          },
        })
      }
    },

    // *'delete' ({ payload }, { call, put, select }) {
    //   const data = yield call(remove, { id: payload })
    //   const { selectedRowKeys } = yield select(_ => _.user)
    //   if (data.success) {
    //     yield put({ type: 'updateState', payload: { selectedRowKeys: selectedRowKeys.filter(_ => _ !== payload) } })
    //     yield put({ type: 'query' })
    //   } else {
    //     throw data
    //   }
    // },
    //
    // *'multiDelete' ({ payload }, { call, put }) {
    //   const data = yield call(usersService.remove, payload)
    //   if (data.success) {
    //     yield put({ type: 'updateState', payload: { selectedRowKeys: [] } })
    //     yield put({ type: 'query' })
    //   } else {
    //     throw data
    //   }
    // },
    //
    // *create ({ payload }, { call, put }) {
    //   const data = yield call(create, payload)
    //   if (data.success) {
    //     yield put({ type: 'hideModal' })
    //     yield put({ type: 'query' })
    //   } else {
    //     throw data
    //   }
    // },
    //
    // *update ({ payload }, { select, call, put }) {
    //   const id = yield select(({ user }) => user.currentItem.id)
    //   const newUser = { ...payload, id }
    //   const data = yield call(update, newUser)
    //   if (data.success) {
    //     yield put({ type: 'hideModal' })
    //     yield put({ type: 'query' })
    //   } else {
    //     throw data
    //   }
    // },

  },

  reducers: {

    querySuccess (state, action) {
      const { list, pagination } = action.payload
      console.log(list)
      return { ...state,
        list
        // pagination: {
        //   ...state.pagination,
        //   ...pagination,
        // }
      }
    },

    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },

    showModal (state, action) {
      return { ...state, ...action.payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },

    switchIsMotion (state) {
      localStorage.setItem('antdAdminUserIsMotion', !state.isMotion)
      return { ...state, isMotion: !state.isMotion }
    },

  },

}
