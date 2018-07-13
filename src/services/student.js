import Taro from '@tarojs/taro';

import http from '../utils/http';

const services = {};

services.list = ({ query = '', page = 1, filters = '', pageSize = 10, select = '' }) => {
  return http({
    url: `/student?page=${page}&per_page=${pageSize}&filter=${filters}&select=${select}${query ? '&' : '' }${query}`,
    method: 'get',
  });
};

// 详情
services.detail = ({ id, select = ['sng_admin.name'].join(',') }) => {
  return http({
    url: `/student/${id}?select=${select}`,
    method: 'get',
  });
};

// 删除
services.remove = (id) => {
  return http({
    url: `/student/${id}`,
    method: 'delete',
  });
};

// 编辑
services.update = (id, values) => {
  return http({
    url: `/student/${id}`,
    method: 'put',
    data: JSON.stringify(values),
  });
};

// 新增
services.create = (values) => {
  return http({
    url: '/student',
    method: 'post',
    body: JSON.stringify(values),
  });
};

export default services;
