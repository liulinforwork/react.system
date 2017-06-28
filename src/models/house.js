/**
 * Created by Administrator on 2017/6/16.
 */
import * as usersService from '../services/quick';

export default {
  namespace: 'house',
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
            // name: ''
            pageNo:1,
            pageSize:20
          } });
        }
      });
    },
  },

  effects: {
    *fetch({ payload: { pageNo, pageSize } }, { call, put }) {
      const { data, headers } = yield call(usersService.query, { pageNo, pageSize });
      // console.log(data);
      yield put({ type: 'save', payload: { data} });
      // const list = yield select(state=>state.list);
    },

    *addText({ payload: { name } }, { call, put }) {
      const { data, headers } = yield call(usersService.addText, {name});
      console.log(data);
      yield put({ type: 'add', payload: { data} });
      // const list = yield select(state=>state.list);
    },

    *remove({ payload: { name } }, { call, put }) {
      const { data, headers } = yield call(usersService.remove, {});
      console.log("删除成功"+data);
      // yield put({ type: 'save', payload: { data} });
      // const list = yield select(state=>state.list);
    },
    *upText({ payload: { name } }, { call, put }) {
      const { data, headers } = yield call(usersService.upText, {});
      console.log(data);
    }
  },

  reducers: {
    save(state, { payload:quick}) {
      const list = quick.data.pageSet;
      return {...state,list}
    },
    add(state, { payload:quick}) {
      const list = quick.data.pageSet;
      return {...state,...list,visible: true}
    },

    showModal (state, { payload }) {
      return { ...state, ...payload, visible: true }
    },
    hideModal (state, { payload }) {
      return { ...state, ...payload, visible: false }
    },
  },
};
