<template>
  <div id="app">
    <app-header @titleChanged="updateTitle($event)" :titles="title"/>
    <hello-world :len="users.length"></hello-world>
    <users :users="users"/>
    <app-footer :titles="title"/>
  </div>
</template>

<!--
  传值： string number boolean
  传引用： array object
-->

<script>
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    "users": Users,
    "app-header": Header,
    "app-footer": Footer,
    "hello-world": HelloWorld
  },
  data() {
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
            ],
      title: '我是title'
    }
  },
  methods: {
    updateTitle: function name(title) {
      this.title = title;
    }
  },
}
</script>

<style>

</style>
