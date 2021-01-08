import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Auth from "../packages/auth/Auth";

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap';
import'bootstrap/dist/css/bootstrap.css';

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'




Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(Auth);

Vue.config.productionTip = false
axios.defaults.headers.common = {'Authorization': `Bearer ${Vue.auth.getToken()}`};

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
