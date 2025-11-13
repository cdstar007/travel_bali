<!-- src/views/Register.vue -->
<template>
  <div class="register-container">
    <h2>行程记录管理 - 注册</h2>

    <div class="register-form">
      <input
        type="email"
        v-model.trim="email"
        placeholder="请输入你的邮箱"
        class="email-input"
        :disabled="loading"
        @keyup.enter="sendRegisterEmail"
      />

      <button
        class="send-btn"
        :disabled="loading || !isEmailValid"
        @click="sendRegisterEmail"
      >
        {{ loading ? '发送中…' : '发送设置密码邮件' }}
      </button>

      <p v-if="message" class="message" :class="{ error: isError, success: !isError }">
        {{ message }}
      </p>

      <ul class="tips">
        <li>我们会给该邮箱发送一封“设置密码”邮件。</li>
        <li>请在新邮件中点击链接完成密码设置后再登录。</li>
        <li>若未收到，请检查垃圾邮箱或稍后重试。</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { sendSetPasswordEmail } from '../utils/auth'

const email = ref('')
const message = ref('')
const isError = ref(false)
const loading = ref(false)

const isEmailValid = computed(() => {
  // 简单邮箱格式校验
  const v = email.value
  if (!v) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
})

const sendRegisterEmail = async () => {
  // 基本校验
  if (!email.value) {
    isError.value = true
    message.value = '请输入邮箱'
    return
  }
  if (!isEmailValid.value) {
    isError.value = true
    message.value = '请输入有效的邮箱地址'
    return
  }

  loading.value = true
  message.value = ''
  isError.value = false

  try {
    // 这里复用的是“重置密码”邮件发送逻辑（内部应为 sendPasswordResetEmail）
    const result = await sendSetPasswordEmail(email.value)

    // 期望 result: { success: boolean, message: string }
    if (result?.success) {
      isError.value = false
      message.value = result.message || '设置密码邮件已发送，请前往邮箱完成设置'
    } else {
      isError.value = true
      message.value = result?.message || '发送失败，请稍后再试'
    }
  } catch (err) {
    // 对常见错误给出更友好的提示
    isError.value = true
    const code = err?.code || ''
    if (code === 'auth/operation-not-allowed') {
      message.value = '当前方式未启用，请联系管理员在 Firebase 控制台开启 Email/Password 登录'
    } else if (code === 'auth/invalid-email') {
      message.value = '邮箱格式不正确'
    } else if (code === 'auth/user-not-found') {
      // 对于“注册”场景，通常也允许向未存在的邮箱发送重置/设置密码邮件
      // 如果后端策略不同，可在此自定义提示
      message.value = '用户不存在，但已尝试发送设置密码邮件，请检查邮箱'
    } else if (code === 'auth/too-many-requests') {
      message.value = '请求过于频繁，请稍后再试'
    } else {
      message.value = `发送失败：${err?.message || '未知错误'}`
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.register-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
}

.email-input {
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  outline: none;
}
.email-input:disabled {
  background: #f5f7fa;
  cursor: not-allowed;
}

.send-btn {
  padding: 10px 12px;
  font-size: 16px;
  color: #fff;
  background: #409eff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background .2s ease;
}
.send-btn:hover {
  background: #66b1ff;
}
.send-btn:disabled {
  background: #a0cfff;
  cursor: not-allowed;
}

.message {
  font-size: 14px;
  line-height: 1.4;
  margin-top: 6px;
}
.message.success {
  color: #2db55d;
}
.message.error {
  color: #f56c6c;
}

.tips {
  margin-top: 8px;
  color: #909399;
  font-size: 13px;
  text-align: left;
  list-style: disc;
  padding-left: 20px;
}
</style>
