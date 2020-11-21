import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        set_User: (state, user) => {
            localStorage.setItem('token', user.token);
            localStorage.setItem('name', user.name);
            state.user = user;
            //console.log(state);
        },
        unset_User: (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            state.user = {};
        }
    }
})

export default store