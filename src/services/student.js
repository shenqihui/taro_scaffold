import Taro from '@tarojs/taro';

const services = {};
const API_URL_BASE = 'https://easy-mock.com/mock/5b44685824d4c9626905256b/taro-scaffold';

services.list = ({ query = '', page = 1, filters = '', pageSize = 10, select = '' }) => {
  return Taro.request({
    url: `${API_URL_BASE}/student?page=${page}&per_page=${pageSize}&filter=${filters}&select=${select}&${query}`,
    method: 'GET',
  });
};

// 详情
services.detail = ({ id, select = ['sng_admin.name'].join(',') }) => {
  return Taro.request({
    url: `${API_URL_BASE}/student/${id}?select=${select}`,
    method: 'GET',
  });
};

// 删除
services.remove = (id) => {
  return Taro.request({
    url: `${API_URL_BASE}/student/${id}`,
    method: 'DELETE',
  });
};

// 编辑
services.update = (id, values) => {
  return Taro.request({
    url: `${API_URL_BASE}/student/${id}`,
    method: 'PUT',
    data: JSON.stringify(values),
  });
};

// 新增
services.create = (values) => {
  return Taro.request({
    url: `${API_URL_BASE}/student`,
    method: 'POST',
    body: JSON.stringify(values),
  });
};

export default services;
