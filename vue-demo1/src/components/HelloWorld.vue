<template>
  <div class="hello">
    users的长度{{len}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    len: {
      type: Number,
      reqiured: true
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
