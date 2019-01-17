<template>
  <div id="home">
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
import Users from './Users'
import Header from './Header'
import Footer from './Footer'
import HelloWorld from './HelloWorld'

export default {
  name: 'Home',
  components: {
    "users": Users,
    "app-header": Header,
    "app-footer": Footer,
    "hello-world": HelloWorld
  },
  data() {
    return {
      title: '我是title',
      users:[]
    }
  },
  created() {
      this.$http.get('https://jsonplaceholder.typicode.com/users')
                .then(data => {
                    this.users = data.body;
                })
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
