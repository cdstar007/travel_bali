import { db } from '../utils/firebase';
import { collection, doc, getDoc, setDoc, query, where, getDocs } from 'firebase/firestore';
import { getCurrentUser } from '../utils/auth';

// 行程集合名称
const travelCollection = collection(db, 'travelRecords');

// 获取当前用户的指定日期行程
export async function getTravelByDate(date) {
  const user = getCurrentUser();
  if (!user) throw new Error('请先登录');

  // 文档 ID 格式：用户ID_日期（确保数据隔离）
  const docId = `${user.uid}_${date}`;
  const docRef = doc(travelCollection, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return {
      hotel: '',
      breakfast: '',
      lunch: '',
      dinner: '',
      attractions: '',
      timeSlots: []
    };
  }
}

// 保存当前用户的行程
export async function saveTravel(date, data) {
  const user = getCurrentUser();
  if (!user) throw new Error('请先登录');

  const docId = `${user.uid}_${date}`;
  const docRef = doc(travelCollection, docId);
  // 保存时附加用户信息（可选，便于管理）
  const userData = {
    ...data,
    userId: user.uid,
    userEmail: user.email,
    updatedAt: new Date().toISOString()
  };
  await setDoc(docRef, userData);
  return true;
}

// 获取当前用户的所有行程（可选功能）
export async function getUserTravels() {
  const user = getCurrentUser();
  if (!user) throw new Error('请先登录');

  const q = query(travelCollection, where('userId', '==', user.uid));
  const querySnapshot = await getDocs(q);
  const travels = [];
  querySnapshot.forEach((doc) => {
    travels.push({
      date: doc.id.split('_')[1], // 从文档ID中提取日期
      ...doc.data()
    });
  });
  return travels;
}