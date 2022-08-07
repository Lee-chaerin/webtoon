import { axiosInstance } from '../utils/api';

export const WebtoonAPIList = {
  getAllWebtoon: async() => await axiosInstance.get('all/week')
  // 채린 숙제 : 위의 함수 처럼 나머지 api들도 작업해주세요.
}