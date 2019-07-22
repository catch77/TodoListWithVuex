<template>
  <div id="ToDoList">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'ToDoList',
  components: {
    Header,
    Body,
    Footer
  },
}
</script>

<style>

</style>
