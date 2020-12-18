import axios from '@/axios';

export default {
  getHotWordsList() {
    return axios.get('/api/meituan/header/searchHotWords.json');
  },
  getSearchList() {
    return axios.get('/api/meituan/header/search.json');
  },
  getMenuList() {
    return axios.get('/api/meituan/index/nav.json');
  },
  getContainer() {
    return axios.get('/api/meituan/index/resultsByKeywords.json');
  },
  getGoodsList() {
    return axios.get('/api/meituan/list/goodsList.json');
  },
  getClassicList() {
    return axios.get('/api/meituan/list/classify.json');
  },
  getAreaList() {
    return axios.get('/api/meituan/list/areaList.json');
  },
  getHotCity() {
    return axios.get('/api/meituan/city/hot.json');
  },
  getRecents() {
    return axios.get('/api/meituan/city/recents.json');
  },
  getProvince() {
    return axios.get('/api/meituan/city/province.json');
  },
  getPosition() {
    return axios.get('/api/meituan/city/getPosition.json');
  },
  getDetail() {
    return axios.get('/api/meituan/product/detail.json');
  },
  getLove() {
    return axios.get("/api/meituan/list/recommend.json");
  },
  login(params) {
    return axios.get('/api/meituan/login', { params })
  },
  register(params) {
    return axios.get('/api/meituan/register', { params })
  }
}