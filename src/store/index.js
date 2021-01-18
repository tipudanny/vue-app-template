import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user_info:''
    },
    mutations: {
        userInfo: (state, user) => {
            state.user_info = (user)
        }
    },
    actions: {
        async getUserInfo({ commit }, user) {
            commit("userInfo", user);
        }
    },
})

export default store