import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://cp.xmgpzx.com/api',
  baseURL: 'https://cp.gpyd.cn/api',
  // timeout:3000
});


instance.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// Add a response interceptorP
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default instance;