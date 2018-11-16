import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {routes} from "./routes";
import StoreData from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

window.axios = require('axios');

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store(StoreData)

const router = new VueRouter({
    routes,
    mode: 'history'
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(
        record => record.meta.requiresAuth
    );
    const currentUser = store.state.currentUser;

    if (requiresAuth && !currentUser) {
        next('/login');
    } else if (to.path == '/login' && currentUser) {
        next('/');
    } else {
        next();
    }
});

new Vue({
  render: h => h(App),
    router,
    store
}).$mount('#app')
