Vue.component('greeting',{
    template:`<p>{{name}}:给大家介绍一下我的好朋友
                <button @click="changeName">换名</button></p>`,
    data: function (){
        return {
            name: '鹿晗'
        }
    },
    methods: {
        changeName: function (params) {
            this.name = 'herry'
        }
    },
})

new Vue({
    el: '#vue-app-one',
    data: {
        
    }
});

new Vue({
    el: '#vue-app-two',
    data: {
        
    }
});