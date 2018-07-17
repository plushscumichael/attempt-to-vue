import Vue from 'vue'
import {router} from './router/router.js'
import store from './store/store.js'

import App from './components/App.vue'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router,
  store
});
