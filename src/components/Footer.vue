<template>
    <div>
      <button @click="changeStatus('All')">All</button>
      <button @click="changeStatus('ACTIVE')">Active</button>
      <button @click="changeStatus('COMPLETE')">Complete</button>
    </div>
</template>

<script>
import bus from '../assets/Bus.js'
export default {
    name: "Footer",
    data: () => {
      return {
        status: ""
      }
    },
    methods: {
      changeStatus(val) {
        this.status = val;
        bus.$emit("status", this.status)
      }
    }
};
</script>