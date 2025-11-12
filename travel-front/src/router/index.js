import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TravelDetail from '@/views/TravelDetail.vue';

// 路由规则
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home // 首页（行程总览）
  },
  {
    path: '/travel/:date', // 动态路由：日期参数
    name: 'TravelDetail',
    component: TravelDetail,
    props: true // 将路由参数转为组件props，方便组件使用
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // HTML5历史模式
  routes
});

export default router;