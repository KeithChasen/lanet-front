import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {routes} from "./routes";
import StoreData from './store'
import {init} from "./helpers/general";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

window.axios = require('axios');

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(StoreData)

const router = new VueRouter({
    routes,
    mode: 'history'
});

init(store, router);

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
    router,
    store
}).$mount('#app')
