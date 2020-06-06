// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'

Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false

axios.defaults.headers.common['Authorization'] = ''

axios.interceptors.request.use(function (config) {
  if (window.localStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token');
  }
  return config;
})

axios.interceptors.response.use((response) => {
  return response;
}, error => {
  if (error.response) {
    if (error.response.status == 401) {
      store.commit('unset_User');
        router.push({ name: 'Login' });
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
