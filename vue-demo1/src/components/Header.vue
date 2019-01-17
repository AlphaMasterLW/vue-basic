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
    // 可用以设置加载动画
    beforeCreate() {
        alert("组件实例化之前执行的函数")
    },
    //请求接口/结束加载
    created() {
        alert("组件实例化之前完毕，但页面还未显示的")
    },
    //检查el或vue.$mount(el)->检查template
    //挂载前
    beforeMount() {
        alert("组件挂载前，页面仍未展示，但虚拟dom已经配置")
    },
    //挂载，方法结束后页面显示
    mounted() {
        alert("组件挂载后，此方法执行后，页面显示")
    },
    //组件更新前
    beforeUpdate() {
        alert("组件更新前，页面仍未更新，但虚拟dom已经配置")
    },
    updated() {
        alert("组件更新后，此方法执行后，页面显示")
    },
    beforeDestroy() {
        alert("组件销毁前")
    },
    destroyed() {
        alert("组件已经销毁")
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