<template>
    <div class="listContainer">
        <ol>
            <div>
                <li v-for="n in list"
                :key="n.id">
                <input type="checkbox" @change="changeStatus(n.id)"/>
                    <span :class="{change:!n.active}">{{n.value}}</span>
                </li>
            </div>
        </ol>
    </div>
</template>

<script>

export default {
    name: "ListContainer",
    data: function() {
        return {
            n: ""            
        }
    },
    props: {
        list: {
            type:Array,
            default: () => []
        }
    },
    methods: {
        changeStatus(id) {
            this.list.find(n => n.id === id).active =
            this.list.find(n => n.id === id).active === true ? false : true;
        }
    }
};
</script>