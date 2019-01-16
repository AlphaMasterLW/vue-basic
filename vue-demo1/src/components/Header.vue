<!-- 头部 -->
<template>
    <header class="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name: "app-header",
    data () {
        return {
            title: "VUe.js Demo"
        };
    }
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