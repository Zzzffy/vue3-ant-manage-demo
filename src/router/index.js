import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Login',
    component: () => import('../views/account/Login.vue')
  },
 
  {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: () => import('../views/account/ForgetPassword.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/account/Register.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router