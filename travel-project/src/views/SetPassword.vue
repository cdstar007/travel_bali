<template>
  <div class="set-password-container">
    <h2>设置新密码</h2>

    <div v-if="loading" class="loading">验证链接中...</div>

    <div v-else-if="isLinkValid" class="password-form">
      <div class="tip" v-if="email">为账户 {{ email }} 设置新密码</div>

      <div class="form-group">
        <label>新密码</label>
        <input
          type="password"
          v-model="newPassword"
          placeholder="请输入至少6位密码"
          class="password-input"
        >
      </div>

      <div class="form-group">
        <label>确认新密码</label>
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="请再次输入密码"
          class="password-input"
        >
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      </div>

      <button @click="handleSetPassword" class="set-btn">设置密码</button>
      <p v-if="message" class="message">{{ message }}</p>
    </div>

    <div v-else class="error">
      <p>{{ message || '无效或已过期的重置链接，请重新获取' }}</p>
      <button @click="$router.push('/')" class="back-btn">返回登录页</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {
  verifySetPasswordLink,
  setNewPassword,
  getOobCodeFromUrl
} from '../utils/auth';

const newPassword = ref('');
const confirmPassword = ref('');
const passwordError = ref('');
const message = ref('');
const loading = ref(true);
const isLinkValid = ref(false);
const email = ref('');
const router = useRouter();
const oobCode = getOobCodeFromUrl(); // 获取链接中的验证代码

onMounted(async () => {
  if (!oobCode) {
    message.value = '链接无效，未找到验证代码';
    loading.value = false;
    return;
  }

  // 验证链接有效性（resetPassword）
  const result = await verifySetPasswordLink();
  loading.value = false;
  if (result.success) {
    isLinkValid.value = true;
    if (result.email) email.value = result.email;
  } else {
    message.value = result.message;
  }
});

// 验证密码是否一致
const validatePassword = () => {
  if (newPassword.value.length < 6) {
    passwordError.value = '密码长度至少6位';
    return false;
  }
  if (newPassword.value !== confirmPassword.value) {
    passwordError.value = '两次输入的密码不一致';
    return false;
  }
  passwordError.value = '';
  return true;
};

// 提交设置密码
const handleSetPassword = async () => {
  if (!validatePassword()) return;

  const result = await setNewPassword(oobCode, newPassword.value);
  if (result.success) {
    message.value = result.message;
    // 3秒后跳转到登录页
    setTimeout(() => router.push('/'), 3000);
  } else {
    message.value = result.message;
  }
};
</script>

<style scoped>
.set-password-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
}

.loading {
  color: #666;
  padding: 20px;
}

.password-form {
  margin-top: 20px;
  text-align: left;
}

.tip {
  margin-bottom: 10px;
  color: #555;
  font-size: 14px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.password-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.set-btn {
  width: 100%;
  padding: 10px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.error-message {
  color: #f44336;
  font-size: 14px;
  margin-top: 5px;
}

.message {
  margin-top: 15px;
  color: #4CAF50;
}

.error {
  color: #f44336;
  padding: 20px;
}

.back-btn {
  margin-top: 15px;
  padding: 8px 16px;
  background-color: #ddd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
