import Vue from 'vue'
import VueRouter from 'vue-router'
import loginAndRegister from '../components/loginAndRegister.vue'
import main from '../components/main.vue'
import personal from '../components/personal.vue'
import updatePersonal from '../components/updatePersonal.vue'
import userManage from '../components/userManage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    redirect: '/loginAndRegister'
  },
  {
    name:'/loginAndRegister',
    path:'/loginAndRegister',
    component:loginAndRegister
  },
  {
    name:'/main',
    path:'/main',
    component:main
  },
  {
    name:'/personal',
    path:'/personal',
    component:personal
  },
  {
    name:'/updatePersonal',
    path:'/updatePersonal',
    component:updatePersonal
  },
  {
    name:'/userManage',
    path:'/userManage',
    component:userManage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
