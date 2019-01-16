<!-- 头部 -->
<template>
    <header class="header">
        <h1>{{titles}}</h1>
        <button @click="changeTitle">改变</button>
    </header>
</template>

<script>
export default {
    name: "app-header",
    data () {
        return {
            title: "VUe.js Demo"
        };
    },
    props:{
        titles: {
            type: String,
            required: true
        }
    },
    methods: {
        changeTitle: function name(params) {
            // this.titles = '我被改变了'
            this.$emit('titleChanged', "子向父传值")
        }
    },
}

</script>
<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222222;
    text-align: center;
}
</style>