<template>
    <div>
      <button @click="changeStatus('All')">All</button>
      <button @click="changeStatus('ACTIVE')">Active</button>
      <button @click="changeStatus('COMPLETE')">Complete</button>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data: () => {
      return {
        status: ""
      }
    },
    methods: {
      changeStatus(val) {
        this.$store.commit('chooseItems',val);
      }
    }
};
</script>