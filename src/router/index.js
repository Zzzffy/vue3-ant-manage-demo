import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Login',
    component: () => import('../views/account/Login.vue'),
    meta: {
      title: "登录"
    },
    hidden: true
  },
  // 忘记密码
  {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: () => import('../views/account/ForgetPassword.vue'),
    meta: {
      title: "忘记密码"
    },
    hidden: true
  },
  // 注册
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/account/Register.vue'),
    meta: {
      title: "注册"
    },
    hidden: true
  },
  // 后台首页
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/layout/Index.vue'),
    meta: {
      title: "首页"
    },
  },
  // 管理总台
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/layout/Index.vue'),
    meta: {
      title: "管理总台"
    },
    children: [{
      // 角色管理
      path: '/role',
      name: "Role",
      component: () => import('../views/layout/manage/role/Role.vue'),
      meta: {
        title: "角色管理"
      }
    }, {
      // 用户管理
      path: '/user',
      name: "User",
      component: () => import('../views/layout/manage/user/User.vue'),
      meta: {
        title: "用户管理"
      },
    }, {
      // 菜单管理
      path: '/menu',
      name: "Menu",
      component: () => import('../views/layout/manage/menu/Menu.vue'),
      meta: {
        title: "菜单管理"
      }
    }, ]
  },
  // 信息管理
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/layout/Index.vue'),
    meta: {
      title: "信息管理"
    },
    children: [{
      // 信息列表
      path: '/infolist',
      name: "InfoList",
      component: () => import('../views/layout/info/InfoList.vue'),
      meta: {
        title: "信息列表"
      }
    }, {
      // 信息类别
      path: '/infotype',
      name: "InfoType",
      component: () => import('../views/layout/info/InfoType.vue'),
      meta: {
        title: "信息类别"
      },
    }]
  },
  // 产品管理
  {
    path: '/goods',
    name: 'Goods',
    component: () => import('../views/layout/Index.vue'),
    meta: {
      title: "产品管理"
    },
    children: [{
      // 产品列表
      path: '/goodslist',
      name: "GoodsList",
      component: () => import('../views/layout/goods/GoodsList.vue'),
      meta: {
        title: "产品列表"
      }
    }, {
      // 产品类别
      path: '/goodstype',
      name: "GoodsType",
      component: () => import('../views/layout/goods/GoodsType.vue'),
      meta: {
        title: "产品类别"
      },
    }]
  },
  // 会员管理
  {
    path: '/vip',
    name: 'Vip',
    component: () => import('../views/layout/Index.vue'),
    meta: {
      title: "会员管理"
    },
    children: [{
      // 会员类别
      path: '/viptype',
      name: "VipType",
      component: () => import('../views/layout/vip/VipType.vue'),
      meta: {
        title: "会员类别"
      },
    }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router