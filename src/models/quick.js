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

  effects: {
    *fetch({ payload: { name } }, { call, put }) {
      const { data, headers } = yield call(usersService.query, { name });
      // console.log(data);
      yield put({ type: 'save', payload: { data} });
      // const list = yield select(state=>state.list);
    },

    *addText({ payload: { name } }, { call, put }) {
      console.log(12)
      const { data, headers } = yield call(usersService.remove, {name});
      console.log(data);
      yield put({ type: 'save', payload: { data} });
      // const list = yield select(state=>state.list);
    },

    *remove({ payload: { name } }, { call, put }) {
      const { data, headers } = yield call(usersService.remove, {});
      console.log(data);
      // yield put({ type: 'save', payload: { data} });
      // const list = yield select(state=>state.list);
    },
    *upText({ payload: { name } }, { call, put }) {
      const { data, headers } = yield call(usersService.upText, {});
      console.log(data);
      // yield put({ type: 'save', payload: { data} });
      // const list = yield select(state=>state.list);
    }
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
