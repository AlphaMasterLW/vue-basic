new Vue({
    el: "#canvas",
    data: {
        num1: 0,
        num2: 0,
        age: 20
    },
    methods: {
        // addToA: function (params) {
        //     console.log('add to a')
        //     return this.num1 + this.age;
        // },
        // addToB: function (params) {
        //     console.log('add to b')
        //     return this.num2 + this.age;
        // },
    },
    computed: {
        addToA: function (params) {
            console.log('add to a')
            return this.num1 + this.age;
        },
        addToB: function (params) {
            console.log('add to b')
            return this.num2 + this.age;
        },
    },
})