import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    position: {},
    userName: '',
    cityAllList: []
  },
  mutations: {
    setPosition(state, val) {
      state.position = val;
    },
    setUserName(state, val) {
      state.userName = val;
    },
    setCityAllList(state, val) {
      state.cityAllList = val;
    }
  }
})
