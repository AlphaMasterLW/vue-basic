<!--  -->
<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎大家品尝Pizza</h1>
        <h2>这里有你非常喜欢的pizza</h2>
        <button class="btn btn-success" @click="goToMenu()">let's order!</button>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {

    }
  },
  methods: {
    goToMenu: function (params) {

      //跳转到上一次浏览的页面
      // this.$router.go(-1)

      //指定跳转的地址
      // this.$router.replace('/menu');

      //指定跳转路由的名字下
      // this.$router.replace({name: 'menuLink'});

      //通过push跳转
      // this.$router.push('/menu')
      // this.$router.push({name: 'menuLink'})
    }
  },
};
</script>
<style scoped>
#home {
  background: url(../../src/assets/logo.png) no-repeat 0 0;
  background-size: 100%;
  height: 85vh;
  padding: 10%;
}

h1,h2{
  margin: 6%
}

.background{
  background: #eeeeee;
  opacity: 0.8;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px 0;
}
</style>