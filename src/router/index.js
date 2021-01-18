import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Newsfeed/Home";
import store from "@/store";

Vue.use(VueRouter)
window.axios = axios



const routes = [
    {
        path: '/login', name: 'Login', component: () => import('@/views/Login.vue'),
        meta: {forVisitors: true},
    },
    {
        path: '/registration', name: 'Sign Up', component: () => import('@/views/Registration'),
        meta: {forVisitors: true},
    },
    {
        path: '', component: ()=> import('@/views/Newsfeed/Newsfeed'),
        meta: {forVisitors: true},
        children:
            [
                { path: '', name: 'Home ', component: Home, },
                { path: '/service-area', name: 'service-area', component: () => import('@/components/HomeLayout/AreaOfService') },
                { path: '/pricing', name: 'pricing', component: () => import('@/components/HomeLayout/CalculateCharge') },
                { path: '/contuct-us', name: 'contuct-us', component: () => import('@/components/HomeLayout/ContactUs') },
            ]
    },
    {
        path: '/admin', name: 'Admin', component: () => import('@/views/AdminPanel/Dashboard'),
        meta: {forAuth: true},
        children:
            [
                { path: '/', name: 'Dashboard',
                    component: () => import('@/components/AdminPanel/Dashboard')
                },
                { path: 'dashboard', name: 'Dashboard ',
                    component: () => import('@/components/AdminPanel/Dashboard')
                },

                //Orders Management
                { path: 'active-orders', name: 'Active Orders',
                    component: () => import('@/components/AdminPanel/Orders/ActiveOrders')
                },
                { path: 'pending-orders', name: 'Pending Orders',
                    component: () => import('@/components/AdminPanel/Orders/PendingOrders')
                },
                { path: 'cancel-orders', name: 'Cancel Orders',
                    component: () => import('@/components/AdminPanel/Orders/CancelOrders')
                },

                //Users Management
                { path: 'user/managers', name: 'User - Managers',
                    component: () => import('@/components/AdminPanel/Users/Managers')
                },
                { path: 'user/riders', name: 'User - Riders',
                    component: () => import('@/components/AdminPanel/Users/Riders')
                },
                { path: 'user/customers', name: 'User - Customers',
                    component: () => import('@/components/AdminPanel/Users/Users')
                },

                //Balance Management
                { path: 'balance/management', name: 'Balance Management',
                    component: () => import('@/components/AdminPanel/BalanceManagement'),
                    meta: {forAdmin: true},
                },
            ]
    },
]

const router = new VueRouter({
    hashbang: false,
    mode: "history",
    linkActiveClass: "active",
    routes
})

router.beforeEach((to, from, next) => {
    let documentTitle = `${ process.env.VUE_APP_TITLE } - ${ to.name }`;
    if (to.params.title){
        documentTitle += ` - ${ to.params.title }`
    }
    document.title = documentTitle;

    if (to.matched.some(record => record.meta.forVisitors)) {
        if (Vue.auth.isAutheticated()) {
            to.meta.islogged = true;
            next()
        } else {
            to.meta.islogged = false;
            next()
        }
    }

    else if (to.matched.some(record => record.meta.forAdmin)) {
        if ( Vue.auth.isAutheticated() && localStorage.user_type == 'super-admin' ) {
            next()
        } else {
            next({
                name: 'Admin'
            })
        }
    }
    if (to.matched.some(record => record.meta.forAuth)) {
        if ( !Vue.auth.isAutheticated() && localStorage.user_type != 'super-admin' ) {
            to.meta.forAdmin = false;
            next({
                name: 'Admin'
            })
        } else {
            to.meta.forAdmin = false;
            next()
        }
    }
    next()
    //console.log(localStorage.user_type)


})

Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export default router
