/**
 * Created by Administrator on 2017/6/16.
 */
import * as usersService from '../services/quick';

export default {
  namespace: 'quick',
  state: {
    visible: false,
    list: [],
    // total: null,
  },

  effects: {
    *fetch({ payload: { name } }, { call, put }) {
      const { data, headers } = yield call(usersService.query, { name });
      // console.log(data);
      yield put({ type: 'save', payload: { data} });
      // const list = yield select(state=>state.list);
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/quick') {
          dispatch({ type: 'fetch', payload: {
            name: ''
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
