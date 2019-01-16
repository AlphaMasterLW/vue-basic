<!-- 底部 -->
<template>
    <footer class="footer">
        <p>{{copyright}}</p>
    </footer>
</template>

<script>
export default {
    name: "app-footer",
    data () {
        return {
            copyright: "copyright 2019 vue demo"
        };
    }
}

</script>
<style scoped>
footer{
    background: #222222;
    padding: 6px;
}
p{
    color: lightgreen;
    text-align: center;
}
</style>