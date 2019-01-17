// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

// 配置路由
//mode:去掉#
const router = new VueRouter({
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/helloworld',
      component: HelloWorld
    }
  ],
  mode: 'history'
})


// 全局注册组件
// import Users from './components/Users.vue'
// Vue.components('users',Users)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
