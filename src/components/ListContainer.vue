<template>
    <div class="listContainer">
        <ol>
            <div>
                <li v-for="n in $store.state.list"
                :key="n.id">
                <input type="checkbox" @change="$store.commit('changeStatus',n.id)"/>
                    <span :class="{change:!n.active}">{{n.value}}</span>
                </li>
            </div>
        </ol>
    </div>
</template>

<script>

export default {
    name: "ListContainer",
    methods: {

    }
};
</script>

<style>
ol {
  padding-left: 20px;
  display: block;
  list-style-type: decimal;
}
li {
  padding: 5px;
  color: #000;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style-type: decimal;
}
li:nth-child(even) {
  background: #f4ecec;
}
.change {
  text-decoration: line-through;
}
</style>
