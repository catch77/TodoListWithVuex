<template>
    <div>
        <InputBar @push="onPushTodoItem($event)"></InputBar>
        <ListContainer :list="chooseItems" ></ListContainer>
    </div>
</template>

<script>
import InputBar from './InputBar.vue'
import ListContainer from './ListContainer.vue'
import bus from '../assets/Bus.js'

let id = 0;
const getId = () => {
  return id++;
}

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
    mounted() {
        bus.$on("status", msg => {
            this.status = msg;
        });
    },
    computed: {
        chooseItems() {
            switch (this.status) {
                case "ACTIVE":
                return this.list.filter(item => item.active === true);
                case "COMPLETE":
                return this.list.filter(item => item.active === false);
                case "ALL":
                default:
                return this.list;
            }
        }
    },
    methods: {
        onPushTodoItem(value) {
            const item = {
                value,
                finished: false,
                id: getId(),
                active: true
            };
            this.list.push(item);
        }
    }
};
</script>