import { createApp } from 'vue';
import { createPinia } from 'pinia'; // 引入Pinia
import router from './router'; // 引入路由
import App from './App.vue'; // 引入根组件
import './assets/css/style.css'

// 创建Vue应用并挂载
const app = createApp(App);
app.use(createPinia()); // 注册Pinia
app.use(router); // 注册路由
app.mount('#app'); // 挂载到index.html的#app元素