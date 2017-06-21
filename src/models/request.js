/**
 * Created by Administrator on 2017/6/16.
 */
import * as usersService from '../services/quick';

export default {
  namespace: 'request',
  state: {
    visible: false,
    // list: [],
    // total: null,
  },

  effects: {
    *fetch({ payload: { name } }, { call, put }) {
      const { data, headers } = yield call(usersService.query, { name });
      // yield put({ type: 'save', payload: { data, total: headers['x-total-count'] } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/request') {
          dispatch({ type: 'fetch', payload: {
            name: '龙大侠的测试帐号'
          } });
        }
      });
    },
  },

  reducers: {
    // save(state, { payload: { data: list, total } }) {
    //   return { ...state, list, total };
    // },

    showModal (state, { payload }) {
      return { ...state, ...payload, visible: true }
    },
    hideModal (state, { payload }) {
      return { ...state, ...payload, visible: false }
    },
  },
};
