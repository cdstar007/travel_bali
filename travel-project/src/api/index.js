import axios from 'axios';

// 创建Axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 后端API基础地址（从环境变量读取）
  timeout: 5000 // 请求超时时间
});

// 请求拦截器：添加请求头、处理请求数据
service.interceptors.request.use(
  (config) => {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器：统一处理响应结果、错误提示
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status !== 'success') {
      console.error('API错误：', res.message);
      return Promise.reject(res);
    }
    return res.data; // 直接返回数据，简化前端使用
  },
  (error) => {
    console.error('网络错误：', error.message);
    return Promise.reject(error);
  }
);

export default service;