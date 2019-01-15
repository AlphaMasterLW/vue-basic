new Vue({
    el: "#canvas",
    data: {
        X: 0,
        Y: 0,
    },
    methods: {
        updateXY: function (event) {
            this.X = event.offsetX;
            this.Y = event.offsetY;
        }
    },
})