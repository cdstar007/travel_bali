<template>
  <div class="container">
    <h1>行程记录管理</h1>
    
    <!-- 航班信息 -->
    <div class="flight-info">
      <h2>航班信息</h2>
      <div class="flight-item">
        <strong>去程：</strong>
        2025年12月19日 星期五<br>
        台北桃园国际机场（Terminal 2）10:00 出发 → 巴厘岛登巴萨国际机场（Terminal I - 国际航站楼）15:30 到达<br>
        航班号：BR 255，飞行时长：05:30，机型：空客A330-300
      </div>
      <div class="flight-item">
        <strong>返程：</strong>
        2025年12月27日 星期六<br>
        巴厘岛登巴萨国际机场（Terminal I - 国际航站楼）16:40 出发 → 台北桃园国际机场（Terminal 2）21:45 到达<br>
        航班号：BR 256，飞行时长：05:05，机型：空客A330-300
      </div>
    </div>

    <!-- 日期选择栏 -->
    <div class="day-tab">
      <button 
        v-for="date in dateRange" 
        :key="date" 
        :class="['day-btn', { 'active': currentDate === date }]"
        @click="handleDateChange(date)"
      >
        {{ formatDateBtn(date) }}
      </button>
    </div>

    <!-- 加载状态 -->
    <div v-if="loading" class="loading">加载中...</div>

    <!-- 错误提示 -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <!-- 行程表单 -->
    <div v-else-if="!loading" class="daily-plan">
      <div class="day-content">
        <!-- 酒店记录 -->
        <div class="record-section">
          <h3>酒店记录</h3>
          <input 
            type="text" 
            class="record-input" 
            placeholder="请输入今日入住酒店名称及地址"
            v-model="travelData.hotel"
          >
        </div>

        <!-- 三餐记录 -->
        <div class="record-section">
          <h3>三餐记录</h3>
          <input 
            type="text" 
            class="record-input" 
            placeholder="早餐："
            v-model="travelData.breakfast"
          >
          <input 
            type="text" 
            class="record-input" 
            placeholder="午餐："
            v-model="travelData.lunch"
          >
          <input 
            type="text" 
            class="record-input" 
            placeholder="晚餐："
            v-model="travelData.dinner"
          >
        </div>

        <!-- 景点记录 -->
        <div class="record-section">
          <h3>景点记录</h3>
          <input 
            type="text" 
            class="record-input" 
            placeholder="今日游览景点："
            v-model="travelData.attractions"
          >
        </div>

        <!-- 时间段行程 -->
        <div class="record-section">
          <h3>行程安排（按时间段）</h3>
          <div 
            v-for="(slot, index) in travelData.timeSlots" 
            :key="index" 
            class="time-slot"
          >
            <select 
              name="time" 
              v-model="slot.time"
              class="time-select"
            >
              <option value="">选择时间</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
            <input 
              type="text" 
              placeholder="请输入行程内容（如：前往某景点、参加某活动等）"
              v-model="slot.content"
            >
            <button 
              class="delete-btn"
              @click="removeSlot(index)"
            >
              删除
            </button>
          </div>
          <button 
            class="add-slot-btn"
            @click="addSlot"
          >
            添加时间段行程
          </button>
        </div>

        <button 
          class="save-record-btn"
          @click="saveTravel"
        >
          保存今日记录
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../utils/firebase';  // 确保firebase配置正确
import { doc, getDoc, setDoc } from 'firebase/firestore';

// 生成日期范围（2025-12-19 到 2025-12-27）
const generateDateRange = () => {
  const start = new Date('2025-12-19');
  const end = new Date('2025-12-27');
  const dates = [];
  let current = new Date(start);
  while (current <= end) {
    dates.push(current.toISOString().split('T')[0]);
    current.setDate(current.getDate() + 1);
  }
  return dates;
};

// 状态管理
const dateRange = ref(generateDateRange());
const currentDate = ref('2025-12-19'); // 默认日期
const travelData = ref({
  hotel: '',
  breakfast: '',
  lunch: '',
  dinner: '',
  attractions: '',
  timeSlots: [] // 时间段行程数组
});
const loading = ref(false);
const errorMessage = ref(''); // 错误信息

// 格式化日期按钮显示文本（如：12月19日）
const formatDateBtn = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
};

// 处理日期切换
const handleDateChange = (date) => {
  currentDate.value = date;
  loadTravelData();
};

// 页面加载时获取数据
onMounted(() => {
  // 检查Firebase是否正确加载
  if (!db) {
    errorMessage.value = 'Firebase初始化失败，请检查配置';
    return;
  }
  loadTravelData();
});

// 从Firestore加载指定日期的行程
const loadTravelData = async () => {
  loading.value = true;
  errorMessage.value = '';
  try {
    // 确保日期格式正确
    if (!currentDate.value) {
      throw new Error('日期格式不正确');
    }

    // Firestore文档引用
    const docRef = doc(db, 'travelRecords', currentDate.value);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      // 有数据则赋值
      travelData.value = { ...docSnap.data() };
    } else {
      // 无数据则重置为默认结构
      travelData.value = {
        hotel: '',
        breakfast: '',
        lunch: '',
        dinner: '',
        attractions: '',
        timeSlots: []
      };
    }
  } catch (err) {
    console.error('加载失败：', err);
    errorMessage.value = `加载行程失败: ${err.message}`;
  } finally {
    loading.value = false;
  }
};

// 添加时间段
const addSlot = () => {
  travelData.value.timeSlots.push({ time: '08:00', content: '' });
};

// 删除时间段
const removeSlot = (index) => {
  travelData.value.timeSlots.splice(index, 1);
};

// 保存行程到Firestore
const saveTravel = async () => {
  loading.value = true;
  errorMessage.value = '';
  try {
    if (!currentDate.value) {
      throw new Error('请选择日期');
    }

    const docRef = doc(db, 'travelRecords', currentDate.value);
    // 写入数据（存在则更新，不存在则创建）
    await setDoc(docRef, travelData.value, { merge: true });
    alert('今日记录已成功保存到Firebase！');
  } catch (err) {
    console.error('保存失败：', err);
    errorMessage.value = `保存行程失败: ${err.message}`;
  } finally {
    loading.value = false;
  }
};
</script>