import request from './index';

// 获取指定日期的行程
export function getTravelByDate(date) {
  return request({
    url: `/api/travel/${date}`, // 对接后端PHP接口：GET /api/travel/2025-12-19
    method: 'GET'
  });
}

// 保存行程（新增/修改）
export function saveTravel(data) {
  return request({
    url: '/api/travel/save', // 对接后端PHP接口：POST /api/travel/save
    method: 'POST',
    data: data // 传入行程数据（酒店、三餐、时间段等）
  });
}