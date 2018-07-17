import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      storeId: 0
    },
    getters: {
      key: state => state.storeId
    },
    mutations: {
      increment (state) {
        state.storeId++
      },
      saveId (state, id) {
        state.storeId = id
        console.log(id)
      }
    }
  });

export default store

