<!-- src/views/Login.vue -->
<template>
  <div class="login-container">
    <h2>行程记录管理 - 登录</h2>
    <div class="login-form">
      <input
        type="email"
        v-model="email"
        placeholder="请输入你的邮箱"
        class="email-input"
      >
      <input
        type="password"
        v-model="password"
        placeholder="请输入密码"
        class="email-input"
      >
      <button @click="handleLogin" class="send-btn">登录</button>
      <!-- 注册入口 -->
      <div class="register-link">
        还没有账号？<a @click="goToRegister">点击注册</a>
      </div>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginWithPassword } from '../utils/auth';

const email = ref('');
const password = ref('');
const message = ref('');
const router = useRouter();

// 登录逻辑
const handleLogin = async () => {
  if (!email.value || !password.value) {
    message.value = '请输入邮箱和密码';
    return;
  }
  const result = await loginWithPassword(email.value, password.value);
  if (result.success) {
    message.value = '登录成功，正在跳转...';
    setTimeout(() => router.push('/home'), 1000);
  } else {
    message.value = result.message;
  }
};

// 跳转到注册页（若需要注册功能，需先创建 Register.vue 组件）
const goToRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
.login-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
}
.login-form {
  margin-top: 20px;
}
.email-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.send-btn {
  width: 100%;
  padding: 10px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.register-link {
  margin-top: 15px;
  color: #666;
}
.register-link a {
  color: #2196F3;
  text-decoration: none;
}
.message {
  margin-top: 15px;
  color: #666;
}
</style>