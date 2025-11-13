import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // 可选：用于用户登录
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOsXbvpAly4OLF_kMacXjTEI--bf3j-H4",
  authDomain: "travel-record-ad70f.firebaseapp.com",
  projectId: "travel-record-ad70f",
  storageBucket: "travel-record-ad70f.firebasestorage.app",
  messagingSenderId: "173413776707",
  appId: "1:173413776707:web:95b52090893e4f03e083f6"
};

// 初始化 Firebase 应用
const app = initializeApp(firebaseConfig);

// 导出数据库和认证实例（供其他文件使用）
export const db = getFirestore(app);
export const auth = getAuth(app); // 关键：导出 auth 实例