import { axiosInstance } from '../utils/api';

export const WebtoonAPIList = {
  getAllWebtoon: async() => await axiosInstance.get('all'),

  getWebtoonForm: async(platform) => await axiosInstance.get(`${platform}`),

  getPlatformDay: async(platform, week) => await axiosInstance.get(`${platform}/week?day=${week}`),

  getSearchWebtoon: async(keyword) => await axiosInstance.get(`search?keyword=${keyword}`),  

  // 채린 숙제 : 위의 함수 처럼 나머지 api들도 작업해주세요.

  // 만든것 : 플랫폼별, 요일별, 검색 / 플랫폼별 요일, 연재중, 연재완료(3개 지원선배한테 만드는거 맞는지 물어보기)
}