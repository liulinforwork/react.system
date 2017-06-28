/**
 * Created by Administrator on 2017/6/16.
 */
import * as usersService from '../services/request';

export default {
  namespace: 'request',
  state: {
    visible: false,
    // list: [],
    // total: null,
  },

  effects: {
    *fetch({ payload: { pageNo, pageSize } }, { call, put }) {
      const { data, headers } = yield call(usersService.query, { pageNo, pageSize });
      yield put({ type: 'save', payload: { data} });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/request') {
          dispatch({ type: 'fetch', payload: {
            pageNo:1,
            pageSize:20
          } });
        }
      });
    },
  },

  reducers: {
    save(state, { payload:quick}) {
      const list = quick.data.pageSet;
      return {...state,list}
    },

    showModal (state, { payload }) {
      return { ...state, ...payload, visible: true }
    },
    hideModal (state, { payload }) {
      return { ...state, ...payload, visible: false }
    },
  },
};
