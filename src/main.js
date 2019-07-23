import Vue from 'vue'
import ToDoList from './ToDoList.vue'
import store from './store.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(ToDoList),
  store
}).$mount('#app')
