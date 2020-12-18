import axios from 'axios';

axios.defaults.baseURL = 'http://open.duyiedu.com';

axios.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    appkey: 'duxingzhe_1553994650506'
  };
  return config;
})

export default axios;