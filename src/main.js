import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Auth from "../packages/auth/Auth"
import VueToastr from "vue-toastr"

Vue.use(VueToastr,{
    defaultTimeout: 3000,
    defaultProgressBar: false,

})

require('admin-lte');
require('bootstrap');

import'bootstrap/dist/css/bootstrap.css'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/dist/css/adminlte.css'


import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome/styles.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Auth);

axios.defaults.headers.common = {'Authorization': 'Bearer ' + localStorage.token}

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')