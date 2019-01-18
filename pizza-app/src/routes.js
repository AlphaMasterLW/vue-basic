import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三极路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


//全局导航守卫
// router.beforeEach((to,from,next) => {

//   //判断store.getter.isLogin === false
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('您没有登录')
//     next('/login')
//   }
// })

//后置钩子
// router.afterEach((to, from) => {

// })
export const routes = [
  {path: '/',name:'homeLink',components: {
    default: Home,
    'orderingGuide': OrderingGuide,
    'delivery': Delivery,
    'history': History
    }
  },
  {path: '/menu',name:'menuLink',component: Menu},
  {path: '/admin',name:'adminLink',component: Admin, beforeEnter: (to, from, next) => {
    // alert('非登录状态不能访问')
    next()
  }},
  {path: '/about',name:'aboutLink',redirect:'/about/contact',component: About,children:[
    {path: '/about/contact',name:'contactLink',redirect:'/phone',component: Contact,children:[
      {path: '/phone',name:'phoneLink',component: Phone},
      {path: '/personName',name:'personNameLink',component: PersonName},
    ]},
    {path: '/history',name:'historyLink',component: History},
    {path: '/delivery',name:'deliveryLink',component: Delivery},
    {path: '/orderingGuide',name:'orderingGuideLink',component: OrderingGuide},
  ]},
  {path: '/login',name:'loginLink',component: Login},
  {path: '/register',name:'registerLink',component: Register},
  {path: '*',redirect:'/'},
]