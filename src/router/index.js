import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Join_us from '@/components/Join_us/Join_us'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },

    {
      path:'/join_us',
      name:'Join_us',
      component:Join_us
    },
    {
      path: '*',
      redirect: '/'
    },

  ]
})
