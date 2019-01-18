<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    //fetch
    // fetch('/apis/test/testToken.php',{
    //   method: 'post',
    //   headers: {
    //     'Content-type': 'application/json',//可有可无
    //     token: "123456"
    //   },
    //   body: JSON.stringify({
    //     username:'herry',
    //     password: '123456',
    //   })
    // }).then(result => {
    //   return result.json();
    // }).then(data => {
    //   console.log(data)
    // })

    //axios
    this.$axios.post('/apis/test/testToken.php',{username:'herry',password: '123456',})
    .then(data => {
      
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
