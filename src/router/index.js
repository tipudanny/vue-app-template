import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Newsfeed/Home";

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

                { path: 'active-orders', name: 'Active Orders',
                    component: () => import('@/components/AdminPanel/ActiveOrders')
                },

                { path: 'users/managers', name: 'User - Managers',
                    component: () => import('@/components/AdminPanel/Users')
                },

                { path: 'balance/management', name: 'Balance Management',
                    component: () => import('@/components/AdminPanel/BalanceManagement')
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
    else if (to.matched.some(record => record.meta.forAuth)) {
        if ( !Vue.auth.isAutheticated() ) {
            to.meta.islogged = false;
            next({
                name: 'Login'
            })
        } else {
            to.meta.islogged = true;
            next()
        }
    }
    next()
    //console.log(to)


})

export default router
