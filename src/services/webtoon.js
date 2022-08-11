import { axiosInstance } from '../utils/api';

export const WebtoonAPIList = {
  getAllWebtoon: async() => await axiosInstance.get('all/week'),

  getAllMon: async() => await axiosInstance.get('all/week?day=0'),
  getAllTue: async() => await axiosInstance.get('all/week?day=1'),
  getAllWed: async() => await axiosInstance.get('all/week?day=2'),
  getAllThu: async() => await axiosInstance.get('all/week?day=3'),
  getAllFri: async() => await axiosInstance.get('all/week?day=4'),
  getAllSat: async() => await axiosInstance.get('all/week?day=5'),
  getAllSun: async() => await axiosInstance.get('all/week?day=6'),

  // 채린 숙제 : 위의 함수 처럼 나머지 api들도 작업해주세요.
}