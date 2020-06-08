import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './Store/store';

Vue.use(VueRouter);

Vue.filter("currency", (value) => {
  return '£' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')