<template>
    <div>
        <InputBar @push="onPushTodoItem($event)"></InputBar>
        <ListContainer></ListContainer>
    </div>
</template>

<script>
import InputBar from './InputBar.vue'
import ListContainer from './ListContainer.vue'

export default {
    name: "Body",
    components: {
        InputBar,
        ListContainer
    },
    data() {
        return {
            list: [],
            statusItems: [],
            status: ""
        }
    },
    methods: {
        onPushTodoItem(value) {
            this.$store.commit('onPushTodoItem',value)
        },
        chooseItems() {
            console.log(this.status)
            this.$store.commit('chooseItems', this.status)
        }
    }
};
</script>