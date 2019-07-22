import Vue from 'vue'
import ToDoList from './ToDoList.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ToDoList),
}).$mount('#app')
