<template>
    <div>
        <input v-model="value" class="text" @keydown.enter="handleClickAdd">
        <button @click="handleClickAdd" class="addButton">Add</button>
    </div>
</template>

<script>
export default {
    name: "InputBar",
    data: function() {
        return {
           value: ""
        }
    },
    methods: {
        handleClickAdd() {
            this.$emit("push", this.value);
            this.value = ""
        }
    }
};
</script>

<style>
    .text {
        width: 400px;
        margin-right: 20px;
    }
    .addButton {
        background-color: brown
    }
</style>
