<template>
  <div id="app">
    <app-header/>
    <users/>
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
  }
}
</script>

<style>

</style>
