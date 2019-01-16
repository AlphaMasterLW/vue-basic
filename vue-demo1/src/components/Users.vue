<template>
    <div class="users">
        <ul>
            <li v-for="(user, index) in users" :key="index" @click="user.show = !user.show">
                <h2>{{user.name}}</h2>
                <h3 v-show="user.show">{{user.position}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Users',
    data () {
        return {
            users: [
                {name: "herry",position: "web开发", show: false},
                {name: "bucky",position: "python开发", show: false},
                {name: "emily",position: "java开发", show: false},
                {name: "herry",position: "web开发", show: false},
                {name: "bucky",position: "python开发", show: false},
                {name: "emily",position: "java开发", show: false},
                {name: "herry",position: "web开发", show: false},
                {name: "bucky",position: "python开发", show: false},
                {name: "emily",position: "java开发", show: false},
            ]
        }
    }
}
</script>

<style scoped>
.users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 200px;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
    list-style-type: none;
    cursor:pointer;
}
</style>
