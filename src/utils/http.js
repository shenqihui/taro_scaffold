import axios from 'axios/dist/axios';
import axiosAdapter from 'wepy-plugin-axios/dist/adapter';

const API_URL_BASE = 'https://easy-mock.com/mock/5b44685824d4c9626905256b/taro-scaffold';

const adapter = axiosAdapter(axios);

const http = axios.create({
  baseURL: API_URL_BASE,
  withCredentials: true,
  adapter,
});

export default http;
