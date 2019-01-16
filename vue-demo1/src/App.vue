<template>
  <div id="app">
    <app-header/>
    <users :users="users"/>
    <app-footer/>
  </div>
</template>

<script>
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    "users": Users,
    "app-header": Header,
    "app-footer": Footer,
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
            ]
    }
  },
}
</script>

<style>

</style>
