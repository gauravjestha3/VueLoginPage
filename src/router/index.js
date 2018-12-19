import Vue from 'vue'
import Router from 'vue-router'
const Dashboard = resolve => require(['@/components/Dashboard/Dashboard.vue'], resolve)
const Login = resolve => require(['@/components/Login/Login.vue'], resolve)
Vue.use(Router)

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }]
})

routes.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && to.path !== '/') {
    next('/')
  } else {
    next()
  }
})

export default routes
