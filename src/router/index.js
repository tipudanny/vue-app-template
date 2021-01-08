import axios from 'axios'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Newsfeed/Home";

Vue.use(VueRouter)
window.axios = axios



const routes = [
    {
        path: '/login', name: 'Login', component: () => import('@/views/Login.vue')
    },
    {
        path: '/registration', name: 'Sign Up', component: () => import('@/views/Registration')
    },
    {
        path: '', component: ()=> import('@/views/Newsfeed/Newsfeed'),
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
                { path: 'about', name: 'Admin About', component: () => import('@/views/AdminPanel/About') }
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
