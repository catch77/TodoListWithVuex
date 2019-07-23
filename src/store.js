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
        chooseItems(state, payload) {
            console.log(payload)
            switch (payload) {
                case "ACTIVE":
                    console.log(state.list.filter(item => item.active === true))
                    return state.list.filter(item => item.active === true);
                case "COMPLETE":
                    console.log(state.list.filter(item => item.active === false))
                return state.list.filter(item => item.active === false);
                case "ALL":
                default:
                return state.list;
            }
        },
        changeStatus(state, payload) {
            state.list.find(n => n.id === payload).active =
            state.list.find(n => n.id === payload).active === true ? false : true;
        },
        changeFilter(state, payload) {
            state.status = payload
        }
    },
    actions: {
        onPushTodoItem(context) {
            context.commit('onPushTodoItem')
        },
        chooseItems(context) {
            context.commit('chooseItems')
        },
        changeStatus(context) {
            context.commit('changeStatus')
        }
    }
})

export default store