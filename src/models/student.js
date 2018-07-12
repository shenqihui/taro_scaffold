import get from 'lodash/get';

import Services from '../services';

const modelName = 'student';

const modelExtend = {
  namespace: modelName,
  state: {
    total: 0,
    page: 1,
    pageSize: 10,
    list: [],
    detail: {},
  },
  reducers: {
    saveList(state, { payload: { data: list, total, page, pageSize, start, end } }) {
      return { ...state, list, total, page, pageSize, start, end };
    },
    saveTotal(state, { payload }) {
      console.log('student total save reducers', state, 'payload', payload);
      return {
        ...state,
        total: state.total + 1,
      };
    },
  },
  mutations: {
    addTotal: (state) => {
      state.total += 1;
    },
  },
  effects: {
    *list({ payload = {} }, { call, put, select }) {
      const { page = 1, pageSize: pageSizeArgs, query = '', filter = '', orderBy = '', sort = '' } = payload;

      let pageSize;
      if (pageSizeArgs) {
        pageSize = pageSizeArgs;
      }
      else {
        pageSize = yield select(state => state[modelName].pageSize);
      }

      try {
        const data = yield call(Services[modelName].list, { page, filter, query, pageSize, orderBy, sort });
        const modelData = get(data, 'data');
        yield put({
          type: 'saveList',
          payload: {
            data: modelData.data,
            total: modelData.total,
            pageSize: modelData.per_page * 1,
            page: modelData.page,
          },
        });
        return data;
      }
      catch (e) {
        return Promise.reject(e);
      }
    },
    *total({ payload }, { call, put, select }) {
      const total = yield select(state => state['student'].total);
      console.log('student total effects', 'payload', payload, 'call', call, 'put', put, 'select', select, 'total', total);
      yield put({
        type: 'saveTotal',
        payload: {
          total: 1 + total,
        },
      });
    },
  },
};

export default modelExtend;
