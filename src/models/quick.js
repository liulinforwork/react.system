import * as usersService from '../services/quick';

export default {
  namespace: 'quick',
  state: {
    visible: false,
    list: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/quick') {
          dispatch({ type: 'fetch', payload: {
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
      yield put({ type: 'save', payload: { data} });
    },

    *addText({ payload: { name } }, { call, put }) {
      const { data, headers } = yield call(usersService.addText, {name});
      // console.log(data);
      yield put({ type: 'add', payload: { data} });
    },

    *remove({ payload: { name } }, { call, put }) {
      const { data, headers } = yield call(usersService.remove, {});
      console.log("删除成功"+data);
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
