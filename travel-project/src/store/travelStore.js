import { defineStore } from 'pinia';
import { getTravelByDate, saveTravel } from '@/api/travelApi';

// 定义并导出状态库
export const useTravelStore = defineStore('travel', {
  state: () => ({
    currentDate: '2025-12-19', // 当前选中的日期（默认去程日期）
    travelData: { // 行程数据（与后端返回格式一致）
      hotel: '',
      breakfast: '',
      lunch: '',
      dinner: '',
      attractions: '',
      time_slots: []
    },
    loading: false, // 加载状态
    error: '' // 错误信息
  }),
  actions: {
    // 异步获取行程数据
    async fetchTravelData(date) {
      this.loading = true;
      try {
        this.travelData = await getTravelByDate(date);
        this.currentDate = date;
        this.error = '';
      } catch (err) {
        this.error = err.message || '获取行程失败';
      } finally {
        this.loading = false;
      }
    },
    // 异步保存行程数据
    async saveTravelData(data) {
      this.loading = true;
      try {
        await saveTravel(data);
        this.error = '';
        return true; // 保存成功返回true
      } catch (err) {
        this.error = err.message || '保存行程失败';
        return false; // 保存失败返回false
      } finally {
        this.loading = false;
      }
    }
  }
});