import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    storeId: 0,
    searchField: ''
  },
  getters: {
    key: state => state.storeId,
    searchFieldKey: state => state.searchField

  },
  mutations: {
    increment (state) {
      state.storeId++
    },
    saveId (state, id) {
      state.storeId = id
    },
    search (state, searchText){
      state.searchField = searchText
    }
  }
});

export default store

