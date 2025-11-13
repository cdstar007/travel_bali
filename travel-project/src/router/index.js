import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'; // 导入注册组件
import SetPassword from '../views/SetPassword.vue'; // 新增
import { getCurrentUser } from '../utils/auth';


const routes = [
  {
    path: '/', // 默认路由设为登录页
    name: 'Login',
    component: Login
  },
  {
    path: '/home', // 行程首页路径改为 /home
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true } // 需要登录才能访问
  },
  {
    path: '/set-password',
    name: 'SetPassword',
    component: SetPassword
  },
  { 
    path: '/register', 
    name: 'Register',
    component: Register 
  }
];

// 路由守卫逻辑不变
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = getCurrentUser();
    if (!user) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;