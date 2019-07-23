<template>
    <div>
      <button @click="changeFilter('All')">All</button>
      <button @click="changeFilter('ACTIVE')">Active</button>
      <button @click="changeFilter('COMPLETE')">Complete</button>
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
      changeFilter(val) {
        console.log('changeFilter'+val)
        this.$store.commit('changeFilter',val);
      }
    }
};
</script>