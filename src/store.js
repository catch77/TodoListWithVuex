import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        list: [],
        status: "ALL",
        id: 0
    },
    mutations: {
        onPushTodoItem(state, value) {
            const item = {
                value: value,
                finished: false,
                id: state.id++,
                active: true
            };
            console.log(item)
            state.list.push(item)
        },
        changeStatus(state, payload) {
            state.list.find(n => n.id === payload).active =
            state.list.find(n => n.id === payload).active === true ? false : true;
        },
        changeFilter(state, payload) {
            state.status = payload
        }
    },
    getters: {
        getItems: state => {
            return state.items
        },
        chooseItems(state) {
            switch (state.status) {
                case "ACTIVE":
                    console.log(state.list.filter(item => item.active === true))
                    return state.list.filter(item => item.active);
                case "COMPLETE":
                    console.log(state.list.filter(item => item.active === false))
                return state.list.filter(item => !item.active);
                case "ALL":
                default:
                return state.list;
            }
        }
    }
})

export default store