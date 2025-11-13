// src/utils/auth.js
import { auth } from './firebase'; // 直接导入初始化好的 auth 实例
import {
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updatePassword // 仅保留以备后续需要（当前方案不使用）
} from "firebase/auth";

// 配置“重置密码”链接的跳转路径（需与 Firebase 控制台授权域名一致）
const actionCodeSettings = {
  url: `${window.location.origin}/set-password`,
  handleCodeInApp: true,
};

/**
 * 发送“设置/重置密码”邮件（生成 resetPassword 链接）
 * @param {string} email - 用户邮箱
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const sendSetPasswordEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email, actionCodeSettings);
    return { success: true, message: '重置密码邮件已发送，请查收邮箱中的链接' };
  } catch (error) {
    console.error('发送邮件失败:', error);
    return { success: false, message: `发送失败：${error.message}` };
  }
};

/**
 * 从URL中提取验证代码（oobCode）
 * @returns {string|null}
 */
export const getOobCodeFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('oobCode');
};

/**
 * 验证“重置密码”链接是否有效（基于 oobCode）
 * @returns {Promise<{success: boolean, email?: string, message?: string}>}
 */
export const verifySetPasswordLink = async () => {
  const oobCode = getOobCodeFromUrl();
  if (!oobCode) {
    return { success: false, message: '缺少验证代码（oobCode）' };
  }
  try {
    // 验证 oobCode 是否有效，并可拿到关联的邮箱
    const email = await verifyPasswordResetCode(auth, oobCode);
    return { success: true, email };
  } catch (error) {
    console.error('链接验证失败:', error);
    return { success: false, message: `链接无效或已过期：${error.message}` };
  }
};

/**
 * 设置新密码（需先校验链接有效性）
 * @param {string} oobCode - 链接中的验证代码
 * @param {string} newPassword - 新密码
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const setNewPassword = async (oobCode, newPassword) => {
  try {
    await confirmPasswordReset(auth, oobCode, newPassword);
    return { success: true, message: '密码设置成功，请使用新密码登录' };
  } catch (error) {
    console.error('设置密码失败:', error);
    return { success: false, message: `设置失败：${error.message}` };
  }
};

/**
 * 密码登录
 * @param {string} email - 用户邮箱
 * @param {string} password - 用户密码
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const loginWithPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true, message: '登录成功' };
  } catch (error) {
    console.error('登录失败:', error);
    return { success: false, message: `登录失败：${error.message}` };
  }
};

/**
 * 退出登录
 * @returns {Promise<{success: boolean, message?: string}>}
 */
export const logout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('退出登录失败:', error);
    return { success: false, message: error.message };
  }
};

/**
 * 监听用户登录状态变化
 * @param {Function} callback - 状态变化时的回调函数（参数为当前用户或null）
 * @returns {Function} - 取消监听的函数
 */
export const onAuthChange = (callback) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    callback(user);
  });
  return unsubscribe; // 组件卸载时调用此函数取消监听
};

/**
 * 获取当前登录用户
 * @returns {import("firebase/auth").User|null}
 */
export const getCurrentUser = () => {
  return auth.currentUser;
};
