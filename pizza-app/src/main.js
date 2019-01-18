import Vue from 'vue'
import VueRouter from "vue-router"

import App from './App'
import { routes } from './routes.js'

Vue.use(VueRouter)

//以下两种方法都可以！！！

// const router = new VueRouter({
//   routes:[
//     {path: '/',component: Home},
//     {path: '/menu',component: Menu},
//     {path: '/admin',component: Admin},
//     {path: '/about',component: About},
//     {path: '/login',component: Login},
//     {path: '/register',component: Register},
//     {path: '*',redirect:'/'},
//   ],
//   mode: 'history'
// })

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition){
    // return {
    //   x:0,
    //   y:100
    // }
    // return {
    //   selector: '.btn'
    // }
    if(savedPosition){
      return savedPosition
    }else{
      return {
          x:0,
          y:0
        }
    }
  }
})

new Vue({
  router,
  el: '#app',
  render: h => h(App),
})
